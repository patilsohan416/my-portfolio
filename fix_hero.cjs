const fs = require('fs');
const path = 'c:/Users/Lenovo/Desktop/project/video_portfolio-main/video_portfolio-main/src/components/Hero.jsx';
let content = fs.readFileSync(path, 'utf8');

// Add a closing </div> before the Scroll Indicator section
content = content.replace(
  `        </div>

      {/* Scroll Indicator */}`,
  `        </div>
      </div>

      {/* Scroll Indicator */}`
);

fs.writeFileSync(path, content);
console.log('Fixed Hero.jsx successfully');
