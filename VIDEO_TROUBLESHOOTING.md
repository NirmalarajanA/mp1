# Video Troubleshooting Guide

## Current Issue
Your video file is 33.8 MB, which is very large for web deployment and may cause playback issues.

## Solutions

### Option 1: Compress Your Video (Recommended)
1. **Using FFmpeg** (if installed):
   ```bash
   ffmpeg -i src/assets/video-placeholder.mp4 -vcodec h264 -acodec mp2 -crf 28 -preset fast src/assets/video-compressed.mp4
   ```

2. **Using online tools**:
   - Go to https://www.freeconvert.com/video-compressor
   - Upload your video
   - Choose "High Quality" or "Medium Quality"
   - Download the compressed version

3. **Using HandBrake** (free software):
   - Download from https://handbrake.fr/
   - Open your video
   - Choose "Web" preset
   - Compress to under 10MB

### Option 2: Use a Smaller Test Video
Replace your video with a smaller test video to verify the player works:

```bash
# Download a small test video
curl -o src/assets/test-video.mp4 "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4"
```

Then update the HTML to use `test-video.mp4` instead.

### Option 3: Use YouTube Embed (Alternative)
If you want to use YouTube instead:

```html
<iframe width="800" height="450" 
        src="https://www.youtube.com/embed/YOUR_VIDEO_ID" 
        frameborder="0" 
        allowfullscreen>
</iframe>
```

## Testing Steps

1. **Check browser console** for errors:
   - Press F12 in your browser
   - Look for any red error messages
   - Check the Network tab to see if the video is loading

2. **Test with a smaller video first**:
   - Use the test video above
   - If it works, the issue is file size
   - If it doesn't work, there's a different issue

3. **Check file permissions**:
   - Make sure the video file is readable
   - Check that webpack is copying it correctly

## Current Status
- ✅ Video file exists and is valid MP4
- ✅ HTML video element is properly configured
- ⚠️ File size is very large (33.8 MB)
- ⚠️ May cause slow loading or playback issues

## Next Steps
1. Try compressing your video to under 10MB
2. Test with the compressed version
3. If still having issues, try the test video
4. Check browser console for specific error messages
