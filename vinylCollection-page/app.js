console.log("Hello World!");

function changeText() {  
  addEventListener("click", function() {
    document.getElementById('sun').innerHTML = 'Angels and Demons at Play';
  });
}

changeText();

function marsVolta() {
  addEventListener("click", function(){
    document.getElementById('TMV').innerHTML = 'Take the Vein Cerpin Taxt';
  });
}

marsVolta();

function showTime() {
  var date = new Date();
  var h = date.getHours();
  var m = date.getMinutes();
  var s = date.getSeconds();
  var session = "AM";

  if (h == 0) {
    h = 12;
  }

  if (h > 12) {
    h = h-12;
    session = "PM";
  }

  h = (h < 10) ? "0" + h : h;
  m = (m < 10) ? "0" + m : m;
  s = (s < 10) ? "0" + s : s;

  var time = h + " : " + m + " : " + s + " " + session;
  document.getElementById("myClock").innerText = time;
  document.getElementById("myClock").textContent = time;
  
  setTimeout(showTime, 1000);
}

showTime();
