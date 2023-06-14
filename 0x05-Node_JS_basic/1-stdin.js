#!/usr/bin/env node
//process.stdin

process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.setEncoding('utf-8');

process.stdin.on('readable', () => {
  const buf = process.stdin.read();

  if (buf !== null) {
    process.stdout.write(`Your name is: ${buf}`);
  }
});
process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
