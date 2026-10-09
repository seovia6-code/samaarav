import fs from 'fs';
import path from 'path';
import { globSync } from 'glob';

const files = globSync('**/*.{tsx,ts,jsx,js,css}', { 
    ignore: ['node_modules/**', '.next/**', 'out/**', 'bundle.js'] 
});

let modifiedCount = 0;

for (const file of files) {
    let content = fs.readFileSync(file, 'utf8');
    let original = content;

    // Replace specific blue-related utility classes
    content = content.replace(/text-blue-[56]00/g, 'text-primary');
    content = content.replace(/bg-blue-[56]00/g, 'bg-primary');
    content = content.replace(/border-blue-[56]00/g, 'border-primary');
    content = content.replace(/ring-blue-[56]00/g, 'ring-primary');
    content = content.replace(/shadow-blue-900/g, 'shadow-navy');
    content = content.replace(/bg-blue-50/g, 'bg-primary/5');
    content = content.replace(/text-blue-800/g, 'text-primary-dark');
    content = content.replace(/border-blue-200/g, 'border-primary/20');
    content = content.replace(/rgba\(59,130,246,0\.8\)/g, 'rgba(37,99,235,0.8)'); // Update raw blue rgba to primary rgba

    if (content !== original) {
        fs.writeFileSync(file, content, 'utf8');
        console.log(`Updated ${file}`);
        modifiedCount++;
    }
}

console.log(`\nFinished! Modified ${modifiedCount} files.`);
