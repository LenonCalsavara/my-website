const output = document.getElementById("output");
const input = document.getElementById("input");

const cvData = {
    "personal_info": {
        "name": "Lenon Calsavara Silva",
        "location": "Maringá, Paraná, Brazil",
        "email": "lenoncsilva@gmail.com",
        "phone": "+55 44 9 9985-2746",
        "linkedin": "linkedin.com/in/lenon-calsavara-silva-b04905a0"
    },
    "sections": [
        {
            "title": "Summary",
            "content": "Results-driven Full Stack Engineer and Technical Lead with nearly 10 years of experience architecting, developing, and scaling robust software applications. Deep expertise in PHP (Laravel) and modern JavaScript ecosystems (React, Next.js), backed by strong capabilities in cloud infrastructure (Docker, Serverless, Azure) and CI/CD pipelines. Recently focused on engineering complex SaaS platforms utilizing Generative AI for intelligent document automation in the highly regulated pharmaceutical sector. Proven track record of leading cross-functional teams, modernizing legacy systems, and leveraging AI-augmented methodologies to accelerate the delivery of secure, high-performance software solutions."
        },
        {
            "title": "Skills",
            "items": [
                "Languages: PHP, JavaScript",
                "Frameworks: Laravel, React, Next.js, Serverless",
                "Databases: Microsoft SQL Server, MySQL, PostgreSQL, Redis, MongoDB"
            ]
        },
        {
            "title": "Experience",
            "items": [
                {
                    "position": "Full Stack Engineer (Contract)",
                    "company": "Logika Solutions",
                    "period": "December 2025 – Present",
                    "location": "Maringá, Paraná, Brazil (Remote)",
                    "highlights": [
                        "Developed a complex platform for the pharmaceutical and clinical research sector, focusing on intelligent document automation and compliance workflow optimization using generative AI.",
                        "Architected AI-driven features for semantic analysis, data extraction, and intelligent version comparison of extensive documents.",
                        "Built scalable backend RESTful APIs with Laravel, heavily utilizing asynchronous processing and Queues/Jobs for batch document processing.",
                        "Created dynamic, high-performance frontend interfaces using React, Hooks, Styled Components, and Tanstack Query.",
                        "Managed infrastructure using Docker for environment standardization and integrated cloud storage with Azure Blob Storage.",
                        "Implemented secure SaaS authentication via Auth0 and Role-Based Access Control (RBAC).",
                        "Leveraged AI-augmented development methodologies to accelerate system architecture, code refactoring, and unit testing workflows."
                    ]
                },
                {
                    "position": "Technical Lead",
                    "company": "Smart in Tech",
                    "period": "October 2023 – December 2025",
                    "location": "Campinas, São Paulo, Brazil",
                    "highlights": [
                        "Led a development team, designed solutions, conducted code reviews, automated deployments, refactored legacy PHP code. Developed new services in Laravel, assisted in database restructuring, configured CloudFlare for applications, and set up/configured servers (Bare Metal)."
                    ]
                },
                {
                    "position": "Systems Analyst / Technical Specialist",
                    "company": "CIT",
                    "period": "July 2021 – October 2023",
                    "location": "Campinas, São Paulo, Brazil",
                    "highlights": [
                        "Developed new features, reviewed code, mentored, and worked on solutions for a major US pharmaceutical client using Drupal 7, 9, and React.",
                        "Integrated Salesforce, worked with Jenkins on Acquia, and used Serverless Framework, Next.js, React, and StoryBook."
                    ]
                },
                {
                    "position": "Systems Developer",
                    "company": "Sub100 Sistemas",
                    "period": "September 2020 – July 2021",
                    "location": "Maringá, Paraná, Brazil",
                    "highlights": [
                        "Developed and maintained a legacy subdivision system in pure PHP, reducing project costs by migrating documents to Amazon S3.",
                        "Participated in the development of a new real estate portal using Laravel, microservices, JWT, and VueJS with Vuex on the frontend."
                    ]
                },
                {
                    "position": "Full Stack Developer",
                    "company": "Today.ag",
                    "period": "September 2019 – September 2020",
                    "location": "Maringá, Paraná, Brazil",
                    "highlights": [
                        "Developed internal systems and marketing platforms for major clients like Mercedes Benz and Carrefour using OctoberCMS, based on Laravel.",
                        "Built landing page creators, raffle systems, and marketing emails (using MJML) for various campaigns."
                    ]
                },
                {
                    "position": "Full Stack Developer",
                    "company": "LEN | Comunicação e Branding",
                    "period": "January 2018 – September 2019",
                    "location": "Maringá, Paraná, Brazil",
                    "highlights": [
                        "Developed institutional websites and landing pages using Wordpress for clients in the construction and healthcare sectors."
                    ]
                },
                {
                    "position": "Web Developer",
                    "company": "CodeRun - FullStack Developers",
                    "period": "February 2016 – January 2018",
                    "location": "Maringá, Paraná, Brazil",
                    "highlights": [
                        "Gained experience with Laravel in backend and frontend development, using JQuery and Bootstrap."
                    ]
                }
            ]
        },
        {
            "title": "Education",
            "items": [
                {
                    "degree": "Systems Analysis and Development",
                    "institution": "Centro Universitário UniFatecie",
                    "period": "June 2022 – June 2024"
                }
            ]
        },
        {
            "title": "Certifications",
            "items": [
                "Serverless with Node.js: Efficient Cloud Applications",
                "Next.JS: Full Stack with Lambdas",
                "Laravel: Transactions, Service Container, and Authentication"
            ]
        },
        {
            "title": "Languages",
            "items": [
                "English: Upper-Intermediate",
                "Portuguese: Native"
            ]
        }
    ]
};

