# QuickNotes

QuickNotes is a simple note-taking web app built with HTML, CSS and JavaScript. You can write short notes, give each one a category, search through them, and delete the ones you no longer need. Your notes stay saved in the browser, even after you refresh the page.

## Features

- Add notes in three categories: Personal, Work and Study
- Each note shows its text, category label and the date and time it was created
- Validation for empty notes and notes over 200 characters
- Delete any note with its own Delete button
- A live count of how many notes you have
- Search notes by their text, ignoring upper and lower case
- Notes saved with localStorage so they survive a page refresh
- A responsive layout that stacks the form on small screens

## How to run the project locally

1. Clone the repository: `git clone https://github.com/kiaidavis1/quicknotes-app.git`
2. Open the `quicknotes-app` folder in VS Code.
3. Open `index.html` in a browser, or right-click it and choose **Open with Live Server**.

## What I learned

- How to build a page from semantic HTML elements and link a label to its input
- How to use Flexbox, category classes and a media query to style a responsive layout
- How to keep data in an array of objects and rebuild the page with a render() function
- How to save and load data with localStorage using JSON.stringify and JSON.parse
- How to commit after each small task so my Git history tells the story of the project