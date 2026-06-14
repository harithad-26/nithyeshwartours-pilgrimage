const https = require('https');

function fetchSeo(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => { data += chunk; });
      res.on('end', () => { resolve(data); });
    }).on('error', reject);
  });
}

async function run() {
  try {
    const html = await fetchSeo('https://www.nithyeshwartours.com/uttarakhand-1?_escaped_fragment_=');
    console.log('HTML Length:', html.length);
    // Write to file
    require('fs').writeFileSync('seo-content.html', html);
    
    // Extract visible text (strip tags and scripts)
    let text = html
      .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
      .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
      .replace(/<[^>]+>/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
      
    console.log('Text preview (first 1000 chars):');
    console.log(text.substring(0, 1000));
  } catch (err) {
    console.error(err);
  }
}

run();
