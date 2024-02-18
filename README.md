# Emblemise
A weather dashboard application.

## About this repository
This repository aims to allow a user to generate a custom logo based on input acquired via console with inquirer.

## Project Aims
* **When the user is prompted for a text they can input up to three characters.**
* **When the user is prompted for a text colour they can input a colour keyword.**
* **When the user is prompted for a shape they can choose between a rectangle, triangle or circle.**
* **When the user is prompted for a shape colour they can input a colour keyword.**
* **When the user has answered all of the prompts an SVG file named 'logo.svg' is generated and "Generated logo.svg" is logged to console.**

## Technologies
This project uses Node.js and npm, the npm packages used throughout the project are Inquirer for user input and Jest for testing.

## How to use
* **This application requires the user to have both npm and Node.js installed on their computer without these the application will not work.**
1. Once the project has been downloaded locally open whichever console you intend to use, and navigate to the Emblemise directory.
2. Use the command 'npm install' to ensure npm is setup, the project won't work without it.
3. Use the command 'node .\index.js\' to run the application and answer the prompts.
4. Open the generated 'logo.svg' file in your browser.

## Challenges
I was actually pretty worried going into this project as I didn't think I had a very good grasp on either npm or Node.js but I actually found the project relatively smooth to make, the main challenge was the Jest testing. I spent a while troubleshooting why it wouldn't work and then finally found that I hadn't declared Jest as my testing method in my Package.json.

Below is an example ouput of the application:
![Example application ouput](./examples/example1.svg)

## Video Walkthrough
A video walkthrough of the application can be found [here](https://drive.google.com/file/d/1zaIO0M9_j6DuFu_PPGC8b12Ra3ULBAk1/view?usp=sharing).

