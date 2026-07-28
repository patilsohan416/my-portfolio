const fs = require('fs');
const p = 'c:/Users/Lenovo/Desktop/project/video_portfolio-main/video_portfolio-main/src/pages/Projects.jsx';
let c = fs.readFileSync(p, 'utf8');
// Fix the missing closing div for p-6
c = c.replace('              </div>\n          </div>\n        ))}', '              </div>\n            </div>\n          </div>\n        ))}');
fs.writeFileSync(p, c);
console.log('Projects.jsx fixed successfully');
