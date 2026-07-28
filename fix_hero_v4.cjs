const fs = require('fs');
const path = 'c:/Users/Lenovo/Desktop/project/video_portfolio-main/video_portfolio-main/src/components/Hero.jsx';

// Read file as lines
const content = fs.readFileSync(path, 'utf8');
const lines = content.split('\n');

console.log('=== Current structure ===');
lines.forEach((line, i) => {
  const trimmed = line.trimEnd();
  if (trimmed.includes('<div') || trimmed.includes('</div>') || trimmed.includes('</section>')) {
    console.log(`Line ${i+1}: ${trimmed}`);
  }
});

// Count tags
const openDivs = lines.filter(l => l.includes('<div')).length;
const closeDivs = lines.filter(l => l.includes('</div>')).length;
console.log(`\nOpen divs: ${openDivs}, Close divs: ${closeDivs}`);
