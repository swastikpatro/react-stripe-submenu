# React stripe Submenu

Submenu Shows up for non-mobile screen when hovered on particular links, and submenu contains information related to the respective hovered link.

[Live Link](https://react-stripe-submenu.vercel.app/)

DEMO ▶

https://user-images.githubusercontent.com/113245457/210147795-016d3d0e-fbe2-4da0-9fe1-c25c2b008433.mp4


## Features:

- Responsive
- For Non-Mobile:
  - Submenu opens on hovering navigation links and closes if hovered anywhere except navigation links.
  - Event Delegation on the parent element containing navigation links.
  - Toggle button, and Sidebar is not displayed.
- For Mobile:
  - Sidebar displays on clicking toggle button.
  - Clicking outside sidebar in the overlay ( AND )
    Clicking on cancel button in sidebar leads to closing of sidebar.
  - Submenu is not displayed.

## Technology used:

- CSS
- React
- TypeScript
- React-icons
- Framer Motion
