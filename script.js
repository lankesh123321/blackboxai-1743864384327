document.addEventListener('DOMContentLoaded', function() {
    const numberGrid = document.getElementById('numberGrid');
    const drawButton = document.getElementById('drawButton');
    const resetButton = document.getElementById('resetButton');
    const resultsSection = document.getElementById('resultsSection');
    const resultsContainer = document.getElementById('resultsContainer');
    const resultMessage = document.getElementById('resultMessage');
    
    // Generate number balls 1-25
    for (let i = 1; i <= 25; i++) {
        const numberBall = document.createElement('div');
        numberBall.className = 'number-ball bg-white border-2 border-blue-400 text-blue-700 font-bold hover:bg-blue-100';
        numberBall.textContent = i;
        numberBall.dataset.number = i;
        
        numberBall.addEventListener('click', function() {
            this.classList.toggle('selected');
        });
        
        numberGrid.appendChild(numberBall);
    }
    
    // Draw numbers function
    drawButton.addEventListener('click', function() {
        const selectedBalls = document.querySelectorAll('.number-ball.selected');
        
        if (selectedBalls.length !== 5) {
            alert('Please select exactly 5 numbers!');
            return;
        }
        
        // Clear previous results
        resultsContainer.innerHTML = '';
        
        // Generate 5 random winning numbers (1-25)
        const winningNumbers = [];
        while (winningNumbers.length < 5) {
            const num = Math.floor(Math.random() * 25) + 1;
            if (!winningNumbers.includes(num)) {
                winningNumbers.push(num);
            }
        }
        
        // Display winning numbers
        winningNumbers.forEach(num => {
            const ball = document.createElement('div');
            ball.className = 'number-ball bg-blue-600 text-white font-bold';
            ball.textContent = num;
            resultsContainer.appendChild(ball);
        });
        
        // Check for matches
        const userNumbers = Array.from(selectedBalls).map(ball => parseInt(ball.dataset.number));
        const matches = userNumbers.filter(num => winningNumbers.includes(num));
        
        // Show results
        resultsSection.classList.remove('hidden');
        resultMessage.textContent = `You matched ${matches.length} number${matches.length !== 1 ? 's' : ''}!`;
        
        if (matches.length > 0) {
            resultMessage.textContent += ` (${matches.join(', ')})`;
        }
    });
    
    // Reset function
    resetButton.addEventListener('click', function() {
        document.querySelectorAll('.number-ball').forEach(ball => {
            ball.classList.remove('selected');
        });
        resultsSection.classList.add('hidden');
    });
});