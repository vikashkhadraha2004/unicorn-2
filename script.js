// JavaScript for E-Learning Platform

document.getElementById('explore-button').addEventListener('click', () => {
    document.getElementById('courses').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Thank you for reaching out, ' + name + '! We will get back to you soon.');
        document.getElementById('contact-form').reset();
    } else {
        alert('Please fill out all fields before submitting.');
    }
});
const courses = [
    "HTML & CSS Basics",
    "JavaScript for Beginners",
    "Python Programming",
    "Data Science",
    "Advanced JavaScript",
    "Machine Learning",
    "Data Structures & Algorithms"
];

function showSuggestions() {
    const input = document.getElementById("search-input").value.toLowerCase();
    const suggestionsBox = document.getElementById("suggestions");

    // Clear previous suggestions
    suggestionsBox.innerHTML = "";

    if (input) {
        const filteredCourses = courses.filter(course =>
            course.toLowerCase().includes(input)
        );

        if (filteredCourses.length) {
            filteredCourses.forEach(course => {
                const suggestionItem = document.createElement("div");
                suggestionItem.textContent = course;
                suggestionItem.onclick = () => selectCourse(course);
                suggestionsBox.appendChild(suggestionItem);
            });
        } else {
            const noResult = document.createElement("div");
            noResult.textContent = "No matching courses found";
            noResult.classList.add("no-result");
            suggestionsBox.appendChild(noResult);
        }

        suggestionsBox.style.display = "block";
    } else {
        suggestionsBox.style.display = "none";
    }
}

function selectCourse(course) {
    document.getElementById("search-input").value = course;
    document.getElementById("suggestions").style.display = "none";
}

// Hide suggestions when clicking outside the search bar
document.addEventListener("click", (event) => {
    if (!event.target.closest(".search-container")) {
        document.getElementById("suggestions").style.display = "none";
    }
});
