process.on('exit', (exitCode) => {
  // do one final synchronours operation
  // before node process terminates
})

process.on('uncaughtException', (err) => {
  // something went unhandled
  // do any cleanup and exit anyway
  console.error('exception', err)
  process.exit(1)
})

process.stdin.resume()

console.dog()