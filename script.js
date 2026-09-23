// MOBILE MENU

function toggleMenu() {
  const menu = document.getElementById("mobileMenu");
  menu.classList.toggle("active");
}


// SEARCH PRODUCTS

function searchProducts() {

  const search =
    document
      .getElementById("searchInput")
      .value
      .toLowerCase()
      .trim();

  const products =
    document.querySelectorAll(".product-card");

  let found = 0;

  products.forEach(product => {

    const name =
      product
        .querySelector("h3")
        .textContent
        .toLowerCase();

    const category =
      product
        .querySelector(".category")
        .textContent
        .toLowerCase();

    if (
      name.includes(search) ||
      category.includes(search)
    ) {

      product.style.display = "block";
      found++;

    } else {

      product.style.display = "none";

    }

  });

  document.getElementById("noProducts").style.display =
    found === 0 ? "block" : "none";
}


// CATEGORY FILTER

function filterProducts(category) {

  const products =
    document.querySelectorAll(".product-card");

  let found = 0;

  products.forEach(product => {

    const productCategory =
      product.dataset.category;

    if (
      category === "all" ||
      productCategory === category
    ) {

      product.style.display = "block";
      found++;

    } else {

      product.style.display = "none";

    }

  });

  document.getElementById("noProducts").style.display =
    found === 0 ? "block" : "none";

  // Clear search box
  document.getElementById("searchInput").value = "";

  // Scroll to products
  document
    .getElementById("products")
    .scrollIntoView({
      behavior: "smooth"
    });
}


// BUY BUTTON DEMO

document.querySelectorAll(".buy-btn").forEach(button => {

  button.addEventListener("click", function(event) {

    event.preventDefault();

    alert(
      "Product link will be added here.\n\n" +
      "You can add your Amazon affiliate link to this button."
    );

  });

});
