---
title: Flicker free dark mode toggle
date: 2020-08-11
description: How to implement flicker free dark mode toggle.
category: tutorial
---

There are tons of articles on the internet about dark mode and this is not one of them. This is simply a log of how I achieved a flicker free dark mode toggle that you see on this site.

So how do you implement a dark-mode toggle? We'll need three things:

1. CSS that defines colors for "light" and "dark" modes.
2. HTML to indicate the current color mode.
3. A button to toggle between the two.

## 1. CSS

CSS variables are a great feature to implement styles that can be switched easily.

Let's start by defining two `root` styles:

```css
:root[color="light"] {
  --background-color: #fbfffe;
  --text-color: #001514;
  --link-color: #2f4858;
  --link-hover-color: #001514;
}

:root[color="dark"] {
  --background-color: #2d2d2d;
  --text-color: #c5c5c5;
  --link-color: #aca9bb;
  --link-hover-color: #c5c5c5;
}
```

The styles are scoped to the `color` attribute which means that any element that has this attribute set to either "light" or "dark" will get the appropriate colors.

## 2. Markup

The question now is where do we stick this attribute? Why, the `documentElement` of course. For HTML documents the `documentElement` points to the root `<html>` tag.

```html
<html color="light">
  ... ...
</html>
```

-or-

```html
<html color="dark">
  ... ...
</html>
```

Great! Now that we have tackled the markup and the styling it is time to move on to the toggle button.

Our button is going to be a `<div id="dark-mode-toggle">` with an `<svg>` icon inside it, styled like a button i.e., the cursor changes to a `pointer` to indicate that this is clickable. Go ahead, try clicking the icon at the top-right corner of this page.

## 3. JavaScript

Now the fun bits, handling the click event and doing something:

```js
document
  .querySelector("#dark-mode-toggle")
  .addEventListener("click", function () {
    var color =
      document.documentElement.getAttribute("color") === "light"
        ? "dark"
        : "light";
    document.documentElement.setAttribute("color", color);
  });
```

That's it!

Well, not really. How do you persist this across page loads?

Since we are in `SSG` land, `localStorage` is our best option. Let's implement that (yay! more JS). Here is the complete implementation:

```js
if (window.localStorage.getItem("color") === "dark") {
  document.documentElement.setAttribute("color", "dark");
} else {
  document.documentElement.setAttribute("color", "light");
}

window.addEventListener("load", function (e) {
  document
    .querySelector("#dark-mode-toggle")
    .addEventListener("click", function () {
      var color =
        document.documentElement.getAttribute("color") === "light"
          ? "dark"
          : "light";
      document.documentElement.setAttribute("color", color);
      window.localStorage.setItem("color", color);
    });
});
```

Cool. But is it flicker free? Have a go at it then, click that toggle on the top-right hand corner, visit various pages and see for yourself.

## Credits

People way smarter than me have already tackled this, I am mearly inspired by them. Hope you are too.

1. [https://ryanfeigenbaum.com/dark-mode/](https://ryanfeigenbaum.com/dark-mode/)
2. [https://css-tricks.com/lets-say-you-were-going-to-write-a-blog-post-about-dark-mode/](https://css-tricks.com/lets-say-you-were-going-to-write-a-blog-post-about-dark-mode/)

Cheers!
