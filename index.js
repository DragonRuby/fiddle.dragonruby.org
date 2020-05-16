import { VimWasm } from './node_modules/vim-wasm/vimwasm.js';

const screenCanvasElement = document.getElementById('vim-screen');
let vim = null;

// Handle drag and drop
function cancel(e) {
    e.stopPropagation();
    e.preventDefault();
}

window.startVim = function() {
  vim = new VimWasm({
    workerScriptPath: './node_modules/vim-wasm/vim.js',
    canvas: screenCanvasElement,
    input: document.getElementById('vim-input'),
  });

  vim.onFileExport = (fullpath, contents) => {
    const slashIdx = fullpath.lastIndexOf('/');
    const filename = slashIdx !== -1 ? fullpath.slice(slashIdx + 1) : fullpath;
    const blob = new Blob([contents], { type: 'application/octet-stream' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    a.rel = 'noopener';
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  vim.onError = console.error;
  vim.start({
    dirs: ['/app', '/js'],
    cmdArgs: ['/app/main.rb'],
    files: {
      '/app/main.rb': `def tick args
  args.outputs.labels << {
    x: args.grid.w.half, y: args.grid.h - 5,
    text: "w: #{args.grid.w}, h: #{args.grid.h}",
    alignment_enum: 1
  }

  args.outputs.labels << {
    x: args.grid.w.half, y: args.grid.h - 15,
    text: "hello world",
    alignment_enum: 1
  }

  args.outputs.sprites << {
    x: 5, y: 5, w: 16, h: 16,
    angle: 90,
    path: 'sprites/ship-blue.png'
  }

  args.outputs.sprites << {
    x: 21, y: 5, w: 16, h: 16,
    angle: 90,
    path: 'sprites/ship-red.png'
  }
end

$gtk.reset
`,
      '/js/save.js': `
window.gtk.play();
FS.writeFile('/app/main.rb', window.main_rb);
      `,
      '/home/web_user/.vim/vimrc': `
set expandtab tabstop=2 shiftwidth=2 softtabstop=2
colorscheme onedark
syntax enable
set guifont=monospace:h14

function! SaveGTK()
  :silent w /app/main.rb
  :call setreg('x', [])
  :let @x = "window.main_rb = \`"
  :redir! > /js/main-rb.js | silent echon @x | redir END

  :call setreg('x', [])
  :let @x = join(readfile("/app/main.rb"), "\\n")
  :redir! >> /js/main-rb.js | silent echon @x | redir END

  :call setreg('x', [])
  :let @x = "\`;"
  :redir! >> /js/main-rb.js | silent echon @x | redir END
  :silent !/js/main-rb.js
  :silent !/js/save.js
endfunction

command SaveGTK execute ":call SaveGTK()"
cabbrev w <c-r>=(getcmdtype()==':' && getcmdpos()==1 ? 'SaveGTK' : 'w')<CR>

call feedkeys("i")
`,
    },
  });

  vim.onVimExit = status => { window.startVim(); };
  window.vim = vim;
}

window.startVim();
window.saveFile = function() {

}
