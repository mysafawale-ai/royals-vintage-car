const fs = require('fs');
const path = require('path');

const publicDir = '/Applications/Vintage car/public';

// SEO-friendly file naming mapping
const fileMapping = {
  // Images - vintage wedding car keywords
  '2026-01-02.jpg': 'vintage-wedding-car-hero-baraat.jpg',
  'WhatsApp Image 2026-01-02 at 20.23.30.jpeg': 'luxury-vintage-rolls-royce-wedding-1.jpg',
  'WhatsApp Image 2026-01-02 at 20.23.33.jpeg': 'classic-open-top-vintage-car-wedding-2.jpg',
  'WhatsApp Image 2026-01-02 at 20.23.33 (1).jpeg': 'vintage-wedding-car-decoration-3.jpg',
  'WhatsApp Image 2026-01-02 at 20.23.34.jpeg': 'classic-vintage-car-rental-4.jpg',
  'WhatsApp Image 2026-01-02 at 20.23.34 (1).jpeg': 'bride-entry-vintage-car-5.jpg',
  'WhatsApp Image 2026-01-02 at 20.23.34 (2).jpeg': 'wedding-baraat-vintage-car-6.jpg',
  'WhatsApp Image 2026-01-02 at 20.23.35.jpeg': 'elegant-vintage-wedding-car-7.jpg',
  'WhatsApp Image 2026-01-02 at 20.23.35 (1).jpeg': 'luxury-vintage-car-hire-wedding-8.jpg',
  'WhatsApp Image 2026-01-02 at 20.23.35 (2).jpeg': 'vintage-car-rental-vadodara-9.jpg',
  'WhatsApp Image 2026-01-02 at 20.23.35 (3).jpeg': 'wedding-vintage-car-decoration-10.jpg',
  'WhatsApp Image 2026-01-02 at 20.23.36.jpeg': 'decorated-vintage-wedding-car-11.jpg',
  'WhatsApp Image 2026-01-02 at 20.23.36 (1).jpeg': 'premium-vintage-car-wedding-12.jpg',
  'WhatsApp Image 2026-01-02 at 20.23.37 (1).jpeg': 'classic-vintage-wedding-car-collection.jpg',
  'WhatsApp Image 2026-01-02 at 20.23.45.jpeg': 'vintage-rolls-royce-wedding-entry.jpg',
  'WhatsApp Image 2026-01-02 at 20.23.45 (1).jpeg': 'wedding-car-baraat-vintage-ride.jpg',
  'WhatsApp Image 2026-01-02 at 20.23.45 (2).jpeg': 'luxury-vintage-car-celebration.jpg',
  'WhatsApp Image 2026-01-02 at 20.23.45 (3).jpeg': 'elegant-wedding-vintage-car-hire.jpg',
  'WhatsApp Image 2026-01-02 at 20.23.46.jpeg': 'vintage-car-rental-wedding-service.jpg',
  'WhatsApp Image 2026-01-02 at 20.23.46 (1).jpeg': 'open-top-vintage-wedding-car.jpg',
  'WhatsApp Image 2026-01-02 at 20.23.46 (2).jpeg': 'classic-car-wedding-decoration.jpg',
  'WhatsApp Image 2026-01-02 at 20.23.47.jpeg': 'vintage-shaadi-car-rental.jpg',
  'WhatsApp Image 2026-01-02 at 20.23.47 (1).jpeg': 'wedding-baraat-car-vintage.jpg',
  'WhatsApp Image 2026-01-02 at 20.23.47 (2).jpeg': 'premium-vintage-car-hire-wedding.jpg',
  'WhatsApp Image 2026-01-02 at 20.23.48.jpeg': 'luxury-wedding-car-vintage.jpg',
  'WhatsApp Image 2026-01-02 at 20.23.48 (1).jpeg': 'decorated-vintage-wedding-celebration.jpg',
  'WhatsApp Image 2026-01-02 at 20.23.48.jpeg': 'vintage-car-wedding-delivery.jpg',
  'WhatsApp Image 2026-01-02 at 20.23.49.jpeg': 'classic-vintage-car-baraat-entry.jpg',
  'WhatsApp Image 2026-01-02 at 20.23.49 (1).jpeg': 'wedding-vintage-car-hire-service.jpg',
  'WhatsApp Image 2026-01-02 at 20.23.49 (2).jpeg': 'luxury-vintage-wedding-car-rental.jpg',
  'WhatsApp Image 2026-01-02 at 20.23.49 (3).jpeg': 'vintage-car-wedding-photoshoot.jpg',
  'WhatsApp Image 2026-01-02 at 20.23.50.jpeg': 'premium-vintage-car-wedding-event.jpg',
  'WhatsApp Image 2026-01-02 at 20.23.50 (1).jpeg': 'vintage-wedding-car-decoration-service.jpg',
  'WhatsApp Image 2026-01-02 at 20.23.50 (2).jpeg': 'classic-car-rental-wedding-celebration.jpg',
  'WhatsApp Image 2026-01-02 at 20.23.51.jpeg': 'luxury-vintage-car-wedding-ride.jpg',
  'WhatsApp Image 2026-01-02 at 20.23.51 (1).jpeg': 'vintage-baraat-car-wedding-hire.jpg',
  'WhatsApp Image 2026-01-02 at 20.23.51 (2).jpeg': 'wedding-vintage-car-rental-service.jpg',
  'WhatsApp Image 2026-01-12 at 19.42.20.jpeg': 'vintage-wedding-car-showcase.jpg',

  // Videos - vintage wedding car keywords
  'video_20251224_161146.mp4': 'vintage-rolls-royce-wedding-car-video-1.mp4',
  'video_20251224_161221.mp4': 'classic-open-top-vintage-wedding-video-2.mp4',
  'video_20251224_161452.mp4': 'vintage-baraat-car-wedding-video-3.mp4',
  'video_20251224_175841.mp4': 'luxury-vintage-wedding-car-decoration-4.mp4',
  'video_20251224_175930.mp4': 'wedding-vintage-car-rental-video-5.mp4',
  'WhatsApp Video 2026-01-02 at 20.23.43.mp4': 'elegant-vintage-wedding-car-ride-video.mp4',
  'WhatsApp Video 2026-01-02 at 20.23.43 (1).mp4': 'vintage-car-motion-wedding-video.mp4',
  'WhatsApp Video 2026-01-02 at 20.23.44.mp4': 'classic-car-wedding-celebration-video.mp4',
  'WhatsApp Video 2026-01-02 at 20.23.44 (1).mp4': 'vintage-wedding-car-entry-video.mp4',
  'WhatsApp Video 2026-01-02 at 20.23.44 (2).mp4': 'luxury-vintage-wedding-decoration-video.mp4',
  'WhatsApp Video 2026-01-02 at 20.23.48.mp4': 'vintage-wedding-car-grandeur-video.mp4',
  'WhatsApp Video 2026-01-02 at 20.23.48 (1).mp4': 'premium-vintage-car-experience-video.mp4',
};

let renamed = 0;

Object.keys(fileMapping).forEach(oldName => {
  const newName = fileMapping[oldName];
  const oldPath = path.join(publicDir, oldName);
  const newPath = path.join(publicDir, newName);
  
  if (fs.existsSync(oldPath)) {
    fs.renameSync(oldPath, newPath);
    renamed++;
    console.log(`✅ ${oldName} → ${newName}`);
  } else {
    console.log(`⚠️  File not found: ${oldName}`);
  }
});

console.log(`\n✅ Successfully renamed: ${renamed} files`);

// Generate file mapping for code updates
console.log('\n📝 File mapping for code updates:');
Object.keys(fileMapping).forEach(oldName => {
  const newName = fileMapping[oldName];
  console.log(`"/${oldName}" → "/${newName}"`);
});
