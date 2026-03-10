// Cotton Candy Planet
const cottonCandyAnimation = document.getElementById("cottonCandyPlanet");
const framesCotton = [
    "assets/cottonCandyPlanet1.png","assets/cottonCandyPlanet2.png",
    "assets/cottonCandyPlanet3.png","assets/cottonCandyPlanet4.png",
    "assets/cottonCandyPlanet5.png","assets/cottonCandyPlanet6.png",
    "assets/cottonCandyPlanet7.png","assets/cottonCandyPlanet8.png",
    "assets/cottonCandyPlanet9.png"
];
let iCotton = 0;
setInterval(() => {
    iCotton = (iCotton + 1) % framesCotton.length;
    cottonCandyAnimation.src = framesCotton[iCotton];
}, 500);

// Lollipop Planet
const lollipopAnimation = document.getElementById("lollipopPlanet");
const framesLollipop = [
    "assets/lollipopPlanet1.png","assets/lollipopPlanet2.png",
    "assets/lollipopPlanet3.png","assets/lollipopPlanet4.png",
    "assets/lollipopPlanet5.png","assets/lollipopPlanet6.png",
    "assets/lollipopPlanet7.png","assets/lollipopPlanet8.png",
    "assets/lollipopPlanet9.png","assets/lollipopPlanet10.png"
];
let iLollipop = 0;
setInterval(() => {
    iLollipop = (iLollipop + 1) % framesLollipop.length;
    lollipopAnimation.src = framesLollipop[iLollipop];
}, 500);

// Candy Pack Planet
const candyPackEl = document.getElementById("candyPackPlanet");
const framesPack = ["assets/candyPackPlanet1.png","assets/candyPackPlanet2.png"];
let iPack = 0;
setInterval(() => {
    iPack = iPack === 0 ? 1 : 0;
    candyPackEl.src = framesPack[iPack];
}, 2000);

// Stars 1
const star1El = document.getElementById("star1");
const framesS1 = ["assets/stars1.png","assets/stars2.png"];
let iS1 = 0;
setInterval(() => {
    iS1 = iS1 === 0 ? 1 : 0;
    star1El.src = framesS1[iS1];
}, 500);

// Stars Second
const star2El = document.getElementById("star2");
const framesS2 = ["assets/starsSecond1.png","assets/starsSecond2.png"];
let iS2 = 0;
setInterval(() => {
    iS2 = iS2 === 0 ? 1 : 0;
    star2El.src = framesS2[iS2];
}, 600);

// Stars Third
const star3El = document.getElementById("star3");
const framesS3 = ["assets/starsThird1.png","assets/starsThird2.png"];
let iS3 = 0;
setInterval(() => {
    iS3 = iS3 === 0 ? 1 : 0;
    star3El.src = framesS3[iS3];
}, 700);

// Stars Fourth
const star4El = document.getElementById("star4");
const framesS4 = ["assets/starsFourth1.png","assets/starsFourth2.png"];
let iS4 = 0;
setInterval(() => {
    iS4 = iS4 === 0 ? 1 : 0;
    star4El.src = framesS4[iS4];
}, 400);


// Clicking on a Planet
const planetTraits = {
    cottonCandyPlanet: [
"Her name is Candy Cotton. She is the most energetic and talkative soul in this universe, always floating from one story to another."
],
lollipopPlanet: [
"Rainbow Lolly is always cheerful. She laughs with the stars, yet somehow she is always a little sleepy."
],
candyPackPlanet: [
"They call him Caramel Pack. Though his wrapper rustles like a storm, inside he is gentle and calm, listening to the silence of the universe."
],
};

const allPlanets = ["cottonCandyPlanet", "lollipopPlanet", "candyPackPlanet"];
const allStars    = ["star1", "star2", "star3", "star4"];
let activePlanet  = null;

function openPlanet(id) {
    if (activePlanet === id) { closePlanet(); return; }
    activePlanet = id;
    [...allPlanets, ...allStars].forEach(elId => {
        if (elId !== id) document.getElementById(elId).classList.add("hidden");
    });

    document.getElementById(id).classList.add("planet-focused");

    const tags = planetTraits[id];
    const tagsEl = document.getElementById("planetTags");
    tagsEl.innerHTML = tags.map(t => `<span>${t}</span>`).join("");
    tagsEl.classList.add("visible");
}

function closePlanet() {
    if (!activePlanet) return;

    document.getElementById(activePlanet).classList.remove("planet-focused");
    [...allPlanets, ...allStars].forEach(elId => {
        document.getElementById(elId).classList.remove("hidden");
    });
    document.getElementById("planetTags").classList.remove("visible");
    activePlanet = null;
}

allPlanets.forEach(id => {
    document.getElementById(id).addEventListener("click", () => openPlanet(id));
});

document.addEventListener("click", e => {
    if (activePlanet && !allPlanets.includes(e.target.id)) closePlanet();
});