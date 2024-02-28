const Body = document.querySelector("body");
const Color_Text = document.querySelector("#Color_Text");

const input = document.querySelector("form");
console.log(input);

input.addEventListener("submit", function (e) {
  e.preventDefault();
  const Input = document.querySelector("#input").value;
  Body.style.backgroundColor = Input;
  Color_Text.textContent = Input;
});

let Box = document.querySelectorAll(".Box");
console.log(Box);

Box.forEach(function (Button) {
  console.log(Button);
  Button.addEventListener("click", function (e) {
    console.log(e.target.id);
    if (e.target.id == "Red") {
      Body.style.backgroundColor = e.target.id;
      Color_Text.textContent = "Red";
    }
    if (e.target.id == "Green") {
      Body.style.backgroundColor = e.target.id;
      Color_Text.textContent = "Green";
    }
    if (e.target.id == "Blue") {
      Body.style.backgroundColor = e.target.id;
      Color_Text.textContent = "Blue";
    }
  });
});
