function countdown(remTime) {
    
    console.log(remTime);
  
            if(remTime > 0){


                s = Math.floor(remTime / 1000);
                m = Math.floor(s / 60);
                h = Math.floor(m / 60);
                d = Math.floor(h / 24);
            
               h %= 24;
               m %= 60;
               s %= 60;
            }else{
                h=m=s=d = 0;
            }
        
        
            // const ho = (h < 10) ? "0" + h : h;
            // const mo = (m < 10) ? "0" + m : m;
            // const so = (s < 10) ? "0" + s : h;
        
            document.getElementById("days").textContent = d;
            document.getElementById("days").innerText = d;
        
            document.getElementById("hours").textContent = h;
            document.getElementById("minutes").textContent = m;
            document.getElementById("seconds").textContent = s;
            console.log("fjfjffj", h, s)
            
}

function startCountDown() {
    setInterval(() => {
        var now = new Date();
    var eventDate = new Date(2019, 11, 09).getTime();

    console.log(now, eventDate)
   
var remTime =  eventDate - now;
countdown(remTime)
    }, 1000)
}

startCountDown();