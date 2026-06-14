const fs = require('fs');

function extractText(filePath) {
  const html = fs.readFileSync(filePath, 'utf8');
  
  // Look for wix-essential-viewer-model JSON
  const modelMatch = html.match(/id="wix-essential-viewer-model">([\s\S]*?)<\/script>/);
  if (modelMatch) {
    fs.writeFileSync('wix-model.json', modelMatch[1]);
    console.log('Wrote wix-model.json');
  }
  
  // Look for any other script tags containing page data
  const scriptRegex = /<script[^>]*>([\s\S]*?)<\/script>/g;
  let match;
  let count = 0;
  while ((match = scriptRegex.exec(html)) !== null) {
    const content = match[1];
    if (content.includes('description') || content.includes('itinerary') || content.includes('days') || content.includes('price')) {
      console.log(`Found script tag ${count} with length ${content.length}`);
      fs.writeFileSync(`script-${count}.txt`, content);
      count++;
    }
  }
}

extractText('C:\\Users\\harit\\.gemini\\antigravity-ide\\brain\\cecaf293-154d-4f33-92a6-77c067631675\\.system_generated\\steps\\1514\\content.md');
