import { cardComponent } from "../components/cardComponents.js";

let renderArea = document.querySelector("#card-area");
const BASE_URL = "http://127.0.0.1:5500/data/products.json";

fetch(BASE_URL)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    data.result.forEach((product) => {
      renderArea.innerHTML += cardComponent(product);
    });
  });
