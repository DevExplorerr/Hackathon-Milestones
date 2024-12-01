document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("resume-form") as HTMLFormElement;
    const resumeOutput = document.getElementById("resume-output") as HTMLElement;

    // Handle form submission
    form.addEventListener("submit", (event: Event) => {
        event.preventDefault();

        // Gather form data
        const name = (document.getElementById("name") as HTMLInputElement).value;
        const title = (document.getElementById("title") as HTMLInputElement).value;
        const professionalSummary = (document.getElementById("summary") as HTMLTextAreaElement).value;
        const email = (document.getElementById("email") as HTMLInputElement).value;
        const phone = (document.getElementById("phone") as HTMLInputElement).value;
        const location = (document.getElementById("location") as HTMLInputElement).value;

        // Gather education info dynamically
        const educationItems: { title: string, description: string }[] = [];
        const educationTitles = document.querySelectorAll("[id^='education-title-']") as NodeListOf<HTMLInputElement>;
        const educationDescriptions = document.querySelectorAll("[id^='education-description-']") as NodeListOf<HTMLTextAreaElement>;
        for (let i = 0; i < educationTitles.length; i++) {
            educationItems.push({
                title: educationTitles[i].value,
                description: educationDescriptions[i].value
            });
        }

        // Gather work experience info dynamically
        const experienceItems: { title: string, description: string }[] = [];
        const experienceTitles = document.querySelectorAll("[id^='experience-title-']") as NodeListOf<HTMLInputElement>;
        const experienceDescriptions = document.querySelectorAll("[id^='experience-description-']") as NodeListOf<HTMLTextAreaElement>;
        for (let i = 0; i < experienceTitles.length; i++) {
            experienceItems.push({
                title: experienceTitles[i].value,
                description: experienceDescriptions[i].value
            });
        }

        const skills = (document.getElementById("skills") as HTMLInputElement).value;

        // Generate the styled resume
        resumeOutput.innerHTML = `
          <div class="resume-container">
            <header class="header">
                <h1>${name}</h1>
                <p class="subheading">${title}</p>
                <p>${professionalSummary}</p>
            </header>

            <div class="content">

                <section class="section">
                    <h2>Education</h2>
                    ${educationItems.map(item => `
                        <div class="education-item">
                            <h3>${item.title}</h3>
                            <p>${item.description}</p>
                        </div>
                    `).join("")}
                </section>

                <section class="section">
                    <h2>Work Experience</h2>
                    ${experienceItems.map(item => `
                        <div class="experience-item">
                            <h3>${item.title}</h3>
                            <p>${item.description}</p>
                        </div>
                    `).join("")}
                </section>

                <section class="section">
                    <h2>Skills</h2>
                    <ul class="skills-list">
                        ${skills.split(",").map(skill => `<li>${skill.trim()}</li>`).join("")}
                    </ul>
                </section>
                <section class="section">
                    <h2>Contact Info</h2>
                    <ul>
                        <li>Phone: ${phone}</li>
                        <li>Email: <a href="mailto:${email}">${email}</a></li>
                        <li>Location: ${location}</li>
                    </ul>
                </section>
            </div>
          </div>
        `;
    });
});
