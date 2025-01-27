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

1. Players take turns rolling five dice.
2. After each roll, players can set aside dice that form scoring combinations.
3. Players can continue rolling the remaining dice to accumulate more points or end their turn to bank their points.
4. If a player rolls and does not score any points, they lose all points accumulated during that turn.
5. The first player to reach 10,000 points wins the game.

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