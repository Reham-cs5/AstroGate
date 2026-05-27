const enterButton = document.getElementById("enter-button");

if (enterButton) {
    setTimeout(() => {
        enterButton.style.display = "inline-block";
    }, 2000);

    enterButton.addEventListener("click", () => {
        transitionTo("home.html");
    });
}

function transitionTo(page) {
    document.body.classList.add("fade-out");

    setTimeout(() => {
        window.location.href = page;
    }, 700);
}

function goToPlanet(planetName) {
    localStorage.setItem("selectedPlanet", planetName);
    transitionTo("details.html");
}

const planets = {
    Mercury: {
        image: "img/nasa-N3BQHYOVq5E-unsplash-removebg-preview.png",
        description: "Mercury is a nearby destination to Earth, offering travelers a fast and intense journey close to the Sun.",
        duration: "4 Days",
        price: "$7,000"
    },

    Venus: {
        image: "img/Did_you_know__A_day_on_venus_is_longer_than_its_year___-removebg-preview.png",
        description: "Venus is a nearby but mysterious destination, perfect for travelers who want a dramatic and unforgettable space view.",
        duration: "5 Days",
        price: "$8,500"
    },

    Mars: {
        image: "img/There_s_no_other_planet_in_the_Solar_System_that_is_redder_than_Mars__the_red_planet__-removebg-preview.png",
        description: "Mars is a classic exploration trip from Earth, offering red landscapes, space camping, and planet exploration.",
        duration: "7 Days",
        price: "$12,000"
    },

    Jupiter: {
        image: "img/Planets-removebg-preview.png",
        description: "Jupiter is a far and massive destination. This journey gives travelers a breathtaking view of storms, moons, and deep space.",
        duration: "14 Days",
        price: "$24,000"
    },

    Saturn: {
        image: "img/Saturne.jpg",
        description: "Saturn is farther than Jupiter and famous for its rings, making it one of the most beautiful premium space destinations.",
        duration: "17 Days",
        price: "$30,000"
    },

    Uranus: {
        image: "img/Uranus.png",
        description: "Uranus is a distant and rare destination for travelers who want a quiet, cold, and mysterious cosmic experience.",
        duration: "24 Days",
        price: "$42,000"
    },

    Neptune: {
        image: "img/Neptune.png",
        description: "Neptune is the farthest planet journey offered by AstroGate, designed for travelers seeking the edge of the Solar System.",
        duration: "30 Days",
        price: "$55,000"
    }
};

const selectedPlanet = localStorage.getItem("selectedPlanet");

if (selectedPlanet && document.getElementById("planet-name")) {
    document.getElementById("planet-name").textContent = selectedPlanet;
    document.getElementById("planet-img").src = planets[selectedPlanet].image;
    document.getElementById("planet-description").textContent = planets[selectedPlanet].description;
    document.getElementById("planet-duration").textContent = planets[selectedPlanet].duration;
    document.getElementById("planet-price").textContent = planets[selectedPlanet].price;
}

const form = document.getElementById("bookingForm");

if (form) {
    form.addEventListener("submit", function(e) {
        e.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;

        if (name === "" || email === "" || phone === "") {
            alert("Please fill all fields");
        } else {
            alert("Booking Successful 🚀");
        }
    });
}