const wait = (ms = 0) => new Promise(resolve => setTimeout(resolve, ms))


function writeText(target, content, delay = 1)
{

    return new Promise((resolve) => {

        const contentArray = content.split('')


        let current = 0

        while (current < contentArray.length) {
            ;((curr) => {
                setTimeout(() => {
                    target.innerHTML += contentArray[curr]

                    window.scrollTo(0, document.body.scrollHeight)


                    if (curr === contentArray.length - 1) resolve()
                }, delay * curr)
            })(current++)
        }
    })
}

const commands = {
    help: "Available commands: help, contacts, curriculum, clear",
    contacts: () => {
        const content = `Contacts:
- [Email]: lenoncsilva@gmail.com
- [LinkedIn]: https://www.linkedin.com/in/lenon-calsavara-silva-b04905a0
- [GitHub]: https://github.com/LenonCalsavara`

        writeText(output, content, 1);
    },
    curriculum: async () => {
        // Se os dados ainda não foram carregados
        if (Object.keys(cvData).length === 0) {
            await writeText(output, "Loading CV data...\n", 1);
            await loadCVData();
        }

        // Exibe informações pessoais
        await writeText(output, `\n${cvData.personal_info.name}\n`, 1);
        await writeText(output, `Location: ${cvData.personal_info.location}\n`, 1);
        await writeText(output, `Email: ${cvData.personal_info.email}\n`, 1);
        await writeText(output, `LinkedIn: ${cvData.personal_info.linkedin}\n\n`, 1);

        // Percorre todas as seções
        for (const section of cvData.sections) {
            await writeText(output, `=== ${section.title.toUpperCase()} ===\n\n`, 2);

            if (section.content) {
                // Seção com conteúdo direto (como Summary)
                await writeText(output, `${section.content}\n\n`, 1);
            }
            else if (section.items) {
                // Seção com itens
                for (const item of section.items) {
                    if (typeof item === 'string') {
                        // Item simples (como em Skills, Certifications)
                        await writeText(output, `• ${item}\n`, 1);
                    }
                    else if (item.position) {
                        // Item de experiência (tem position, company, etc.)
                        await writeText(output, `\n${item.position}\n`, 1);
                        await writeText(output, `${item.company} | ${item.period}\n`, 1);

                        if (item.location) {
                            await writeText(output, `${item.location}\n`, 1);
                        }

                        // Verifica se existe highlights antes de tentar usá-lo
                        if (item.highlights) {
                            for (const highlight of item.highlights) {
                                await writeText(output, `  ◦ ${highlight}\n`, 1);
                            }
                        }
                    }
                    else if (item.degree) {
                        // Item de educação
                        await writeText(output, `\n${item.degree}\n`, 1);
                        await writeText(output, `${item.institution} | ${item.period}\n\n`, 1);
                    }
                }
                await writeText(output, '\n', 0);
            }
        }
    },
    clear: () => {
        output.innerText = "";
    }
};

document.addEventListener("click", (e) => {
    if (!e.target.closest("a")) {
        input.focus();
    }
});

window.onload = () => {
    input.focus();
};

input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        const command = input.value.trim().toLowerCase();
        output.innerText += `\n> ${command}\n`;
        if (command === '') {

        } else if (commands[command]) {
            if (typeof commands[command] === "function") {
                commands[command]();
            } else {
                output.innerHTML += commands[command] + "\n";
            }
        } else {
            output.innerText += `command not found: ${command}
`;
        }

        input.value = "";
    }
});

document.addEventListener('DOMContentLoaded', async () => {
    const asciiText = document.getElementById('asciiText').innerText;
    await wait(300);
    await writeText(output, asciiText, 1);
    await wait(200);
    await writeText(output, "\nType 'help' for a list of commands.\n", 1);
    await wait(200);
    document.getElementById('prompt').style.display = 'inline-block';
    input.style.display = 'inline-block';
    input.focus();
})