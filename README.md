# easter-egg.js

## Easily hide your easter eggs in the browser!
#### Forked from [Lou Acresti](https://github.com/namuol)'s [cheet.js](https://github.com/namuol/cheet.js)

### Demo

[Try it out!](https://imears.github.io/easter-egg/)

### Install

```npm install easter-egg --save```

### usage

```<script src="./node_modules/easter-egg/easter-egg.js" type="text/javascript"></script>```

```javascript
cheet('e a s t e r', function () { alert('Hidden easter Egg!'); });
```

```javascript
cheet('↑ ↑ ↓ ↓ ←', function () {
  alert('You found the easter egg!');
});
```

```javascript
cheet('s e q u e n c e', {
  next: function (str, key, num, seq) {
    console.log('key pressed: ' + key);
    console.log('progress: ' + num / seq.length);
    console.log('seq: ' + seq.join(' '));
  },

  fail: function () {
    console.log('sequence failed');
  },

  done: function () {
    console.log('Hello Easter Egg!');
  }
});
```

```javascript
cheet('o n c e', function () {
  console.log('This will only fire once.');
  cheet.disable('o n c e');
});
```

```javascript
var sequences = {
  sequence: 'up down left right',
  circle: 'left up right down'
};

cheet(sequences.sequence);
cheet(sequences.circle);

cheet.done(function (seq) {
  if (seq === sequences.sequence) {
    console.log('sequence!');
  } else {
    console.log('circle!');
  }
});
```
### API

<a name='api_cheet'></a>
#### [`cheet(sequence, done | {next,fail,done})`](#api_cheet)

Map a sequence of keypresses to a callback. This can be called multiple times.

> <a name='api_cheet_sequence'></a>
> [`sequence`](#api_cheet_sequence) (String)
> > A string representation of a sequence of [key names](#available-key-names).
> >
> > Each keyname must be separated by a single space.
>
> <a name='api_cheet_done'></a>
> [`done(str, seq)`](#api_cheet_done) (callback)
> > A callback to execute each time the sequence is correctly pressed.
> >
> > Arguments:
> > * `str` - The string representation of the sequence that completed.
> > * `seq` - An array of [key names](#available-key-names) representing the sequence that completed.
>
> <a name='api_cheet_fail'></a>
> [`fail(str, seq)`](#api_cheet_fail) (callback)
> > A callback to execute each time a sequence's progress is broken.
> >
> > Arguments:
> > * `str` - The string representation of the sequence that failed.
> > * `seq` - An array of [key names](#available-key-names) representing the sequence that was pressed.
>
> <a name='api_cheet_next'></a>
> [`next(str, key, num, seq)`](#api_cheet_next) (callback)
> > A callback to execute each time a correct key in the sequence is pressed *in order*.
> >
> > Arguments:
> > * `str` - The string representation of the sequence that is in progress.
> > * `key` - The [name of the key](#available-key-names) that was just pressed.
> > * `num` - A number representing the current progress of the sequence. (starts at 0)
> > * `seq` - An array of [key names](#available-key-names) representing the sequence that is in progress.

<a name='api_done'></a>
#### [`cheet.done(callback)`](#api_done)

Set a global callback that executes whenever *any* mapped sequence is completed successfully.

> <a name='api_done_callback'></a>
> [`callback(str, seq)`](#api_done_callback) (callback)
> > A callback to execute each time *any* sequence is correctly pressed.
> >
> > Arguments:
> > * `str` - The string representation of the sequence that completed.
> > * `seq` - An array of [key names](#available-key-names) representing the sequence that completed.

<a name='api_next'></a>
#### [`cheet.next(callback)`](#api_next)

Set a global callback that executes whenever *any* mapped sequence progresses.

> <a name='api_next_callback'></a>
> [`callback(str, key, num, seq)`](#api_next_callback) (callback)
> > A callback to execute each time a correct key in any sequence is pressed *in order*.
> >
> > Arguments:
> > * `str` - The string representation of the sequence that is in progress.
> > * `key` - The [name of the key](#available-key-names) that was just pressed.
> > * `num` - A number representing the current progress of the sequence. (starts at 0)
> > * `seq` - An array of [key names](#available-key-names) representing the sequence that is in progress.

<a name='api_fail'></a>
#### [`cheet.fail(callback)`](#api_fail)

Set a global callback that executes whenever *any* in-progress sequence is broken.

> <a name='api_fail_callback'></a>
> [`callback(str, seq)`](#api_fail_callback) (callback)
> > A callback to execute each time *any* sequence's progress is broken.
> >
> > Arguments:
> > * `str` - The string representation of the sequence that failed.
> > * `seq` - An array of [key names](#available-key-names) representing the sequence that was pressed.

<a name='api_disable'></a>
#### [`cheet.disable(sequence)`](#api_disable)

Disable a previously-mapped sequence.

> <a name='api_disable_sequence'></a>
> [`sequence`](#api_disable_sequence) (String)
> > The same string you used to map the callback when using [`cheet(seq, ...)`](#api_cheet).

<a name='api_reset'></a>
#### [`cheet.reset(sequence)`](#api_reset)

Resets a sequence that may or may not be in progress.

This will *not* cause `fail` callbacks to fire, but will effectively
cancel the sequence.

> <a name='api_reset_sequence'></a>
> [`sequence`](#api_reset_sequence) (String)
> > The same string you used to map the callback when using [`cheet(seq, ...)`](#api_cheet).

### Available Key Names

**NOTE**: Key names are case-sensitive

#### Directionals
* `left` | `L` | `←`
* `up` | `U` | `↑`
* `right` | `R` | `→`
* `down` | `D` | `↓`

#### Alphanumeric
* `0`-`9` (main number keys)
* `a`-`z`

#### Misc
* `backspace`
* `tab`
* `enter` | `return`
* `shift` | `⇧`
* `control` | `ctrl` | `⌃`
* `alt` | `option` | `⌥`
* `command` | `⌘`
* `pause`
* `capslock`
* `esc`
* `space`
* `pageup`
* `pagedown`
* `end`
* `home`
* `insert`
* `delete`
* `equal` | `=`
* `comma` | `,`
* `minus` | `-`
* `period` | `.`

#### Keypad
* `kp_0`-`kp_9`
* `kp_multiply`
* `kp_plus`
* `kp_minus`
* `kp_decimal`
* `kp_divide`