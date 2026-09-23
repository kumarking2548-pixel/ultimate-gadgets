

/* MOBILE MENU */

function toggleMenu() {

    const nav = document.getElementById("navMenu");

    nav.classList.toggle("active");

}


/* SEARCH PRODUCTS */

function searchProducts() {

    const input =
        document.getElementById("searchInput").value
        .toLowerCase()
        .trim();

    const products =
        document.querySelectorAll(".product");

    products.forEach(function(product) {

        const productName =
            product.innerText.toLowerCase();

        if (productName.includes(input)) {

            product.style.display = "block";

        } else {

            product.style.display = "none";

        }

    });

}


/* CATEGORY FILTER */

function filterCategory(category) {

    const products =
        document.querySelectorAll(".product");

    products.forEach(function(product) {

        const productCategory =
            product.getAttribute("data-category");

        if (productCategory === category) {

            product.style.display = "block";

        } else {

            product.style.display = "none";

        }

    });

    document
        .getElementById("trending")
        .scrollIntoView({
            behavior: "smooth"
        });

}


/* PRODUCT BUTTON */

function buyProduct(productName) {

    /*
        IMPORTANT:

        Replace the link below with your
        Amazon affiliate / product link.

        Example:

        const productLinks = {
            "Wireless Bluetooth Earbuds":
            "YOUR-AMAZON-AFFILIATE-LINK"
        };
    */

    const productLinks = {

        "Wireless Bluetooth Earbuds":
            "https://www.amazon.in/",

        "Premium Smart Watch":
            "https://www.amazon.in/",

        "20W Fast Charging Power Bank":
            "https://www.amazon.in/",

        "Magnetic Phone Stand":
            "https://www.amazon.in/",

        "Smart LED Light":
            "https://www.amazon.in/",

        "Mini Portable Bluetooth Speaker":
            "https://www.amazon.in/"

    };


    const link = productLinks[productName];


    if (link) {

        window.open(link, "_blank");

    } else {

        alert(
            "Product link is not available yet."
        );

    }

}


/* NEWSLETTER */

function subscribe(event) {

    event.preventDefault();

    const email =
        document.getElementById("email").value;

    if (email) {

        alert(
            "Thanks for subscribing! 🔥\n\n" +
            "We'll keep you updated with new gadget deals."
        );

        document.getElementById("email").value = "";

    }

}


/* CLOSE MOBILE MENU AFTER CLICK */

document.querySelectorAll("nav a").forEach(function(link) {

    link.addEventListener("click", function() {

        document
            .getElementById("navMenu")
            .classList.remove("active");

    });

});


/* PAGE LOAD MESSAGE */

console.log(
    "⚡ Ultimate Gadgets website loaded successfully!"
);
