document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("resume-form");
    var resumeOutput = document.getElementById("resume-output");
    // Handle form submission
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        // Gather form data
        var name = document.getElementById("name").value;
        var title = document.getElementById("title").value;
        var professionalSummary = document.getElementById("summary").value;
        var email = document.getElementById("email").value;
        var phone = document.getElementById("phone").value;
        var location = document.getElementById("location").value;
        // Gather education info dynamically
        var educationItems = [];
        var educationTitles = document.querySelectorAll("[id^='education-title-']");
        var educationDescriptions = document.querySelectorAll("[id^='education-description-']");
        for (var i = 0; i < educationTitles.length; i++) {
            educationItems.push({
                title: educationTitles[i].value,
                description: educationDescriptions[i].value
            });
        }
        // Gather work experience info dynamically
        var experienceItems = [];
        var experienceTitles = document.querySelectorAll("[id^='experience-title-']");
        var experienceDescriptions = document.querySelectorAll("[id^='experience-description-']");
        for (var i = 0; i < experienceTitles.length; i++) {
            experienceItems.push({
                title: experienceTitles[i].value,
                description: experienceDescriptions[i].value
            });
        }
        var skills = document.getElementById("skills").value;
        // Generate the styled resume
        resumeOutput.innerHTML = "\n          <div class=\"resume-container\">\n            <header class=\"header\">\n                <h1>".concat(name, "</h1>\n                <p class=\"subheading\">").concat(title, "</p>\n                <p>").concat(professionalSummary, "</p>\n            </header>\n\n            <div class=\"content\">\n\n                <section class=\"section\">\n                    <h2>Education</h2>\n                    ").concat(educationItems.map(function (item) { return "\n                        <div class=\"education-item\">\n                            <h3>".concat(item.title, "</h3>\n                            <p>").concat(item.description, "</p>\n                        </div>\n                    "); }).join(""), "\n                </section>\n\n                <section class=\"section\">\n                    <h2>Work Experience</h2>\n                    ").concat(experienceItems.map(function (item) { return "\n                        <div class=\"experience-item\">\n                            <h3>".concat(item.title, "</h3>\n                            <p>").concat(item.description, "</p>\n                        </div>\n                    "); }).join(""), "\n                </section>\n\n                <section class=\"section\">\n                    <h2>Skills</h2>\n                    <ul class=\"skills-list\">\n                        ").concat(skills.split(",").map(function (skill) { return "<li>".concat(skill.trim(), "</li>"); }).join(""), "\n                    </ul>\n                </section>\n                <section class=\"section\">\n                    <h2>Contact Info</h2>\n                    <ul>\n                        <li>Phone: ").concat(phone, "</li>\n                        <li>Email: <a href=\"mailto:").concat(email, "\">").concat(email, "</a></li>\n                        <li>Location: ").concat(location, "</li>\n                    </ul>\n                </section>\n            </div>\n          </div>\n        ");
    });
});
