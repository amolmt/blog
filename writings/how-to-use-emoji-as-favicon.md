---
title: "How to use emoji as a favicon"
date: "2020-04-26"
og:
  description: "A quick introduction to ReactJS useState method"
  image: "https://amolt.me/og/usestate.png"
author:
  twitter: "amoltangade"
  name: "Amol Tangade"
---

Creating a favicon for your website can be hard if don't know the designing tools such as Figma. In this blog post I will be explaining to you how to use your favorite emoji as a favicon for your website.

## Choose your favorite emoji

I usually go to https://getemoji.com/ for emojis. Find the one you looking for and click on it. On the detail page you will find various variants of that emoji like Google and Apple, choose whichever you like. I like tweeter so I will choose tweeter version. Right click and copy the emoji URL.

## Creating an emoji app constant

For the ease of organizing the code I will create a seperate app constant for our emoji under `/constants/AppConstant.js`

```js
export const FAVICON =
  "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/247/high-voltage_26a1.png";
```

## Setting the Favicon

Import the FAVICON app constant we use created in the Layout component of your app.

```js
import { FAVICON } from "../constants/AppConstants";
```

In `<head>` tag find a <link> tag with `rel="icon"` and pass the app constant as `href` like:

```html
<link rel="icon" href="{FAVICON}" />
```

And that's it! You now has your favorite emoji as a favicon for your site!
