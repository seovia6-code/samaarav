import fs from 'fs';
import path from 'path';

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) { 
      results = results.concat(walk(file));
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) { 
      results.push(file);
    }
  });
  return results;
}

const files = [...walk('app'), ...walk('components')];

const replacements = [
  { regex: /bg-black\/5/g, replace: 'bg-foreground/5' },
  { regex: /text-black\/5/g, replace: 'text-foreground/5' },
  { regex: /border-black\/\[0\.06\]/g, replace: 'border-foreground/[0.06]' },
  { regex: /border-black\/\[0\.07\]/g, replace: 'border-foreground/[0.07]' },
  
  { regex: /border-\[\#171717\]\/20/g, replace: 'border-foreground/20' },
  { regex: /border-\[\#171717\]\/15/g, replace: 'border-foreground/15' },
  
  // CTA.tsx specifics
  { regex: /text-\[\#FFFDF3\]/g, replace: 'text-white' },
  { regex: /border-\[\#FFFDF3\]/g, replace: 'border-white' },
  { regex: /bg-\[\#FFFDF3\]/g, replace: 'bg-white' },
];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;
  
  replacements.forEach(({regex, replace}) => {
    content = content.replace(regex, replace);
  });
  
  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated: ${file}`);
  }
});
