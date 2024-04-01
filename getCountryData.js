function Connect() {
    var search = document.getElementById("search-input").value;

    var url = `https://restcountries.com/v3.1/name/${search}`;

    fetch(url).then(res => res.json()).then(data => display(data));
}

function display(items) {
    var oldContent = document.getElementById("box");
    oldContent.textContent = "";

    for (var i=0; i<items.length; i++) {
        var newDiv = document.createElement("div");
        newDiv.innerHTML = `Country: ${items[i].name.common} <br> <br>
                            Capital: ${items[i].capital}<br><br>
                            Continent: ${items[i].region}<br>
                            <button class="view-button" id="view-more" onclick="WeatherData()"
                            style="background: none; border: none; cursor: pointer; text-decoration: underline;">View More</button>
                            <br>`

        newDiv.classList.add("box-style");
        oldContent.appendChild(newDiv);
    }
}

{/* <a href="#" onclick="WeatherData()">View More</a> */}