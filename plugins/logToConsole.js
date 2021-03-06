const util = require('util');

// utility function to log value to HTML & the Console
let logToConsole = (eleventyConfig) => {
  eleventyConfig.addFilter("console", (value) => {
    let str = util.inspect(value, showHidden = false, depth = 8, colorize = false);
    let css = `
    <style>
    pre {
      background: #f4f4f4;
      border: 1px solid #ddd;
      border-left: 3px solid #f36d33;
      color: #666;
      page-break-inside: avoid;
      font-family: monospace;
      font-size: 15px;
      line-height: 1.6;
      margin-bottom: 1.6em;
      max-width: 100%;
      overflow: auto;
      padding: 1em 1.5em;
      display: block;
      word-wrap: break-word;
    }
    </style>`
    let html = `<div style="margin-top: 20px; "><pre><code> ${unescape(str)} </code></pre> </div>`

    console.log('-------------start console output-------------')
    console.log(str);
    // console.log(html);
    console.log('-------------end-------------');
    return unescape(css + html)
  });
}
module.exports = {
  logToConsole,
}

