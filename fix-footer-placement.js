const fs = require('fs');
const path = require('path');

const appDir = '/Applications/Vintage car/app';

function getAllPageFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory() && !file.startsWith('.')) {
      getAllPageFiles(filePath, fileList);
    } else if (file === 'page.tsx') {
      fileList.push(filePath);
    }
  });
  return fileList;
}

const pages = getAllPageFiles(appDir);
let updated = 0;
let skipped = 0;

pages.forEach(filePath => {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Check if file has SiteFooter
  if (!content.includes('SiteFooter')) {
    skipped++;
    return;
  }
  
  // Pattern: closing </KeywordPageLayout> with <SiteFooter /> inside
  // Replace: move SiteFooter outside and wrap in fragment
  
  // First, check if it's already correct (SiteFooter outside)
  if (content.includes('</KeywordPageLayout>\n    <SiteFooter')) {
    skipped++;
    return;
  }
  
  // Replace the pattern: <SiteFooter /> inside closing </KeywordPageLayout>
  // to: </KeywordPageLayout> followed by <SiteFooter /> on new line
  
  content = content.replace(
    /(\s+)<SiteFooter\s*\/>\n(\s+)<\/KeywordPageLayout>/g,
    '$2</KeywordPageLayout>\n$2<SiteFooter />'
  );
  
  // Also handle the return statement to use fragments
  content = content.replace(
    /return \(\n(\s+)<KeywordPageLayout/,
    'return (\n$1<>\n$1  <KeywordPageLayout'
  );
  
  content = content.replace(
    /<\/KeywordPageLayout>\n(\s+)<SiteFooter\s*\/>\n(\s+)\)/g,
    '</KeywordPageLayout>\n$1<SiteFooter />\n$1</>\n$2)'
  );
  
  fs.writeFileSync(filePath, content);
  updated++;
  console.log(`✅ ${path.relative('/Applications/Vintage car', filePath)}`);
});

console.log(`\n✅ Updated: ${updated}`);
console.log(`⏭️  Skipped: ${skipped}`);
console.log(`📊 Total: ${pages.length}`);
