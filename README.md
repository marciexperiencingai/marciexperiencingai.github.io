# Director & Screenwriter Portfolio Website

A premium, responsive portfolio website template for directors and screenwriters, meticulously designed to replicate the aesthetic and functionality of kvataniya.com.

## Features

- **Responsive Grid Layout**: Dynamically adapts to different screen sizes (mobile, tablet, desktop)
- **Modern Animations & Transitions**: 
  - Smooth page transitions between content pages
  - Fade-in and slide-up animations for content elements
  - Hover effects on grid items and navigation links
- **Content Organization**:
  - Section-based content (Music Videos, Commercials, Film, Photo)
  - Individual detail pages for each project with Vimeo embeds
  - About page with biography and contact information
- **Performance Optimizations**:
  - Lazy loading for images to improve page load speed
  - Responsive images with placeholders
  - Minimal and efficient JavaScript
- **Design Elements**:
  - Clean, cinematic black background with strategic use of red accents
  - "Staff Pick" badges for highlighting featured content
  - Consistent typography and spacing throughout
  - Fixed header with subtle transparency effect on scroll

## File Structure

```
├── index.html              # Main page with video grid
├── video1.html             # Example video detail page
├── video2.html             # Example video detail page
├── about.html              # About and contact page
├── css/
│   └── styles.css          # Main stylesheet
├── js/
│   └── script.js           # JavaScript functionality
└── images/                 # Image assets directory
    ├── placeholder1.jpg    # Video thumbnail images
    ├── placeholder2.jpg
    └── ...
```

## How to Use

### 1. Customize Personal Information

- Replace "YOUR NAME" in the header with your own name
- Update the subtitle if needed (currently "Director & Screenwriter")
- Change all placeholder social media links (Instagram, IMDB) to your own profiles
- Update the email and contact information in the about page

### 2. Add Your Videos

To add your videos from Vimeo:

1. Go to the Vimeo video you want to embed
2. Click the "Share" button
3. Select the "Embed" tab
4. Copy the Vimeo video ID (the numbers after "vimeo.com/video/" in the embed code)
5. Paste the ID in the iframe src attribute in the video pages (replacing "VIMEO_VIDEO_ID")

```html
<iframe src="https://player.vimeo.com/video/YOUR_VIMEO_ID?title=0&byline=0&portrait=0&autoplay=0" 
        frameborder="0" 
        allow="autoplay; fullscreen; picture-in-picture" 
        allowfullscreen>
</iframe>
```

### 3. Add Your Images

1. Replace all placeholder images in the "images" folder with your own thumbnails
2. Use high-quality images with a 16:9 aspect ratio for best results
3. Add a profile photo named "about-profile.jpg" in the images folder for the about page
4. Ensure the images are optimized for web (compressed without quality loss)

### 4. Customize Content

- Update the video titles, descriptions, and credits
- Add or remove grid items by duplicating the existing HTML structure
- Customize the "Staff Pick" badges by adding or removing them based on your preferences
- Update your biography and contact information on the about page

### 5. Create Additional Video Pages

To add more video pages:

1. Duplicate one of the existing video page templates (e.g., video1.html)
2. Update the title, meta description, and page content
3. Change the Vimeo video ID to your new video
4. Update all the video information (title, description, credits)
5. Add a link to this page from the main index.html grid

## Technical Implementation

### CSS Features

- CSS variables for consistent color scheme and easy customization
- Flexbox and CSS Grid for responsive layouts
- CSS transitions and animations for smooth interactivity
- Media queries for responsive design across all device sizes

### JavaScript Functionality

- Page transition system for smooth navigation between pages
- Lazy loading implementation for images to improve performance
- Smooth scrolling for anchor links
- Staggered animations on page load for a professional entrance effect
- Header opacity changes based on scroll position

### Browser Compatibility

The website is tested and optimized for:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome for Android)

## Customization Tips

### Colors

To change the color scheme, edit the CSS variables in the `:root` selector in styles.css:

```css
:root {
    --text-color: #ffffff;
    --bg-color: #000000;
    --accent-color: #ff0000;
    --overlay-bg: rgba(0, 0, 0, 0.7);
    --transition-speed: 0.3s;
}
```

### Typography

To change the fonts:

1. Update the font-family in the body selector in styles.css
2. For custom fonts, add them via Google Fonts by adding a link in the head section:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Your+Font+Name:wght@400;500;700&display=swap" rel="stylesheet">
```

Then update the CSS:

```css
body {
    font-family: 'Your Font Name', Arial, sans-serif;
    /* other properties */
}
```

### Adding New Sections

To add a new section:

1. Add a new link in the navigation menu
2. Create a new section element with the corresponding ID
3. Follow the existing HTML structure for consistency

## Performance Considerations

- All images use lazy loading to improve initial page load time
- Minimal external dependencies for faster loading
- Optimized animations for smooth performance even on lower-end devices
- Semantic HTML for better SEO and accessibility

## License

This template is free to use for personal and commercial projects.

## Credits

- Design inspired by [kvataniya.com](https://kvataniya.com)
- Placeholder images should be replaced with your own content 