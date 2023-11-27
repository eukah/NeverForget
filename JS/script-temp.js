document.addEventListener('DOMContentLoaded', function () {
    let timerInterval;
    let timerSeconds = 1500; // 25 minutos em segundos (25 * 60)

    const timerDisplay = document.getElementById('timer');
    const startPauseButton = document.getElementById('start-pause');

    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
    }

    function startTimer() {
        timerInterval = setInterval(function () {
            if (timerSeconds > 0) {
                timerSeconds--;
                timerDisplay.textContent = formatTime(timerSeconds);
            } else {
                clearInterval(timerInterval);
                timerDisplay.textContent = '00:00';
            }
        }, 1000);
    }

    function pauseTimer() {
        clearInterval(timerInterval);
    }

    function resetTimer() {
        clearInterval(timerInterval);
        timerSeconds = 1500;
        timerDisplay.textContent = formatTime(timerSeconds);
    }

    startPauseButton.addEventListener('click', function () {
        if (startPauseButton.textContent === 'Começar') {
            startTimer();
            startPauseButton.textContent = 'Pausar';
        } else {
            pauseTimer();
            startPauseButton.textContent = 'Continuar';
        }
    });

    // Adicione um botão de reiniciar o temporizador
    const resetButton = document.createElement('button');
    resetButton.textContent = 'Reiniciar';
    resetButton.addEventListener('click', resetTimer);
    document.querySelector('.app__card-primary-button-wrapper').appendChild(resetButton);
});