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
  console.log('path got from loclh', path)
  if (path) {
    console.log('path got from loclh', path)
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