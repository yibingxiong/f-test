process.stdin.resume();

process.on('SIGINT', () => {
  console.log('Received SIGINT.  Press Control-D to exit.');
});