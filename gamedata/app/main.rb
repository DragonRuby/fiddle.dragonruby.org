def tick args
  args.state.x ||= 21
  args.state.bx ||= 21
  if args.inputs.mouse.click
    args.state.x = args.inputs.mouse.x
  end

  if args.inputs.keyboard.left
    args.state.bx -= 10
  end

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
    x: args.state.bx, y: 5, w: 16, h: 16,
    angle: 90,
    path: 'sprites/ship-blue.png'
  }

  args.outputs.sprites << {
    x: args.state.x, y: 5, w: 16, h: 16,
    angle: 90,
    path: 'sprites/ship-red.png'
  }
end

$gtk.reset
