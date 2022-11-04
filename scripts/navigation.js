/**
 * 通过nodejs，自动给html文件增加导航html片段
 */
const config = [
  {name: '备忘录', url: 'memo.html'},
  {name: 'URL解析', url: 'url-parser.html'},
  {name: '字节解析', url: 'byte-parser.html'},
  {name: 'JSON格式化', url: 'json-formatter.html'},
  {name: '表格转换', url: 'table-converter.html'},
  {name: '颜色混合', url: 'color-mixer.html'},
  {name: '图片裁剪', url: 'img-editor.html'},
];
const getNavigationHtml = (filename) => {
  let div = `
<div id="navigation">
  <a style="color:black;text-decoration:none" href="/"><h1 style="margin:4px 10px;font-size:20px">tool.hullqin.cn</h1></a>
  <div style="display:flex;flex-direction:column;text-align:center">`;
  config.forEach(item => {
    if (item.url === filename) div += `\n    <a href="${item.url}" onclick="event.preventDefault()" style="color:black">${item.name}</a>`;
    else div += `\n    <a href="${item.url}">${item.name}</a>`;
  });
  div += '\n  </div>\n</div>';
  return div;
};
const navigationStyle = '  <style>body{display:flex}#root{flex:1}#navigation>div>a{text-decoration:none;margin:4px 8px}</style>\n';

const addNavigation = (html, filename) => {
  let newHtml = html;
  const navigationHtml = getNavigationHtml(filename);
  const bodyIndex = newHtml.indexOf('<body>') + 6;
  newHtml = newHtml.substr(0, bodyIndex) + navigationHtml + newHtml.substr(bodyIndex);
  const headIndex = newHtml.indexOf('</head>');
  newHtml = newHtml.substr(0, headIndex) + navigationStyle + newHtml.substr(headIndex);
  return newHtml;
};

module.exports = addNavigation;
