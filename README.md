# dwkns-11ty-plugins
Set of plugins for 11ty. 
Probably not a lot of use for most people. 

## Installing

```bash
yarn add dwkns-11ty-plugins
```


## Console
Nunjucks filter that Pretty Prints out variables to HTML `<pre></pre>`  and to the console.

### Add to config. Usually `.eleventy.js`
```js
const { logToConsole } = require("dwkns-11ty-plugins");

module.exports = (eleventyConfig) => {
  ...
  eleventyConfig.addPlugin(logToConsole);
  ...
}
```

### Usage
```
{{ valueToLog | console | safe }}
```


## addAnOrA
Nunjucks filter that prepends an `A` or `An` depending on the word supplied.

### Add to config. Usually `.eleventy.js`
```js
const { addAnOrA } = require("dwkns-11ty-plugins");

module.exports = (eleventyConfig) => {
  ...
  eleventyConfig.addPlugin(addAnOrA);
  ...
}
```

### Usage
```
{{ "book" | addAnOrA }} 
>> A book

{{ "orange" | addAnOrA }} 
>> An orange
```


## Readable Date
Nunjucks filter that Creates Readable Dates

### Add to config. Usually `.eleventy.js`
```js
const { readableDate } = require("dwkns-11ty-plugins");

module.exports = (eleventyConfig) => {
  ...
  eleventyConfig.addPlugin(readableDate);
  ...
}
```

### Usage
```
---
date: 2021-10-18
---

{{date | readableDate }}
>> 18 Oct 2021
```





### Publish with:
npm publish --access public
Needs a OTP from the Authy app