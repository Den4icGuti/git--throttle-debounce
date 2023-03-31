const products = [
  { name: "Hoco", type: "charge", model: "X66" },
  { name: "Jelico", type: "power-bank", model: "QC34" },
  { name: "Cyclon", type: "auto-audio", model: "BT-1084" },
  { name: "Hoco", type: "auto-charge", model: "Z3" },
  { name: "Hopestar", type: "audio", model: "H36" },
  { name: "Lito-Cala", type: "charge for 18650", model: "Li-200" },
];

const refs = {
  input: document.querySelector("#filter"),
  listProducts: document.querySelector(".js-list"),
};

console.log(refs);

function onCreateProductList(product) {
  return product
    .map(
      ({ name, type, model }) => `<li>
      <h2>${name}</h2>
      <span>Type: ${type}</span>
      <span>Model: ${model}</span>
    </li>
`
    )
    .join("");
}

const productsList = onCreateProductList(products);

refs.listProducts.insertAdjacentHTML("afterbegin", productsList);

refs.input.addEventListener("input", _.debounce(onFilterChange, 300));

function onFilterChange(e) {
  const filter = e.target.value.toLowerCase();

  const filteredItems = products.filter((product) =>
    product.name.toLowerCase().includes(filter)
  );
  const filteredResult = onCreateProductList(filteredItems);
  populationList(filteredResult);
}

function populationList(markup) {
  refs.listProducts.innerHTML = markup;
}
