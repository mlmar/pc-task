# React + TypeScript + Vite

## General Tasks (Top to bottom)

- [x] Header
    - [x] Moustache image and description
    - [x] Navigation Links
    - [x] Tickets button
    - [x] Social media buttons
- [x] Hero section
    - [x] Wide hero section
    - [x] Mobile hero section
- [x] Video cover section
- [x] Intro section
    - [x] "TICKETS DROPPING SOON" peeling sticker
    - [x] Reflection title, paragraph, follow button
- [x] Lineup section
- [x] Performances section
    - [x] Card component
        - [x] Name
        - [x] Description
        - [x] Social media buttons
- [x] Bottom right blue cloud thing

# Thought Process

1. Create the general layout without any styles and icons.
2. Create a component and style module for each section (under `/features`)
3. Simulate fetching performances with `usePerformances` hook by fetching from public json file
4. Implement styles

- I spliced icons from the layout image. Right now they're a bit large at 100x100px but ideally would use smaller svgs.
- Asked AI what font was used and it suggested Futura. It's not the same so the font weights differ in some areas.
- I used an HTML entity code for the red arrow, again I ideally would use an SVG for all icons.
- For mobile, I opted to stack all sections vertically with `flex-direction: column`, changed the performances grid to show 1 column instead of 2, and enabled overflow-x on the header.
    - The PeopleConnect website uses 1000px as the max-width media query so I copied that.
    - Ideally, a hamburger menu could be implemented to turn the toolbar into a dropdown.

## Development

Clone this repo and run the following:

```bash
npm install
npm start
```
