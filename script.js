const teams = [
  {
    id: "csk",
    name: "CSK",
    fullName: "Chennai Super Kings",
    logo: "🦁",
    trophies: 5,
    years: ["2010", "2011", "2018", "2021", "2023"],
    players: ["Ruturaj Gaikwad", "MS Dhoni", "Ravindra Jadeja", "Shivam Dube", "Matheesha Pathirana"]
  },
  {
    id: "mi",
    name: "MI",
    fullName: "Mumbai Indians",
    logo: "🔵",
    trophies: 5,
    years: ["2013", "2015", "2017", "2019", "2020"],
    players: ["Rohit Sharma", "Hardik Pandya", "Suryakumar Yadav", "Jasprit Bumrah", "Tilak Varma"]
  },
  {
    id: "kkr",
    name: "KKR",
    fullName: "Kolkata Knight Riders",
    logo: "🟣",
    trophies: 3,
    years: ["2012", "2014", "2024"],
    players: ["Shreyas Iyer", "Rinku Singh", "Sunil Narine", "Andre Russell", "Varun Chakravarthy"]
  },
  {
    id: "rcb",
    name: "RCB",
    fullName: "Royal Challengers Bengaluru",
    logo: "🔴",
    trophies: 1,
    years: ["2025"],
    players: ["Virat Kohli", "Rajat Patidar", "Phil Salt", "Josh Hazlewood", "Krunal Pandya"]
  },
  {
    id: "srh",
    name: "SRH",
    fullName: "Sunrisers Hyderabad",
    logo: "🟠",
    trophies: 1,
    years: ["2016"],
    players: ["Pat Cummins", "Heinrich Klaasen", "Travis Head", "Abhishek Sharma", "Nitish Kumar Reddy"]
  },
  {
    id: "rr",
    name: "RR",
    fullName: "Rajasthan Royals",
    logo: "💗",
    trophies: 1,
    years: ["2008"],
    players: ["Sanju Samson", "Yashasvi Jaiswal", "Riyan Parag", "Dhruv Jurel", "Shimron Hetmyer"]
  },
  {
    id: "gt",
    name: "GT",
    fullName: "Gujarat Titans",
    logo: "🩵",
    trophies: 1,
    years: ["2022"],
    players: ["Shubman Gill", "Rashid Khan", "Sai Sudharsan", "Mohammed Siraj", "Jos Buttler"]
  },
  {
    id: "lsg",
    name: "LSG",
    fullName: "Lucknow Super Giants",
    logo: "🩵",
    trophies: 0,
    years: [],
    players: ["Rishabh Pant", "Nicholas Pooran", "Ayush Badoni", "Mayank Yadav", "Ravi Bishnoi"]
  },
  {
    id: "dc",
    name: "DC",
    fullName: "Delhi Capitals",
    logo: "🔵",
    trophies: 0,
    years: [],
    players: ["KL Rahul", "Axar Patel", "Kuldeep Yadav", "Abishek Porel", "Mitchell Starc"]
  },
  {
    id: "pbks",
    name: "PBKS",
    fullName: "Punjab Kings",
    logo: "🔴",
    trophies: 0,
    years: [],
    players: ["Shreyas Iyer", "Arshdeep Singh", "Yuzvendra Chahal", "Shashank Singh", "Prabhsimran Singh"]
  }
];

const teamContainer = document.getElementById("teamContainer");
const details = document.getElementById("details");

teams.forEach((team, index) => {
  const card = document.createElement("div");
  card.className = "team-card";
  card.innerHTML = `
    <div class="card-logo">${team.logo}</div>
    <h3>${team.name}</h3>
    <p>${team.fullName}</p>
  `;
  card.addEventListener("click", () => showTeam(index));
  teamContainer.appendChild(card);
});

function showTeam(index) {
  const team = teams[index];

  document.getElementById("teamLogo").textContent = team.logo;
  document.getElementById("teamName").textContent = team.name;
  document.getElementById("teamFullName").textContent = team.fullName;

  document.getElementById("trophyText").textContent =
    team.trophies === 0
      ? "This franchise has not won the IPL title yet."
      : `${team.fullName} has won the IPL title ${team.trophies} time${team.trophies > 1 ? "s" : ""}.`;

  const trophyYears = document.getElementById("trophyYears");
  trophyYears.innerHTML = team.years.length
    ? team.years.map(year => `<span class="year">${year}</span>`).join("")
    : "<span>No IPL title year</span>";

  document.getElementById("playerList").innerHTML =
    team.players.map(player => `<li>${player}</li>`).join("");

  details.classList.remove("hidden");
  details.scrollIntoView({ behavior: "smooth" });
}

document.getElementById("closeBtn").addEventListener("click", () => {
  details.classList.add("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
});
