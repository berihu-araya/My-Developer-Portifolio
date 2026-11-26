const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('Building frontend...');
execSync('npm --prefix frontend run build', { stdio: 'inherit' });

console.log('Copying frontend/build to root build directory...');
const src = path.join(__dirname, 'frontend', 'build');
const dest = path.join(__dirname, 'build');

if (fs.existsSync(dest)) {
  fs.rmSync(dest, { recursive: true, force: true });
}
fs.cpSync(src, dest, { recursive: true });
console.log('Build ready at root ./build and ./frontend/build!');
