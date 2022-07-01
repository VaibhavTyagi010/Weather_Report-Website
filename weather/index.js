document.querySelector("form").addEventListener("submit",myfun)
function myfun()
{
    event.preventDefault()
    let name=document.querySelector("#input").value
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=78c9a6d15eee21610bf531b552142525`;
   
//    let url=`https://api.openweathermap.org/data/2.5/forecast?q=${name}&appid=9f9f4eb4eae3f077a3f7a6c78ea0adfb`
   
    fetch(url).then(function(res)
    { 
     return res.json();
    }).then(function(res){
        console.log(res)
        display(res)
       
    }).catch(function(err){
        console.log(err)
    
    })

    function display(data)
    {
        let box = document.querySelector("#box")
        let map = document.getElementById("gmap_canvas");
        box.innerHTML = null;
      
        let city = document.createElement("p");
        city.innerText = `City: ${data.name}`;
        city.setAttribute("id","city")
      
        let min = document.createElement("p");
        min.innerText = `Min temp: ${data.main.temp_min}`;
        min.setAttribute("id","min")
      
        let max = document.createElement("p");
        max.innerText = `Max temp: ${data.main.temp_max}`;
        max.setAttribute("id","max")
      
        let current = document.createElement("p");
        current.innerText = `Current Temp: ${data.main.temp}`;
        current.setAttribute("id","current")
      
        let humidity = document.createElement("p");
        humidity.innerText = `Humidity: ${data.main.humidity}`;
        humidity.setAttribute("id","humidity")
        let des = document.createElement("p");
        des.innerText=`Sky :${data.weather[0].description}`
        des.setAttribute("id","humidity")
        box.append(city, min, max, current, humidity,des);
        map.src = `https://maps.google.com/maps?q=${data.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`;

    }

}