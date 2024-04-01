function WeatherData() {
    var search = document.getElementById("search-input").value;

    var url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=5a18fc6e52dc7342ee016a20e95a106c&units=metric`;
    
    fetch(url).then(res => res.json()).then(data => displayWeather(data));

}

function displayWeather(items) {
    console.log(items);
    document.getElementById("view-more").innerHTML = "";
    var oldContent = document.getElementsByClassName("box-style")[0];
    

    var newDiv = document.createElement("div");
    newDiv.innerHTML = `<br>Temperature: ${items.main.temp} <br>
                        Humidity: ${items.main.humidity} <br>
                        Wind Speed: ${items.wind.speed} <br>
                            <br>`
    newDiv.classList.add("weather-style");
        
    oldContent.appendChild(newDiv);
}


// //   var heroRow = document.getElementsByTagName("hero-row")[0];
//   heroRow.className = heroRow.className.replace("hidden-helper", "");

//   var searchRow = document.getElementsByTagName("search-row")[0];
//   searchRow.className = "hidden-helper";

//   await foo(`${data.value}`);
//   await cast(`${data.value}`);
//   document.getElementById("result-view").innerHTML = "";