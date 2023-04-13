# Poke Memory Game
## Overview
Poke Memory Game is a React app with the data provided by [Poke API](https://pokeapi.co/docs/v2). The game rule is simple.
* There are 10 cards on screen and they are all five sets of a pair of the same Pokemon character.
* You have to flip cards to make a match (cards will be flipped over to back again if it's a mismatch, so you have to remember the position).
* If you can find all five pairs within 30 seconds, it's your win.

## Demo
1. The app initialises the screen with 10 cards with all flipped to back. Click 'Start Game' to start!  
![1_initial_screen](https://user-images.githubusercontent.com/126217845/231639860-c72ff1b4-1860-4773-85d5-468d46bb4819.png). 

1. The 30 seconds countdown stars and you can try to make a matched pair of the same pokemon as much as possible.  
![2_flipping_screen](https://user-images.githubusercontent.com/126217845/231640248-34dbdd68-11a3-4ff2-bd67-6c764229e1e5.png). 

1. If you couldn't finish finding all the matches within the time limit, it's gameover.  
![3_gameover_screen](https://user-images.githubusercontent.com/126217845/231640405-d82bc524-136f-430f-a0d0-ff26f3fcbff1.png)

1. If you find all the matches within the time limit, it's your win!  
![4_successful_screen](https://user-images.githubusercontent.com/126217845/231640529-01a26e80-5cdf-4fb8-8324-eb24cc0d7317.png)

## To Install and Run Locally 
It uses graphql server at back-end and react at front-end.

1. Clone the repository.
```
git clone https://github.com/JennyJunko2/PokeMemoryGame.git
```
2. To spin up the graphql server, run the following command inside the `PokeMemoryGame` folder
```
cd ./server && npm install && npm start
```
3. To spin up the react app, open up another terminal and run the following command inside the `PokeMemoryGame` folder
```
cd ./client/poke-memory-client && npm install && npm start
```
4. It will open up `http://localhost:3000/` and you can access and play on the browser.
