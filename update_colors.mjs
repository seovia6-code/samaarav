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
  // My recent hardcoded colors
  { regex: /bg-\[\#071A2B\]/g, replace: 'bg-navy' },
  { regex: /text-\[\#071A2B\]/g, replace: 'text-navy' },
  { regex: /border-\[\#071A2B\]/g, replace: 'border-navy' },
  { regex: /hover:bg-\[\#071A2B\]/g, replace: 'hover:bg-navy' },
  { regex: /hover:text-\[\#071A2B\]/g, replace: 'hover:text-navy' },
  
  { regex: /bg-\[\#2563EB\]/g, replace: 'bg-primary' },
  { regex: /text-\[\#2563EB\]/g, replace: 'text-primary' },
  { regex: /border-\[\#2563EB\]/g, replace: 'border-primary' },
  { regex: /hover:bg-\[\#2563EB\]/g, replace: 'hover:bg-primary' },
  { regex: /hover:text-\[\#2563EB\]/g, replace: 'hover:text-primary' },
  { regex: /hover:border-\[\#2563EB\]/g, replace: 'hover:border-primary' },
  
  { regex: /text-\[\#06B6D4\]/g, replace: 'text-secondary' },
  { regex: /border-\[\#06B6D4\]\/30/g, replace: 'border-secondary/30' },
  { regex: /hover:shadow-\[\#06B6D4\]\/20/g, replace: 'hover:shadow-secondary/20' },
  
  { regex: /text-\[\#38BDF8\]/g, replace: 'text-accent' },
  { regex: /border-\[\#38BDF8\]\/20/g, replace: 'border-accent/20' },
  
  { regex: /bg-\[\#F8FAFC\]/g, replace: 'bg-background' },
  { regex: /bg-\[\#FFFFFF\]/g, replace: 'bg-white' },
  { regex: /text-\[\#475569\]/g, replace: 'text-muted' },
  { regex: /text-\[\#CBD5E1\]/g, replace: 'text-slate-300' }, // Secondary dark-bg text
  { regex: /border-\[\#E2E8F0\]/g, replace: 'border-border' },

  // Generic existing old colors
  { regex: /bg-\[\#fffdf3\]/g, replace: 'bg-background' },
  { regex: /bg-\[\#faf9f6\]/g, replace: 'bg-background' },
  
  // Black and transparent borders
  { regex: /border-black\/5/g, replace: 'border-border' },
  { regex: /border-black\/10/g, replace: 'border-border' },
  { regex: /border-black\/15/g, replace: 'border-border' },
  { regex: /border-black\/20/g, replace: 'border-border' },
  
  // Text colors
  { regex: /text-black\/40/g, replace: 'text-muted' },
  { regex: /text-black\/50/g, replace: 'text-muted' },
  { regex: /text-black\/60/g, replace: 'text-muted' },
  { regex: /text-black\/65/g, replace: 'text-muted' },
  { regex: /text-black\/70/g, replace: 'text-muted' },
  { regex: /text-black\/80/g, replace: 'text-foreground' },
  { regex: /text-black\/90/g, replace: 'text-foreground' },
  { regex: /text-black(?![\w/])/g, replace: 'text-foreground' },
  
  { regex: /text-\[\#171717\]/g, replace: 'text-foreground' },
  { regex: /bg-\[\#171717\]/g, replace: 'bg-navy' },
  
  // Replace direct hex in inline styles (Expertise/Services arrays)
  { regex: /"#ffffff"/g, replace: '"var(--color-white)"' }, // actually tailwind doesn't give var(--color-white) natively without defining, I'll use "#FFFFFF"
  { regex: /"#f5f5f5"/g, replace: '"#FFFFFF"' },
  { regex: /"#eaeaea"/g, replace: '"#FFFFFF"' },
  { regex: /"#dedede"/g, replace: '"#FFFFFF"' },
  { regex: /"#d4d4d4"/g, replace: '"#FFFFFF"' },
  { regex: /"#cbcbcb"/g, replace: '"#FFFFFF"' },
  
  { regex: /"#171717"/g, replace: '"var(--color-foreground)"' },
  
  { regex: /"#0a223a"/g, replace: '"var(--color-navy)"' },
  
  // Gradient replacements
  { regex: /bg-\[linear-gradient\(135deg,\#2563EB_0%,\#06B6D4_100%\)\]/g, replace: 'bg-gradient-to-br from-primary to-secondary' },
  
  // Buttons
  { regex: /bg-black(?![/\w-])/g, replace: 'bg-primary' },
  { regex: /hover:bg-black/g, replace: 'hover:bg-primary-dark' },
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
