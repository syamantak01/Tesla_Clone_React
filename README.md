# Tesla Clone

This is a clone of Tesla webpage built with React, Redux, JavaScript, and CSS. Mainly used Styled Components feature of React to design the webpage. 

## Project Link
https://glistening-cannoli-c04532.netlify.app



## Installation and Setup Instructions

Clone down this repository. You will need `node` and `npm` installed globally on your machine.  

Installation:

`npm install`    

To Start Server:

`npm start`  

To Visit App:

`localhost:3000`  

## Project Sypnosis

  - Took project building approach to learn the React framework and this is the first React project.
  - I built a clone of the Tesla webpage.
  - This project introduced me to a many React Concepts:
    -React Components
    - ReactStyled Components
    - Media Queries
    - React Props 
    - React States and Hooks(particularly the useState)
    - react redux 
  - Tools and languages used:
    - npm
    - CSS
    - Javascript
    - React
    - react-awesome-reveal

## Project Steps

  - I started by using the `npx create-react-app tesla-clone --template redux`.
  - Create the Header Component
  - Create the Home Page
  - styling the Home Page using Styled Components
  - Create Section Component
  - Style Section Component
  - Create & Style ItemText Component
  - Create & Style ButtonGroup Component
  - Create & Style DownArrow Component
  - Add Media Queries to ButtonGroup Component
  - Used Props to customize Section Components
  - Customising the Accessories Section Component
  - Create and Style the Logo, Main Menu, and Right Menu in the Header Component
  - Animated homepage components using React Awesome Reveal
  - Create Sidebar Component in the Home Page
  - Used UseState to open and close the Sidebar Component
  - Added Transition to Sidebar Component
  - Using Redux to create carSlice
  - Mapped carSlice in the Main Menu & Sidebar Component


## Project Structure

  ```
├── src
│   ├── components
│   │   ├── Header.js
|   |   ├── Home.js
|   |   ├── Section.js
|   ├──app
|   |   ├── store.js
|   ├──features
|   |   ├──car
|   |   |   ├──carSlice.js
│   ├── App.css
│   ├── App.js
|   ├── index.css  
│   ├── index.js
|   ├── serviceWorker.js
|   ├── setupTest.js
├── public
│   ├── images
│   ├── index.html
├── node_modules
├── package.json
├── package-lock.json
├── README.md

```
