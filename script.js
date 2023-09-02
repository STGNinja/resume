// JavaScript for adding interactivity
const experienceList = document.getElementById("experience-list");
const leadershipList = document.getElementById("leadership-list");
const themeToggle = document.getElementById("theme-toggle");
let darkTheme = localStorage.getItem("darkTheme") === "true";

// Function to toggle the theme
function toggleTheme() {
    darkTheme = !darkTheme;
    document.body.classList.toggle("dark", darkTheme);
    localStorage.setItem("darkTheme", darkTheme.toString());
}

// Add experiences to the list
const experiences = ["Student Council 7th Grade", "Academic Achievement x3"];
experiences.forEach(experience => {
    const li = document.createElement("li");
    li.textContent = experience;
    experienceList.appendChild(li);
});

// Add leadership positions to the list
const leadershipPositions = ["5 hrs community service", "Good Sportsmanship award"];
leadershipPositions.forEach(position => {
    const li = document.createElement("li");
    li.textContent = position;
    leadershipList.appendChild(li);
});

// Set the initial theme based on the user's preference
