document.addEventListener("DOMContentLoaded", function () {
  const dataLink =
    "https://raw.githubusercontent.com/metapercept/CodeExcercise/master/Excercise-1/data/class.json";
  fetch(dataLink).then((res) => {
    res.json().then((data) => {
      console.log(data);
      renderCards(data);
    });
  });
  function renderCards(data) {
    const cardWrapper = document.querySelector(".card__wrapper");
    data.forEach((item) => {
      console.log(item);
      const card = document.createElement("div");
      card.classList.add("card");

      const img = document.createElement("img");
      img.src = "./images/girl-wall.png";

      const cardDetails = document.createElement("div");
      cardDetails.classList.add("card__details");

      const title = document.createElement("h3");
      title.textContent = item.Name;

      const description = document.createElement("p");
      description.textContent = item.ShortDesc;

      const viewBtn = document.createElement("div");
      viewBtn.classList.add("btn");
      viewBtn.textContent = "view";

      cardDetails.appendChild(title);
      cardDetails.appendChild(description);
      cardDetails.appendChild(viewBtn);

      card.appendChild(img);
      card.appendChild(cardDetails);
      cardWrapper.appendChild(card);
    });
  }
});
