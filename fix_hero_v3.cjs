const fs = require('fs');
const path = 'c:/Users/Lenovo/Desktop/project/video_portfolio-main/video_portfolio-main/src/components/Hero.jsx';

fs.readFile(path, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  
  // Count opening and closing div tags
  const openDivs = (data.match(/<div/g) || []).length;
  const closeDivs = (data.match(/<\/div>/g) || []).length;
  console.log(`Open divs: ${openDivs}, Close divs: ${closeDivs}, Diff: ${openDivs - closeDivs}`);
  
  // Split into lines
  const lines = data.split('\n');
  console.log(`Total lines: ${lines.length}`);
  lines.forEach((line, i) => {
    if (line.includes('</div>') || line.includes('<div') || line.includes('</section>')) {
      console.log(`Line ${i+1}: ${line.trim()}`);
    }
  });
});
