window.onload = function() {
  //El evento de carga ya esta añadido de manera inicial asi que no es necesario utilizarlo
  const numbers = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ];
  const symbols = [
    "fas fa-heart",
    "fas fa-diamond",
    "fas fa-club",
    "fas fa-spade"
  ];

  const icons = document.querySelectorAll(".icons");
  const numberToShow = document.querySelector(".numberToShow");
  const Nramdon = Math.random();
  icons.forEach(i => {
    i.className += `${symbols[Math.floor(Nramdon * symbols.length)]} fa-4x`;
  });
  numberToShow.textContent = numbers[Math.floor(Nramdon * numbers.length)];
  console.log(icons[0]);
};
