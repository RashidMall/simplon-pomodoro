$(document).ready(function(){
    class Chrono {
        constructor() {
            this.currentTime = 0;
            this.remaining = 0;
            this.pomodoroTime = 24; // in minutes
            this.pomodoroBreakTime = 5; // in minutes
        }

        start() {
            let myThis = this; // bypass the "this" problem
            let startTime = new Date().getTime();
            this.intervalID = setInterval(function(){
                myThis.currentTime = Math.floor((new Date().getTime() - startTime)/1000) + myThis.remaining;
                myThis.display(myThis.currentTime);
            }, 1000);
        }

        pause() {
            this.remaining = this.currentTime;
            clearInterval(this.intervalID);
    }

        stop() {
            clearInterval(this.intervalID);
            this.currentTime = 0;
            this.remaining = 0;
            this.display(this.currentTime); // initialize the countdown display
        }
        
        display(time){
            let currentSeconds = 60 - (time%60);
            let currentMinutes = this.pomodoroTime - Math.floor(time/60);

            if(currentSeconds < 10){
                currentSeconds = '0' + currentSeconds; 
            }else if(currentSeconds === 60){
                currentSeconds = '00';
            }

            if(currentMinutes < 10){
                currentMinutes = '0' + currentMinutes; 
            }else if(currentMinutes === 60){
                currentMinutes = '00';
            }
            
            document.getElementById("seconds").textContent = currentSeconds;
            document.getElementById("minutes").textContent = currentMinutes;
        }
    }

    let myChrono = new Chrono();

    $('button').click(function(){
        let btnID = $(this).attr('id');

        if(btnID == 'start'){
            myChrono.start();
            $(this).prop('disabled', true);
        }else if(btnID == 'pause'){
            myChrono.pause();
            $(this).siblings('#start').prop('disabled', false);
        }else if(btnID == 'stop'){
            myChrono.stop();
            $(this).siblings('#start').prop('disabled', false);
        } 
    })
});

