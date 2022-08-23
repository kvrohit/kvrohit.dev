---
title: Flicker free dark mode toggle
date: 2020-08-11
description: How to implement flicker free dark mode toggle.
category: tutorial
---

We'll need three things:

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

The `color` attribute has to be added to the `documentElement`. For HTML documents the `documentElement` is the root `<html>` tag.

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

## 3. JavaScript

Now the fun bits, handling the click event and doing something:

```javascript
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

```javascript
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

## Credits

1. [https://ryanfeigenbaum.com/dark-mode/](https://ryanfeigenbaum.com/dark-mode/)
2. [https://css-tricks.com/lets-say-you-were-going-to-write-a-blog-post-about-dark-mode/](https://css-tricks.com/lets-say-you-were-going-to-write-a-blog-post-about-dark-mode/)

Cheers!
