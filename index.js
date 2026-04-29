const { spawn } = require('child_process');

// Intentamos arrancar el servicio usando npx para asegurar que encuentre el binario
const child = spawn('npx', ['openclaw', 'start', '--port', process.env.PORT || '8080'], {
  stdio: 'inherit',
  shell: true
});

child.on('exit', (code) => {
  console.log(`El proceso terminó con código ${code}`);
});
