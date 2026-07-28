const fs = require('fs');
const path = 'c:/Users/Lenovo/Desktop/project/video_portfolio-main/video_portfolio-main/src/components/Hero.jsx';

const content = fs.readFileSync(path, 'utf8');
const lines = content.split('\n');

// After line 56 (closing buttons wrapper), add </div> to close left side wrapper (line 46)
// After line 69 (closing right side), add </div> to close content container (line 45)
// After line 76 (closing animate-bounce), add </div> to close scroll indicator (line 71)

let result = [];
for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  const lineNum = i + 1;
  
  if (lineNum === 57) {
    // After buttons wrapper close, add left-side wrapper close
    result.push(line);
    result.push('        </div>');
  } else if (lineNum === 70) {
    // After right side close, add content container close
    result.push(line);
    result.push('      </div>');
  } else if (lineNum === 77) {
    // Before section close, add scroll indicator wrapper close
    result.push('        </div>');
    result.push(line);
  } else {
    result.push(line);
  }
}

fs.writeFileSync(path, result.join('\n'));
console.log('Fixed! Added 3 missing closing div tags.');
