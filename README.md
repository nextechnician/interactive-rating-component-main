# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

-  [Overview](#overview)
   -  [The challenge](#the-challenge)
   -  [Screenshot](#screenshot)
   -  [Links](#links)
-  [My process](#my-process)
   -  [Built with](#built-with)
   -  [What I learned](#what-i-learned)
-  [Author](#author)

## Overview

### The challenge

Users should be able to:

-  View the optimal layout for the app depending on their device's screen size
-  See hover states for all interactive elements on the page
-  Select and submit a number rating
-  See the "Thank you" card state after submitting a rating

### Screenshot

![](/preview.png)

### Links

-  Solution URL: (https://github.com/nextechnician/interactive-rating-component-main)
-  Live Site URL: (https://talay-rating-component.netlify.app/)

## My process

I started by studying the desktop design to understand the overall layout. Once I was clear on the structure, I wrote the HTML using semantic elements and meaningful class names, keeping the component self-contained and easy to reason about.

From there, I created my design tokens (colors, font sizes, spacing, border-radius, etc.) and built the layout with a mobile-first approach.

After the styling felt solid and close to the design, I moved on to the JavaScript. I started by naming and selecting all the elements that mattered for behavior (rating buttons, submit button, both containers, and the text where the selected rating is shown). Once those were in place, I wired up the interaction logic and focused on keeping the state and UI updates simple and predictable.

### Built with

-  Semantic HTML5 markup
-  CSS custom properties
-  Flexbox
-  CSS Grid
-  Mobile-first workflow
-  Vanilla JS

### What I learned

This project was my first proper interactive component built with vanilla JavaScript, and it helped me connect a lot of concepts I’d been learning.

On the JavaScript side, I learned how to:

-  Start by defining my state and key DOM references:
   -  A `selectedRating` variable that starts as `null`
   -  Constants for the rating buttons, submit button, rating container, thank-you container, and the span that displays the selected rating
-  Use `querySelector` and `querySelectorAll` to grab exactly the elements I need, and loop over a NodeList of buttons to attach click handlers
-  Read the text from the clicked rating button and store it in `selectedRating`, so the UI and logic are both driven by the same piece of state
-  Control visual state by adding and removing a “selected” class on the rating buttons:
   -  First clear the class from all buttons
   -  Then add it only to the one that was clicked, so only one rating stays highlighted
-  Use the `hidden` attribute, combined with a small CSS rule, to swap between the rating view and the thank-you view instead of hacking it with random `display` values
-  Add a simple guard in the submit handler so the component only moves to the thank-you screen when a rating has actually been chosen

Overall, this made me much more confident with event-driven JavaScript: listening for user actions, updating state, and then reflecting that state in the DOM in a clean, controlled way.

## Author

-  Frontend Mentor - [@nextechnician](https://www.frontendmentor.io/profile/nextechnician)
