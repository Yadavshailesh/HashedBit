 function swapTheme() {
    // Get references to the elements
    const appDiv = document.getElementById('app');
    const swapButton = document.getElementById('swap');
    
    // Check current theme
    const isDay = appDiv.classList.contains('day');
    
    if (isDay) {
        // Switch to night theme
        appDiv.classList.remove('day');
        appDiv.classList.add('night');
        
        swapButton.classList.remove('button_day');
        swapButton.classList.add('button_night');
    } else {
        // Switch to day theme
        appDiv.classList.remove('night');
        appDiv.classList.add('day');
        
        swapButton.classList.remove('button_night');
        swapButton.classList.add('button_day');
    }
}