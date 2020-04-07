## Node !== Javascript

2 major global modules - process, and Buffer


### process

Process provides a bridge between the node application and its running environment

`process.versions` will show all of the different versions of  node and node dependencies.

`process.env` provides a copy of the user environment.
Modifying process.env does not modify the user environment.

`process.release.lts` prints the LTS version if the version is LTS. If not, prints `undefined`
`node -p "process.release.lts"` => 'Dubnium'

`stdin`, `stdout`, `stderr`

***process is an event emitter

```js
process.on('exit', (exitCode) => {
  // do one final synchronours operation
  // before node process terminates
})

process.on('uncaughtException', (err), () => {
  // something went unhandled
  // do any cleanup and exit anyway
})

process.stdin.resume()

console.dog()
```


### Buffer

work with binary streams of data.

Chunk of data outside of the v8 heap

Whatever is placed in the buffer doesn't have any character encoding. To read it, we must specify an encoding. If we don't specify an encoding, we get back a `Buffer` object.

Once a Buffer is created it can't be resized.

```js
// Creates a buffer of a specified size and will fill the buffer.
Buffer.alloc(8) // <Buffer 00 00 00 00 00 00 00 00>
// Creates a buffer of a specified size, but doesn't fill the buffer. Could have old values in memory.
Buffer.allocUnsafe(8) // <Buffer 80 db bf ef fe 7f 00 00>
Buffer.allocUnsafe(8).fill(0)
```

`Buffer.from`
```js
const string = 'boink'
const buffer = Buffer.from(string)
console.log(string, string.length) // boink 5(characters)
console.log(buffer, buffer.length) // <Buffer 62 6f 69 6e 6b> // 5 (bytes)
```



