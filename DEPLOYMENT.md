# MP1 Portfolio Website - Deployment Guide

## 🚀 GitHub Pages Deployment

This guide will help you deploy your MP1 portfolio website to GitHub Pages.

### Prerequisites
- GitHub account
- Repository with your code
- Node.js installed locally

### Deployment Steps

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "MP1 Portfolio Website - Ready for deployment"
   git push origin main
   ```

2. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Click on "Settings" tab
   - Scroll down to "Pages" section
   - Under "Source", select "GitHub Actions"
   - The workflow will automatically deploy your site

3. **Your site will be available at:**
   ```
   https://[your-username].github.io/[repository-name]
   ```

### Local Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm start
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

### Adding Your Video

1. Download your video file
2. Save it as `video.mp4` in the `src/assets/` folder
3. Update the video sources in `src/index.html`:
   ```html
   <video controls poster="your-poster-image.jpg" class="portfolio-video">
       <source src="assets/video.mp4" type="video/mp4">
       <source src="assets/video.webm" type="video/webm">
       Your browser does not support the video tag.
   </video>
   ```

### MP1 Assignment Requirements ✅

- ✅ Single-page application
- ✅ HTML5 semantic elements
- ✅ SCSS with variables, mixins, nesting
- ✅ JavaScript ES6+ features
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Interactive elements (carousel, smooth scrolling, hover effects)
- ✅ No external libraries (Bootstrap, jQuery)
- ✅ Professional appearance
- ✅ Contact form with validation
- ✅ Video element
- ✅ Multi-column layout
- ✅ Fixed background image
- ✅ Smooth scrolling navigation
- ✅ Mobile-friendly navigation

### File Structure
```
mp1-main/
├── src/
│   ├── index.html          # Main HTML file
│   ├── css/
│   │   └── main.scss       # SCSS styles
│   ├── js/
│   │   └── main.js         # JavaScript functionality
│   └── assets/
│       ├── image.jpg       # Profile image
│       └── video.mp4       # Your video (add this)
├── .github/workflows/
│   └── static.yml          # GitHub Actions workflow
├── package.json            # Dependencies and scripts
├── webpack.config.js       # Build configuration
└── README.md              # This file
```

### Troubleshooting

**Build fails:**
- Make sure all dependencies are installed: `npm install`
- Check that all file paths are correct
- Ensure video files exist if referenced

**GitHub Pages not updating:**
- Check the Actions tab for any failed workflows
- Ensure the main branch is selected in Pages settings
- Wait a few minutes for the deployment to complete

**Video not playing:**
- Ensure video file is in the correct format (MP4 recommended)
- Check file size (GitHub has file size limits)
- Verify the file path in HTML

### Support

If you encounter any issues, check:
1. GitHub Actions logs in your repository
2. Browser console for JavaScript errors
3. Network tab for failed resource loads

---

**Good luck with your MP1 submission! 🎉**
