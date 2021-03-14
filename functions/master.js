const cards = document.querySelector("#cards");

const initialize = () => {
  fetch("data.json")
    .then((response) => response.json())
    .then((set) => {
      console.log(set);
      for (const data of set) {
        newCard(data);
      }
    });
};

function newCard(data) {
  const card = document.createElement("div");
  card.classList.add("card");
  cards.appendChild(card);

  const img = document.createElement("img");
  img.src = data.img;
  card.appendChild(img);

  const heading = document.createElement("h1");
  heading.innerHTML = data.title;
  card.appendChild(heading);
}

initialize();
