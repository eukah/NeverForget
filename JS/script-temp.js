function startTimer(duration, display){
   
    var timer = duration, minutes, seconds;

    setInterval(function(){
        

        minutes = parseInt(timer /60, 10);
        seconds = parseInt(timer % 60,10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes  + ":" + seconds;

        if(--timer <0){
            timer = duration;
        }
    }, 1000);
}


window.onload = function() {
    const start = document.getElementById("start-pause");

    start.addEventListener('click', function() {
        var duration = 60 * 25; // Para segundos
        var display = document.querySelector("#timer"); // Onde exibiremos o contador

        startTimer(duration, display); // Inicia a função
    });
}