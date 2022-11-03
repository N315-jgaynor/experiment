# N315 Homework Five

This assignment helped me learn how to loop objects with JSON to display content on a page.

# Web4 Link

in-info-web4.informatics.iupui.edu/~jgaynor/hw-five/index.html

# Project Highlights

## JSON Loops

We looped through objects with JSON by defining string objects in a variable and recalling those objects using .append to add content to the page. We used jQuery to retrieve different values for different keys to inject into #app, such as ${game.gameTitle} to get the game title.

```javascript
$.each(GAMES, function (index, game) {
    $("#app").append(`<div id="${index}" class="gameHolder">
      <h1>${game.gameTitle}</h1>
```

## Problems Encountered

One issue I encountered was figuring out the styling of the page while injecting content. Because .append adds new content in addition to whatever already exists on the page, I found it difficult to style the wrapper that contained the game content. I ended up just styling #app directly, which works for the sake of this project but would not work on larger projects with multiple pages that might interfere with the #app styling.
