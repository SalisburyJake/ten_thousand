# Ten Thousand

A dice game where you roll 5 dice and try to work your way up to 10,000 points.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Game Rules](#game-rules)
- [Contributing](#contributing)
- [License](#license)

## Introduction

Ten Thousand is a fun and engaging dice game where players take turns rolling five dice to accumulate points. The goal is to be the first player to reach 10,000 points. This project is a web-based implementation of the game, allowing players to enjoy it in their browser.

## Features

- Add and manage multiple players
- Roll dice and calculate scores automatically
- Save and load game state using cookies
- Responsive design for various screen sizes
- Popup windows for adding scores and starting new games

## Installation

To run this project locally, follow these steps:

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/ten_thousand.git
    ```

2. Navigate to the project directory:
    ```sh
    cd ten_thousand
    ```

3. Open `index.html` in your web browser.

## Usage

1. Open the `index.html` file in your web browser.
2. Click the "New Game" button to start a new game.
3. Add players by entering their names.
4. Click on a player's name to add their score.
5. The game will automatically save the state using cookies, so you can resume later.

## Game Rules

### Objective
The objective of Ten Thousand is to be the first player to reach a total of 10,000 points.

### Equipment
- 5 six-sided dice
- A score sheet and a pen for keeping track of scores

### Setup
1. Each player rolls one die. The player with the highest roll goes first.
2. Play proceeds clockwise around the table.

### Gameplay
1. On a player's turn, they roll all 5 dice.
2. After each roll, the player must set aside at least one scoring die or a combination of scoring dice.
3. The player can then choose to either:
   - Roll the remaining dice to accumulate more points.
   - End their turn and bank the points accumulated during that turn.

### Scoring (during a single roll)
- **Single 1s**: 100 points each
- **Single 5s**: 50 points each
- **Three of a kind**:
  - Three 1s: 1,000 points
  - Three 2s: 200 points
  - Three 3s: 300 points
  - Three 4s: 400 points
  - Three 5s: 500 points
  - Three 6s: 600 points 
- **Five of a kind**: GAME OVER PLAYER
- **Straight (1-2-3-4-5)**: 1,500 points

#### Additional Rules
- If a player rolls and does not score any points (a "farkle"), they lose all points accumulated during that turn and their turn ends.
- If a player sets aside all 5 dice as scoring dice, they can roll all 5 dice again and continue accumulating points.
- A player must score at least 500 points in a single turn to start accumulating points on the score sheet (to begin scoring).
- Once a player reaches or exceeds 10,000 points, each other player gets one final turn to try to beat that score.

### Winning the Game
The game ends when all players have had their final turn after one player reaches or exceeds 10,000 points. The player with the highest score wins the game.

### Example Turn
1. Player rolls 5 dice: 1, 5, 4, 4, 4
   - Player sets three 4s (400 points).
   - Player has 400 points and decides to roll the remaining 1 die.
2. Player rolls 2 dice: 5, 3
   - Player sets aside the 5 (50 points).
   - Player has 500 points and decides to roll the remaining 1 die.
3. Player rolls 1 die: 1
   - Player sets aside the 1 (100 points).
   - Player has 550 points and decides to end their turn and bank the points.

The player banks 550 points and the next player takes their turn.

### Strategy Tips
- Be cautious when rolling the remaining dice, as a "farkle" will cause you to lose all points accumulated during that turn.
- Consider ending your turn and banking points if you have a high score, rather than risking a "farkle".
- Pay attention to the scores of other players and adjust your strategy accordingly.

Enjoy playing Ten Thousand!

## Contributing

Contributions are welcome! If you have any suggestions or improvements, please create a pull request or open an issue.

1. Fork the repository.
2. Create a new branch:
    ```sh
    git checkout -b feature/your-feature-name
    ```

3. Make your changes and commit them:
    ```sh
    git commit -m 'Add some feature'
    ```

4. Push to the branch:
    ```sh
    git push origin feature/your-feature-name
    ```

5. Open a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for details.