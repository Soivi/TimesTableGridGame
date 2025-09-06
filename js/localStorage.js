// LocalStorage initialization and utility functions
// This file handles all LocalStorage operations for the Times Table Grid Game

function initializeLocalStorage() {
    // Initialize highscores if it doesn't exist
    if (!localStorage.getItem('highscores')) {
        const initialData = {};

        for (let i = 1; i <= 25; i++) {
            initialData[i] = 0; // High score slots
        }
        localStorage.setItem('highscores', JSON.stringify(initialData));
    }
    
    // Initialize vibration setting if it doesn't exist
    if (!localStorage.getItem('vibration')) {
        setVibrationSetting(true);
    }
}

// Utility function to get highscores safely
function getHighScores() {
    try {
        return JSON.parse(localStorage.getItem('highscores') || '{}');
    } catch (error) {
        console.error("Error reading highscores from localStorage:", error);
        // Return default structure if parsing fails
        const defaultHighScores = {};
        for (let i = 1; i <= 25; i++) {
            defaultHighScores[i] = 0;
        }
        return defaultHighScores;
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
    try {
        const vibrationValue = localStorage.getItem('vibration');
        if (vibrationValue === null) {
            return true; // Default to true if not set
        }
        return JSON.parse(vibrationValue);
    } catch (error) {
        console.error("Error reading vibration setting from localStorage:", error);
        return true; // Default to true on error
    }
}

// Utility function to set vibration setting
function setVibrationSetting(value) {
    try {
        localStorage.setItem('vibration', JSON.stringify(value));
    } catch (error) {
        console.error("Error saving vibration setting to localStorage:", error);
    }
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


