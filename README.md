# French History Website

## Overview
This interactive website covers major historical events in French history, providing engaging features, placeholder videos, and hover effects to enhance user engagement and learning. It incorporates glassmorphism design to give the website a modern and sleek visual style.

## Features
- **Glassmorphism Design:** Translucent cards with frosted glass effect, backdrop filters, and subtle shadows
- **Interactive Elements:** Hover effects that reveal additional information about historical topics
- **Responsive Design:** Fully optimized for mobile, tablet, and desktop screens with a mobile-friendly navigation
- **Timeline Page:** Visually appealing chronological presentation of key French historical events
- **Gallery Page:** Collection of historical images with hover captions and lightbox functionality
- **Animations:** Smooth animations on scroll and interactive elements using AOS and GSAP libraries

## Historical Topics Covered
1. The Conquest of Gaul by Julius Caesar
2. The 100 Years' War and Joan of Arc
3. The Renaissance and Humanism in France
4. Louis XIV (The Sun King)
5. Napoleon and the Battle of Waterloo
6. French Colonization and Decolonization
7. France during World War I
8. France during World War II
9. The Student Revolts of May 1968

## Pages
1. **Home Page (index.html):** Main page with topic cards for each historical period
2. **Timeline (timeline.html):** Chronological presentation of French history from ancient Gaul to modern times
3. **Gallery (gallery.html):** Collection of historical images with interactive captions

## Technical Details
- Built with HTML5, CSS3, and JavaScript
- Uses Poppins font family for a modern typography approach
- Implements AOS (Animate on Scroll) library for scroll animations
- Uses GSAP (GreenSock Animation Platform) for advanced animations
- Font Awesome icons for enhanced UI elements
- Responsive design using CSS Grid, Flexbox, and media queries
- Custom JavaScript for interactive elements and mobile menu functionality

## How to Run
1. Simply open the `index.html` file in any modern web browser
2. Navigate through the site using the navigation menu
3. Interact with the topic cards to reveal additional information
4. Explore the timeline to see events in chronological order
5. View the gallery and hover over images to see captions

## Image Placeholders
The website currently uses placeholder references for images. For a complete experience, you should:
1. Add actual image files to the `images` folder with the following naming convention:
   - Topic images: `placeholder-topic.jpg`
   - Gallery images: `placeholder-[event].jpg` (e.g., `placeholder-gaul.jpg`)
2. Replace the placeholder image paths in the HTML files with actual image paths

## Future Enhancements
- Add actual AI-generated videos for each historical topic
- Implement a search functionality
- Add a quiz section to test historical knowledge
- Expand content with additional historical periods
- Add language switching functionality (French/English)

## File Structure
```
french-history/
│
├── index.html          # Main page with topic cards
├── timeline.html       # Timeline of French history
├── gallery.html        # Image gallery
├── README.md           # Project documentation
│
├── css/
│   └── styles.css      # Main stylesheet
│
├── js/
│   └── main.js         # JavaScript functionality
│
└── images/             # Directory for image assets
```

## Credits
- Font Awesome for icons
- Google Fonts for Poppins typography
- AOS library for scroll animations
- GSAP for advanced animations
