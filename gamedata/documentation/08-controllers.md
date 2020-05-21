# Controllers

There are two controllers you have access to:

```
args.inputs.controller_one
args.inputs.controller_two
```

Determining if a button was pressed:

```
if args.inputs.controller_one.a.press?
  puts 'The button was in the down state'
end
```

Determining if a button is being held:

```
if args.inputs.controller_one.a.hold?
  puts 'The button is being held'
end
```

Determining if a button is released:

```
if args.inputs.controller_one.a.release?
  puts 'The button has been released'
end
```

# List of keys:

```
args.inputs.controller_one.up?
args.inputs.controller_one.down?
args.inputs.controller_one.left?
args.inputs.controller_one.right?
args.inputs.controller_one.a
args.inputs.controller_one.b
args.inputs.controller_one.x
args.inputs.controller_one.y
args.inputs.controller_one.l1
args.inputs.controller_one.r1
args.inputs.controller_one.l2
args.inputs.controller_one.r2
args.inputs.controller_one.l3
args.inputs.controller_one.r3
args.inputs.controller_one.start
args.inputs.controller_one.dpad_up
args.inputs.controller_one.dpad_down
args.inputs.controller_one.dpad_left
args.inputs.controller_one.dpad_right
args.inputs.controller_one.left_analog.x
args.inputs.controller_one.left_analog.y
args.inputs.controller_one.left_analog.x_percent
args.inputs.controller_one.left_analog.y_percent
args.inputs.controller_one.right_analog.x
args.inputs.controller_one.right_analog.y
args.inputs.controller_one.right_analog.x_percent
args.inputs.controller_one.right_analog.y_percent
```
