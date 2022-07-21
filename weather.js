//Complete the Weather API Backend part using openweathermap api

async function weather(location){

    location=location.toUpperCase();

const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

const d = new Date();
let month = months[d.getMonth()];

    var a = new Date();
    var weekdays = new Array(7);
    weekdays[0] = "Sunday";
    weekdays[1] = "Monday";
    weekdays[2] = "Tuesday";
    weekdays[3] = "Wednesday";
    weekdays[4] = "Thursday";
    weekdays[5] = "Friday";
    weekdays[6] = "Saturday";
    var r = weekdays[a.getDay()];
    



   try{
        let result= await fetch('https://api.openweathermap.org/data/2.5/weather?q='+location+'&APPID=a8a2ea2efbc8f3028656b79a405d3c1e');
        let result2= await result.json();
        console.log(result2);
      

        if(document.querySelector('.search-box').value==="" || document.querySelector('.search-box').value===null){
            document.querySelector('.city').innerText="";
            document.querySelector(".date").innerText ="";
            document.querySelector('.temp').innerText="";
            document.querySelector('.weather').innerText="";
           document.querySelector('.hi-low').innerText=""; 
        }
      


        else{
        document.querySelector('.city').innerText=result2.name+" "+result2.sys.country;
        document.querySelector(".date").innerText = r+" "+d.getDate()+" "+month+" "+d.getFullYear();
        document.querySelector('.temp').innerText=parseInt((result2.main.temp)-273.15)+"°c";
        document.querySelector('.weather').innerText=result2.weather[0].main;
        document.querySelector('.hi-low').innerText= parseInt((result2.main.temp_max)-273.15)+"°c / "+ parseInt((result2.main.temp_min)-273.15)+"°c";
        }
    
}
        catch(error){
                console.log("from Catch block: "+error);
        }

    }

   