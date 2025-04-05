
Built by https://www.blackbox.ai

---

```markdown
# Wingo Lottery

## Project Overview
Wingo Lottery is a simple web-based lottery game where players can select their numbers and check if they match the randomly drawn winning numbers. The game employs a user-friendly interface built with HTML, CSS, and JavaScript, leveraging the Tailwind CSS framework for responsive design and beautiful aesthetics.

## Installation
To set up the Wingo Lottery game locally on your machine, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   cd wingo-lottery
   ```

2. **Open `index.html`**:
   You can open `index.html` directly in your web browser to play the game.

3. **Optional**: If you want to make modifications, consider using a local server. You can use tools like XAMPP, MAMP, or live-server.

## Usage
1. Open the game in your web browser.
2. Select exactly 5 numbers from the grid displayed on the screen.
3. Enter your name and bet amount (the bet functionality is currently illustrative).
4. Click the "Draw Numbers" button to see your results.
5. The selected numbers will be compared to 5 randomly drawn winning numbers.
6. The results will show how many numbers you matched.

## Features
- Select numbers from a grid of 1 to 25.
- Randomly generated winning numbers for each draw.
- Visual feedback on selected numbers and match results.
- Reset functionality to start a new game.

## Dependencies
This project uses the following libraries for styling and functionality:
- [Tailwind CSS](https://tailwindcss.com/): For utility-first CSS styling.
- [Font Awesome](https://fontawesome.com/): For icons used in buttons and headers.

No specific package manager (like npm) is used in this project, but you can include the required scripts from CDN, as demonstrated in the `index.html`.

## Project Structure
Here's a brief overview of the project's file structure:

```
/wingo-lottery
│
├── index.html           # The main HTML file for the game.
├── script.js            # JavaScript file containing the game's functionality.
├── styles.css           # CSS file for custom styles for the Wingo Lottery game.
```

### Key Files:
- **index.html**: The entry point of the application and contains the UI structure.
- **script.js**: Handles the game logic, including selecting numbers and drawing random winning numbers.
- **styles.css**: Contains custom styles to enhance the overall appearance of the game, including animations and responsive adjustments.

## Contributing
If you have suggestions for improvements or want to report bugs, feel free to submit issues or pull requests.

## License
This project is open-source and available under the [MIT License](LICENSE).

---

Enjoy playing Wingo Lottery!
```