function handleInput() {
  var name = prompt("Enter your name");

  if (!name) {
    document.getElementById("opArea").innerHTML =
      "Oops! No name detected. Wizards need names to work their magic ✨";
    return;
  }

  var msg = `Your name is ${name}`;
  document.getElementById("opArea").innerHTML = msg;

  var hobby = prompt("Enter your favorite hobby");

  if (!hobby) {
    document.getElementById("opArea").innerHTML +=
      "<br>Looks like your hobby is a mystery. Try again!";
    return;
  }

  var msg2 = `Your favorite hobby is ${hobby}`;
  document.getElementById("opArea").innerHTML += "<br>" + msg2;
}