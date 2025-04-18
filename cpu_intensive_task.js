process.env.UV_THREADPOOL_SIZE = 6
const crypto = require('crypto');

const ITERATIONS = 1e6;

function cpuIntensiveTasks() {
    const start = Date.now();
    let completed = 0;
    for (let i = 1; i <= 12; i++) {
    crypto.pbkdf2('password', 'salt', ITERATIONS, 64, 'sha512', () => {
        const end = Date.now() - start;
        console.log(`pbkdf2 #${i} done at ${end}ms`);
        completed++;
        if (completed === 12) {
        console.log(`All done in ${Date.now() - start}ms`);
        }
    });
    }
}

cpuIntensiveTasks();

