fetch("http://localhost:3000/pups")
  .then((res) => res.json())
  .then((dogs) => addPupsToDogBar(dogs));

function addPupsToDogBar(dogs) {
  const dogBarDiv = document.querySelector("#dog-bar");
  const dogInfoDiv = document.querySelector("#dog-info");

  dogs.forEach((dog) => {
    const spanTag = document.createElement("span");
    const dogButton = document.querySelector("#dog-button");
    spanTag.innerHTML = `${dog.name}`;

    spanTag.addEventListener("click", () => {
      const buttonTag = document.createElement("button");

      buttonTag.textContent = `
      ${dog.isGoodDog ? "Good Dog!" : "Bad Dog!"}
      `;

      dogInfoDiv.innerHTML = `
        <img src="${dog.image}" />
        <h2>${dog.name}</h2>
        `;

      dogInfoDiv.append(buttonTag);
    });

    dogBarDiv.append(spanTag);
  });
}
