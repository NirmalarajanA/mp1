#!/usr/bin/env node

/**
 * Script to verify MP1 assignment requirements
 * Run this before submitting to ensure all requirements are met
 */

const fs = require('fs');
const path = require('path');

console.log('🔍 Verifying MP1 Assignment Requirements...\n');

const requirements = [
    {
        name: 'HTML5 semantic elements',
        check: () => {
            const html = fs.readFileSync(path.join(__dirname, 'src', 'index.html'), 'utf8');
            const semanticElements = ['<header>', '<nav>', '<main>', '<section>', '<article>', '<footer>'];
            return semanticElements.some(el => html.includes(el));
        }
    },
    {
        name: 'SCSS file with variables and mixins',
        check: () => {
            const scss = fs.readFileSync(path.join(__dirname, 'src', 'css', 'main.scss'), 'utf8');
            return scss.includes('$') && (scss.includes('@mixin') || scss.includes('@include'));
        }
    },
    {
        name: 'JavaScript ES6+ features',
        check: () => {
            const js = fs.readFileSync(path.join(__dirname, 'src', 'js', 'main.js'), 'utf8');
            return js.includes('const ') || js.includes('let ') || js.includes('=>');
        }
    },
    {
        name: 'Responsive design (media queries)',
        check: () => {
            const scss = fs.readFileSync(path.join(__dirname, 'src', 'css', 'main.scss'), 'utf8');
            return scss.includes('@media');
        }
    },
    {
        name: 'Interactive elements (carousel, smooth scrolling)',
        check: () => {
            const js = fs.readFileSync(path.join(__dirname, 'src', 'js', 'main.js'), 'utf8');
            return js.includes('carousel') || js.includes('smoothScroll');
        }
    },
    {
        name: 'No external libraries (Bootstrap, jQuery)',
        check: () => {
            const html = fs.readFileSync(path.join(__dirname, 'src', 'index.html'), 'utf8');
            return !html.includes('bootstrap') && !html.includes('jquery');
        }
    },
    {
        name: 'Contact form',
        check: () => {
            const html = fs.readFileSync(path.join(__dirname, 'src', 'index.html'), 'utf8');
            return html.includes('<form') && html.includes('contact');
        }
    },
    {
        name: 'Video element',
        check: () => {
            const html = fs.readFileSync(path.join(__dirname, 'src', 'index.html'), 'utf8');
            return html.includes('<video');
        }
    },
    {
        name: 'Multi-column layout',
        check: () => {
            const scss = fs.readFileSync(path.join(__dirname, 'src', 'css', 'main.scss'), 'utf8');
            return scss.includes('grid') || scss.includes('flex');
        }
    },
    {
        name: 'Fixed background image',
        check: () => {
            const scss = fs.readFileSync(path.join(__dirname, 'src', 'css', 'main.scss'), 'utf8');
            return scss.includes('background-attachment: fixed') || scss.includes('fixed center center');
        }
    },
    {
        name: 'GitHub Actions workflow',
        check: () => {
            return fs.existsSync(path.join(__dirname, '.github', 'workflows', 'static.yml'));
        }
    },
    {
        name: 'Production build works',
        check: () => {
            try {
                const { execSync } = require('child_process');
                execSync('npm run build', { cwd: __dirname, stdio: 'pipe' });
                return true;
            } catch (error) {
                return false;
            }
        }
    }
];

let passed = 0;
let total = requirements.length;

requirements.forEach(req => {
    try {
        const result = req.check();
        console.log(`${result ? '✅' : '❌'} ${req.name}`);
        if (result) passed++;
    } catch (error) {
        console.log(`❌ ${req.name} (Error: ${error.message})`);
    }
});

console.log(`\n📊 Results: ${passed}/${total} requirements met`);

if (passed === total) {
    console.log('🎉 All requirements satisfied! Ready for deployment.');
} else {
    console.log('⚠️  Some requirements are missing. Please review the failed items above.');
}

console.log('\n📝 Next steps:');
console.log('1. Add your video file to src/assets/');
console.log('2. Run: git add . && git commit -m "Ready for deployment" && git push');
console.log('3. Enable GitHub Pages in repository settings');
console.log('4. Your site will be deployed automatically!');
