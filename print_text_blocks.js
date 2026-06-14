const fs = require('fs');
const content = fs.readFileSync('script-1.txt', 'utf8');

// Look for double-quoted strings or JSON-like strings that look like actual text content
// We can parse the script if it's JSON or search for specific words like "day", "tour", "price", "hotel", "yatra"
const strings = [];
const regex = /"([^"\\]*(?:\\.[^"\\]*)*)"/g;
let match;
while ((match = regex.exec(content)) !== null) {
  const str = match[1];
  // Filter for actual descriptive text (has spaces, longer than 30 chars, doesn't look like code/urls)
  if (str.includes(' ') && str.length > 30 && !str.startsWith('http') && !str.includes('{') && !str.includes('<script')) {
    strings.push(str.replace(/\\"/g, '"').replace(/\\n/g, '\n'));
  }
}

console.log('--- EXTRACTED TEXT BLOCKS ---');
Array.from(new Set(strings)).forEach((s, i) => {
  console.log(`\nBlock ${i + 1}:`);
  console.log(s);
});
