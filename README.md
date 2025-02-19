# UnScramble Me! Word Game 🎮

A fun and challenging word unscrambling game built with React and Tailwind CSS. Test your vocabulary and problem-solving skills by unscrambling letters to form correct words.

## 🎯 Features

- Word scrambling with hints for each word
- Multiple difficulty levels
- Score tracking system
- Three attempts per word
- Mobile-responsive design
- Smooth transitions and animations
- User-friendly interface

## 🛠️ Technologies Used

- React.js
- Tailwind CSS
- Context API for state management

## 📋 Prerequisites

Before running this project, make sure you have:
- Node.js (v14.0.0 or higher)
- npm or yarn package manager

## 🚀 Installation

1. Clone the repository:
```bash
git clone https://github.com/kennedyifeadi/wordScramble.git
cd wordScramble
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm start
# or
yarn start
```

The game should now be running on `http://localhost:3000`

## 🎮 How to Play

1. A scrambled word will appear on screen with a hint
2. Use the input boxes to enter your guess for the unscrambled word
3. You have 3 attempts to guess each word correctly
4. Score 100 points for each correct answer
5. Try to achieve the highest score possible!

## 📁 Project Structure

```
unscramble-game/
├── src/
│   ├── components/
│   │   ├── Gameplay.jsx
│   │   └── ...
│   ├── context/
│   │   └── GameContext.js
│   ├── data/
│   │   └── words.js
│   └── ...
├── public/
└── ...
```

## 🎯 Game Rules

- Each word must be exactly 5 letters long
- All guesses must be valid English words
- You have 3 attempts per word
- The game progresses through multiple levels
- Score 100 points for each correct answer
- Game ends after completing all levels or using all attempts

## 💻 Game Controls

- Type letters using keyboard or on-screen keyboard
- Use backspace to delete letters
- Click 'Submit' to check your answer
- Input fields auto-advance when typing
- Click on any input field to focus it

## 🛠️ Development

### Adding New Words

To add new words to the game, modify the `words.js` file in the `data` directory:

```javascript
export const Words = [
  [
    { word: "REACT", hint: "A JavaScript library" },
    // Add more words here
  ]
];
```

### Modifying Game Logic

Game logic is primarily handled in the `Gameplay.jsx` component and the `GameContext.js` context file.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE.md file for details

## 🙏 Acknowledgments

- Word list sourced from ChatGPT
- Inspired by classic word games
- Built with help from the React community

## 📞 Contact

Your Name - [@kennedyifeadi](https://twitter.com/kennedyifeadi)
Project Link: https://word-scramble-teal.vercel.app/
