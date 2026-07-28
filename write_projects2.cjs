const fs = require('fs');
const p = 'c:/Users/Lenovo/Desktop/project/video_portfolio-main/video_portfolio-main/src/pages/Projects.jsx';
let c = fs.readFileSync(p, 'utf8');

// The missing closing </div> for p-6 is between flex div closing (14 spaces) and card div closing (10 spaces)
// Current: "              </div>\n          </div>"
// Need:    "              </div>\n            </div>\n          </div>"
// Look for the pattern:
c = c.replace(
  '              </div>\n          </div>\n        ))}\n      </div>\n    </section>',
  '              </div>\n            </div>\n          </div>\n        ))}\n      </div>\n    </section>'
);

fs.writeFileSync(p, c);
console.log('Fixed. New content length:', c.length);

// Verify by reading back
let verified = fs.readFileSync(p, 'utf8');
const lines = verified.split('\n');
for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('p-6') || lines[i].includes('</div>')) {
    console.log(`Line ${i+1}: ${JSON.stringify(lines[i])}`);
  }
}
