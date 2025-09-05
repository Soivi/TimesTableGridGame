# Copilot Instructions for Times Table Grid Game

## Project Overview
This is a PWA-based mobile game for practicing multiplication tables. The game consists of multiple blocks and levels with different difficulty settings.

## Architecture
- **Frontend**: HTML5, CSS3, JavaScript
- **Storage**: Browser LocalStorage for persistent data
- **Target Platform**: Mobile devices via PWA and web browsers
- **Testing**: Selenium WebDriver with Python

## Coding standards
- Use JavaScript with ES2023 features
- Keep the code simple and maintainable
- Use descriptive variable and function names
- Do not add comments unless absolutely necessary, the code should be self-explanatory
- After making changes, ensure to test there is no syntax error and the game runs as expected

## Key Components

### Game Structure
- **Block 0**: Tutorial levels (practice, easy, medium, hard, very hard, impossible)
- **Block 1**: Timed levels (1-10) with 120-second unlock requirement
- **Block 2**: Score-based levels (1-10) with 15 correct answers requirement

## Coding Conventions

### Variable Naming
- Use camelCase: `correctAnswers`, `wantedNumber`, `yourBestTime`
- Storage-related: `scoreData`, `levelData`, `unlockSeconds`
- Time-related: `totalTime`, `allTimesBlock`

### Level Progression Logic
- Block 0: Time-based progression (must complete within 40 seconds)
- Block 1: Time-based progression (must complete within 120 seconds)  
- Block 2: Score-based progression (must get 15+ correct answers)

## User interactions
- Ask questions if you are unsure about the implementation details, design choices, or need clarification on the requirements
- Always answer in the same language as the question, but use english for the generated content like code, comments or docs