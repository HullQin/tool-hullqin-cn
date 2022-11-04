const fs = require('fs');
const addNavigation = require('./navigation');

fs.readdirSync('../src').forEach(filename => {
  if (!filename.endsWith('.html')) return;
  const html = fs.readFileSync('../src/' + filename, 'utf-8');
  const newHtml = addNavigation(html, filename);
  fs.writeFileSync('../build/' + filename, newHtml, 'utf-8');
});
