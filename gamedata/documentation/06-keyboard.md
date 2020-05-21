# Keyboard

Determining if `a` key is in the down state (pressed). This happens once each time the key is pressed:

```
if args.inputs.keyboard.a.press?
  puts 'The key is pressed'
end
```

Determining if a key is being held. This happens every tick while the key is held down:

```
if args.inputs.keyboard.a.hold?
  puts 'The key is being held'
end
```

Determining if a key is in the down state or is being held:

```
if args.inputs.keyboard.a?
  puts 'The key is pressed or being held'
end
```

Determining if a key is in the up state (released). This happens once each time the key is released:

```
if args.inputs.keyboard.a.release?
  puts 'The key is released'
end
```

# List of keys:

```
0  => :zero
1  => :one
2  => :two
3  => :three
4  => :four
5  => :five
6  => :six
7  => :seven
8  => :eight
9  => :nine
\b => :backspace
\e => :escape
\r => :enter
\t => :tab
[  => :left_bracket
]  => :right_bracket
;  => :semicolon
=  => :equals
-  => :minus
   => :space
'  => :quote
`  => :backtick
~  => :tilde
.  => :period
,  => :comma
+  => :plus
@  => :at
/  => :slash
\  => :backslash
^  => :caret
²  => :superscript_two
§  => :section_sign
º  => :ordinal_indicator
right arrow => :right_arrow
left arrow  => :left_arrow
down arrow  => :down_arrow
up arrow    => :up_arrow
delete key  => :delete
alt key => :left_alt, :right_alt (:alt? checks both)
ctrl key => :left_ctrl, :right_ctrl (:ctrl? checks both)
shift key => :left_shift, :right_shift (:shift? checks both)
windows key/command key => :left_meta, :right_meta (:meta? checks both)
```
