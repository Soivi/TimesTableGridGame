// LocalStorage initialization and utility functions
// This file handles all LocalStorage operations for the Times Table Grid Game

function initializeLocalStorage() {
    // Initialize highscores if it doesn't exist
    if (!localStorage.getItem('highscores')) {
        const initialData = {};
        initialData[0] = 1; // Vibration setting (1 = ON, 0 = OFF)
        for (let i = 1; i <= 25; i++) {
            initialData[i] = 0; // High score slots
        }
        localStorage.setItem('highscores', JSON.stringify(initialData));
        console.log("LocalStorage initialized with default values");
    }
}

// Utility function to get highscores safely
function getHighScores() {
    try {
        return JSON.parse(localStorage.getItem('highscores') || '{}');
    } catch (error) {
        console.error("Error reading highscores from localStorage:", error);
        // Return default structure if parsing fails
        return { 0: 1 };
    }
}

// Utility function to save highscores safely
function saveHighScores(highscores) {
    try {
        localStorage.setItem('highscores', JSON.stringify(highscores));
        return true;
    } catch (error) {
        console.error("Error saving highscores to localStorage:", error);
        return false;
    }
}

// Utility function to get vibration setting
function getVibrationSetting() {
    const highscores = getHighScores();
    return highscores[0] !== undefined ? highscores[0] : 1;
}

// Utility function to set vibration setting
function setVibrationSetting(value) {
    const highscores = getHighScores();
    highscores[0] = value;
    return saveHighScores(highscores);
}

// Utility function to calculate block unlock status
function calculateBlocks(allTimesBlock) {
    try {
        if (allTimesBlock > 1000 || allTimesBlock == 0) {
            return false;
        } else {
            return true;
        }
    } catch (error) {
        console.error("Error calculating blocks:", error);
        return false;
    }
}


