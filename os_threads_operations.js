process.env.UV_THREADPOOL_SIZE = 6
const fs = require('fs');

// Number of files
const FILES = 12;

function runWithReadStream() {
  console.log('\n--- Using fs.createReadStream (Event Loop) ---');
  const start = Date.now();

  let completed = 0;
  for (let i = 1; i <= FILES; i++) {
    const stream = fs.createReadStream(`file${i}.csv`, { encoding: 'utf8' });

    stream.on('data', () => {}); // no-op
    stream.on('end', () => {
      completed++;
      console.log(`createReadStream done for file${i}.csv at ${Date.now() - start}ms`);
      if (completed === FILES) {
        console.log(`Total time with createReadStream: ${Date.now() - start}ms`);
      }
    });
    stream.on('error', console.error);
  }
}

runWithReadStream();
