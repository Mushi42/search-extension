const apiKey = "c8172414995f2d78fdc55713b1f068f6";

var mybutton = document.getElementById("mybutton");
var x = document.getElementById("details");

(() => {
  var path = localStorage.getItem("extWallpaper");
  if (path) {
    document.getElementById('clock').style.backgroundImage = "url(" + path + ")";
  } else {
    document.getElementById('clock').style.backgroundImage = "url('https://wallpaper.dog/large/10777293.jpg')"

  }
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(Positionweather);
  } else {
    alert("Geolocation is not supported by this browser.");
  }

})()
function Positionweather(position) {
  var msg = document.getElementById("msg");
  var temp = document.getElementById("temp");
  var desc = document.getElementById("desc");
  var lat = position.coords.latitude;
  var lon = position.coords.longitude;
  var url1 = "https://api.openweathermap.org/data/2.5/weather?lat=";
  var url2 = "&lon=";
  var url3 = "&appid=";
  var url4 = "&units=metric";
  var url = url1.concat(lat, url2, lon, url3, apiKey, url4);
  fetch(url)
    .then(response => response.json())
    .then(data => {
      var name = data.name;
      var country = data.sys.country;
      var t = data.main.temp;
      var des = data.weather[0]["main"];
      x.style.display = "block";
      msg.textContent = name + " ," + country;
      temp.textContent = t + " *C";
      var icon1 = "https://openweathermap.org/img/wn/";
      var icon2 = data.weather[0]["icon"];
      var icon3 = "@2x.png";
      var icon = icon1.concat(icon2, icon3);
      document.getElementById("icon").src = icon;
      desc.textContent = des;
    })
    .catch(() => {
      x.style.display = "block";
      msg.textContent = "Please search for a valid city 😩";
    });
}

document.getElementById("mySearch")
  .addEventListener("keyup", function (event) {
    event.preventDefault();
    if (event.keyCode === 13) {
      let searchValue = document.getElementById("mySearch").value
      window.open(`https://search.securedengine.com/search?tkn=kSBvemQf&tid=Stress_NT&q=${searchValue}`, "_self")
    }
  });


window.onload = () => {
  var path = localStorage.getItem("extWallpaper");
  if (path) {
    document.getElementById('clock').style.backgroundImage = "url(" + path + ")";
  }
}


document.getElementById('getval').addEventListener('change', readURL, true);
function readURL() {
  var file = document.getElementById("getval").files[0];
  var reader = new FileReader();
  reader.onloadend = function () {
    localStorage.setItem("extWallpaper", reader.result);

    document.getElementById('clock').style.backgroundImage = "url(" + reader.result + ")";
  }
  if (file) {
    reader.readAsDataURL(file);
  } else {
  }
}