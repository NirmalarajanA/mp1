#!/usr/bin/env node

/**
 * Script to update video sources in index.html
 * Usage: node update-video.js [video-filename]
 * Example: node update-video.js my-video.mp4
 */

const fs = require('fs');
const path = require('path');

const videoFile = process.argv[2];

if (!videoFile) {
    console.log('Usage: node update-video.js [video-filename]');
    console.log('Example: node update-video.js my-video.mp4');
    process.exit(1);
}

const indexPath = path.join(__dirname, 'src', 'index.html');

if (!fs.existsSync(indexPath)) {
    console.error('Error: index.html not found');
    process.exit(1);
}

// Read the current HTML
let html = fs.readFileSync(indexPath, 'utf8');

// Update video sources
const videoName = videoFile.replace(/\.[^/.]+$/, ""); // Remove extension
const videoExt = path.extname(videoFile);

html = html.replace(
    /<source src="[^"]*" type="video\/mp4">/g,
    `<source src="assets/${videoFile}" type="video/mp4">`
);

html = html.replace(
    /<source src="[^"]*" type="video\/ogg">/g,
    `<source src="assets/${videoName}.webm" type="video/webm">`
);

// Write back to file
fs.writeFileSync(indexPath, html);

console.log(`✅ Updated video sources to use: ${videoFile}`);
console.log(`📁 Make sure to place your video file in: src/assets/${videoFile}`);
console.log(`🔄 Run 'npm run build' to test the changes`);
