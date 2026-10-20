// Jose's Taco Truck
// The data is done. The page is not.

const truck = {
  name: "Jose's Taco Truck",
  tagline: "Same recipes, worse parking.",
  phone: "209-555-0147",
  soldOut: false
};

const special = {
  name: "Three birria tacos and a consome",
  price: 11.00,
  isFeatured: true
};

const schedule = [
  { day: "Monday", location: "Behind the laundromat on Pacific" },
  { day: "Tuesday", location: "Weber Ave, by the courthouse" },
  { day: "Wednesday", location: "Behind the laundromat on Pacific" },
  { day: "Thursday", location: "The lot on Hammer Lane" },
  { day: "Friday", location: "Victory Park, until we run out" }
];

const crew = ["Marisol", "Big Kevin", "Darnell"];

const todayIndex = 0;

// Your code goes below here.
console.log(document);
const heading = document.getElementById("truck-name")
console.log(heading);
heading.textContent = "Jose's Taco Truck";

const tagline= document.getElementById("tagline")
console.log(tagline);
tagline.textContent= "Same recipes, worse parking.";

function status(soldOut) {
  const statusElement = document.getElementById("status");

  if (soldOut) {
    statusElement.textContent = "Sold out for today";
    statusElement.classList.add("closed");
  } else {
    statusElement.textContent = "Open now";
    statusElement.classList.remove("closed");
  }
}

status(truck.soldOut);

function formatPrice(price) {
  return "$" + price.toFixed(2);
}

function showSpecial(isFeatured) {
  const specialNameElement = document.getElementById("special-name");
  const specialPriceElement = document.getElementById("special-price");

  specialNameElement.textContent = special.name;
  specialPriceElement.textContent = formatPrice(special.price);

  if (isFeatured) {
    specialNameElement.classList.add("featured");
  } else {
    specialNameElement.classList.remove("featured");
  }
}

showSpecial(special.isFeatured);

const crewList = document.getElementById("crew");
const firstItem = document.createElement("li")

for (let i=0; i< crew.length; i++){
    const item = document.createElement("li");
    item.textContent = crew[i];
    crewList.appendChild(item);
}

const phone = document.getElementById("phone")
console.log(phone);
phone.textContent = "209-555-0147";

function showSchedule() {
  const dayIds = ["monday", "tuesday", "wednesday", "thursday", "friday"];
  const locationIds = [
    "monday-location",
    "tuesday-location",
    "wednesday-location",
    "thursday-location",
    "friday-location"
  ];

  for (let i = 0; i < schedule.length; i++) {
    const dayCell = document.getElementById(dayIds[i]);
    const locationCell = document.getElementById(locationIds[i]);

    dayCell.textContent = schedule[i].day;
    locationCell.textContent = schedule[i].location;

    dayCell.classList.toggle("today", i == todayIndex);
    locationCell.classList.toggle("today", i == todayIndex);
  }
}

showSchedule();