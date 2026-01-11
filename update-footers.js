const fs = require('fs');
const path = require('path');

const appDir = '/Applications/Vintage car/app';

function getAllFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    if (file === 'leads') return;
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      getAllFiles(filePath, fileList);
    } else if (file === 'page.tsx') {
      fileList.push(filePath);
    }
  });
  return fileList;
}

const pages = getAllFiles(appDir);
let updated = 0;
let skipped = 0;

pages.forEach(filePath => {
  let content = fs.readFileSync(filePath, 'utf8');
  
  if (content.includes('SiteFooter')) {
    skipped++;
    return;
  }
  
  content = content.replace(
    'import { KeywordPageLayout }',
    'import { SiteFooter } from "@/components/site-footer"\nimport { KeywordPageLayout }'
  );
  
  content = content.replace(
    '    </KeywordPageLayout>',
    '      <SiteFooter />\n    </KeywordPageLayout>'
  );
  
  fs.writeFileSync(filePath, content);
  updated++;
  console.log(`✅ ${filePath}`);
});

console.log(`\n✅ Updated: ${updated}`);
console.log(`⏭️  Skipped: ${skipped}`);
console.log(`📊 Total: ${pages.length}`);
