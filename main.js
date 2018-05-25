$(document).ready(function(){
    class Chrono {
        constructor() {
            this.currentTime = 0;
            this.remaining = 0;
            this.pomodoroTime = 25*60; // in seconds
            this.pomodoroBreakTime = 5*60; // in seconds
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
            
            document.getElementById("seconds").textContent = 60 - time;
        }
    }

    let myChrono = new Chrono();

    $('button').click(function(){
        /* var btnText = $(this).text(); */
        var btnID = $(this).attr('id');
        /* var spanMinutes = $(this).parents('.code').siblings('.exemple'); */

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

