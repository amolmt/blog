---
title: "Saas - Notes"
date: "2021-03-01"
og:
  description: "Notes on Saas"
  image: "https://amolt.me/og/usestate.png"
author:
  twitter: "amoltangade"
  name: "Amol Tangade"
---

## sass notes

- based on JS
- it is a superset of css
- compiles down to css
- used for:
  - clean code
  - makes you write fewer code so dev can write css faster
  - compatible with all versions of css

### general features

- nesting

```scss
.enlarge {
  font-size: 14px;
  transition: {
    property: font-size;
    duration: 4s;
    delay: 2s;
  }

  &:hover {
    font-size: 36px;
  }
}
```

- adding suffixes

  - scss code

  ```scss
  .accordion {
    max-width: 600px;
    margin: 4rem auto;
    width: 90%;
    font-family: "Raleway", sans-serif;
    background: #f4f4f4;

    &__copy {
      display: none;
      padding: 1rem 1.5rem 2rem 1.5rem;
      color: gray;
      line-height: 1.6;
      font-size: 14px;
      font-weight: 500;

      &--open {
        display: block;
      }
    }
  }
  ```

  - css code

  ```css
  .accordion {
    max-width: 600px;
    margin: 4rem auto;
    width: 90%;
    font-family: "Raleway", sans-serif;
    background: #f4f4f4;
  }
  .accordion__copy {
    display: none;
    padding: 1rem 1.5rem 2rem 1.5rem;
    color: gray;
    line-height: 1.6;
    font-size: 14px;
    font-weight: 500;
  }
  .accordion__copy--open {
    display: block;
  }
  ```

- placeholder selectors
  - these get emitted when not extended
  - used for reusing existing styles

```scss
%toolbelt {
  box-sizing: border-box;
  border-top: 1px rgba(#000, 0.12) solid;
  padding: 16px 0;
  width: 100%;

  &:hover {
    border: 2px rgba(#000, 0.5) solid;
  }
}

.action-buttons {
  @extend %toolbelt;
  color: #4285f4;
}
```

### benefits over traditional css

- syntax friendly
- offers variables
- uses nested syntax
- provides features such as mixins (for shortening the code)
- files can be seperated and merged (for code modularity)

### variables

Sass variables are simple: you assign a value to a name that begins with $, and then you can refer to that name instead of the value itself.

```scss
$base-color: #c6538c;
$border-dark: rgba($base-color, 0.88);

.alert {
  border: 1px solid $border-dark;
}
```

### at-rules

- @use loads mixins, functions, and variables from other Sass stylesheets, and combines CSS from multiple stylesheets together.

- @forward loads a Sass stylesheet and makes its mixins, functions, and variables available when your stylesheet is loaded with the @use rule.

- @import extends the CSS at-rule to load styles, mixins, functions, and variables from other stylesheets.

- @mixin and @include makes it easy to re-use chunks of styles.

- @function defines custom functions that can be used in SassScript expressions.

- @extend allows selectors to inherit styles from one another.

- @at-root puts styles within it at the root of the CSS document.

- Flow control rules like @if, @each, @for, and @while control whether or how many times styles are emitted.

```scss
@use "sass:map";

$theme-colors: (
  "success": #28a745,
  "info": #17a2b8,
  "warning": #ffc107,
);

.alert {
  background-color: map.get($theme-colors, "warning");
}
```

#### mixins and includes

- allows you to re-use code

  - scss code:

  ```scss
  @mixin corner-icon($name, $top-or-bottom, $left-or-right) {
    .icon-#{$name} {
      background-image: url("/icons/#{$name}.svg");
      position: absolute;
      #{$top-or-bottom}: 0;
      #{$left-or-right}: 0;
    }
  }

  @include corner-icon("mail", top, left);
  ```

  - css code:

  ```css
  .icon-mail {
    background-image: url("/icons/mail.svg");
    position: absolute;
    top: 0;
    left: 0;
  }
  ```

#### functions

- allows us to define complex operations that we can re-use.
- they make it easy to abstract out common formulas and behaviors in a readable way.

```scss
@function black($opacity) {
  @return rgba(black, $opacity);
}

@function white($opacity) {
  @return rgba(white, $opacity);
}

.my-class {
  background: black(0.15);
  color: white(0.9);
}
```

#### @use

The @use rule loads mixins, functions, and variables from other Sass stylesheets

```scss
// foundation/_code.scss
code {
  padding: 0.25em;
  line-height: 0;
}

// foundation/_lists.scss
ul,
ol {
  text-align: left;

  & & {
    padding: {
      bottom: 0;
      left: 0;
    }
  }
}

// style.scss
@use 'foundation/code';
@use 'foundation/lists';
```

#### @import

Sass extends CSS's @import rule with the ability to import Sass and CSS stylesheets, providing access to mixins, functions, and variables and combining multiple stylesheets' CSS together.

```scss
SCSS SYNTAX
// foundation/_code.scss
code {
  padding: 0.25em;
  line-height: 0;
}
// foundation/_lists.scss
ul,
ol {
  text-align: left;

  & & {
    padding: {
      bottom: 0;
      left: 0;
    }
  }
}
// style.scss
@import "foundation/code", "foundation/lists";
```

#### @extend

There are often cases when designing a page when one class should have all the styles of another class, as well as its own specific styles.

```scss
// scss

.error {
  border: 1px #f00;
  background-color: #fdd;

  &--serious {
    @extend .error;
    border-width: 3px;
  }
}

// css

.error,
.error--serious {
  border: 1px #f00;
  background-color: #fdd;
}
.error--serious {
  border-width: 3px;
}
```

#### lists

```scss
$sizes: 40px, 50px, 80px;

@each $size in $sizes {
  .icon-#{$size} {
    font-size: $size;
    height: $size;
    width: $size;
  }
}

// output
.icon-40px {
  font-size: 40px;
  height: 40px;
  width: 40px;
}

.icon-50px {
  font-size: 50px;
  height: 50px;
  width: 50px;
}

.icon-80px {
  font-size: 80px;
  height: 80px;
  width: 80px;
}
```

#### maps

```scss
$icons: (
  "eye": "\f112",
  "start": "\f12e",
  "stop": "\f12f",
);

@each $name, $glyph in $icons {
  .icon-#{$name}:before {
    display: inline-block;
    font-family: "Icon Font";
    content: $glyph;
  }
}

// output
@charset "UTF-8";
.icon-eye:before {
  display: inline-block;
  font-family: "Icon Font";
  content: "";
}

.icon-start:before {
  display: inline-block;
  font-family: "Icon Font";
  content: "";
}

.icon-stop:before {
  display: inline-block;
  font-family: "Icon Font";
  content: "";
}
```

#### booleans

```scss
@mixin avatar($size, $circle: false) {
  width: $size;
  height: $size;

  @if $circle {
    border-radius: $size / 2;
  }
}

.square-av {
  @include avatar(100px, $circle: false);
}
.circle-av {
  @include avatar(100px, $circle: true);
}
```
