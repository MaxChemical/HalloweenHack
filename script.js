function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function ghaster() {
  console.log("🕈︎♒︎♋︎⧫︎ ♋︎❒︎♏︎ ⍓︎□︎◆︎ ♎︎□︎♓︎■︎♑︎ ♒︎♏︎❒︎♏︎✍︎");
}

function censor() {
  document.getElementById('descriptiontable').style.display = "none";
  document.getElementById('Wingdingdescriptiontable').style.display = "block";
  document.getElementById('downloadtable').style.backgroundImage = "none";
  document.getElementById("censored").style.display = "block";
  document.getElementById("showndownloadtable").style.display = "none";
}

function uboa() {

  document.body.style.backgroundImage = "url('images/bgs/bg117.png')";
  document.body.style.backgroundSize = "10%";
  document.body.style.color = "#ccc";

  document.getElementById("Gimage1").src = "images/favicon.png";
  document.getElementById("Gimage1").style.display = "block";
  document.getElementById("Gimage1").style.marginLeft = "auto";
  document.getElementById("Gimage1").style.marginRight = "auto";
  document.getElementById("Gallery").style.marginTop = "8%";

  document.getElementById('Wingdingdescriptiontable').style.fontFamily = "Wingding";
  document.getElementById('downloadtable').style.backgroundImage = "none";
  document.getElementById('ROMNote').style.display = "none";

  censor();

  document.getElementById("Gimage2").src = ""
  document.getElementById("Gimage3").src = ""
  document.getElementById("Gimage4").src = ""

  ghaster();
}

var Halloween = new Date();

async function ONHalloween() {
  await sleep(15000);
  uboa();
}

function NWHalloween() {
  uboa();
}

if (((Halloween.getMonth() + 1) === 10 && (Halloween.getDate() === 31))) // In Halloween
  ONHalloween();
else if (Math.floor(Math.random() * 64) === 17)
  NWHalloween();