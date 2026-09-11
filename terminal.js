const output = document.getElementById("output");
const input = document.getElementById("input");

const cvData = {
    "personal_info": {
        "name": "Lenon Calsavara Silva",
        "role": "Senior Full Stack Engineer | Technical Lead | DevSecOps",
        "location": "Maringá, Paraná, Brazil",
        "email": "lenoncsilva@gmail.com",
        "phone": "+55 44 9 9985-2746",
        "linkedin": "linkedin.com/in/lenon-calsavara-silva-b04905a0",
        "website": "lenoncalsavara.com"
    },
    "sections": [
        {
            "title": "Summary",
            "content": "Senior Full Stack and DevSecOps Engineer with 10+ years of experience in software development, application architecture, technical leadership, and infrastructure automation. Specialized in PHP/Laravel and JavaScript ecosystems with React, Next.js, and Node.js. Recent work includes building SAST/DAST security pipelines and developing complex SaaS platforms that use Generative AI for document automation in regulated pharmaceutical and clinical research workflows."
        },
        {
            "title": "Skills",
            "items": [
                "Languages: PHP, JavaScript, TypeScript",
                "Backend: Laravel, Node.js, REST APIs, microservices, asynchronous processing",
                "Frontend: React, Next.js, Vue.js, Storybook, TanStack Query",
                "AppSec: SAST, DAST, Nuclei, OpenGrep, Horusec, vulnerability triage",
                "DevOps and IaC: Ansible, Docker, CI/CD, GitHub, GitLab, Bitbucket, Gitea, Azure DevOps",
                "Cloud and data: AWS, Azure, PostgreSQL, MySQL, SQL Server, Redis, MongoDB"
            ]
        },
        {
            "title": "Experience",
            "items": [
                {
                    "position": "Senior DevSecOps Engineer",
                    "company": "BSD Trust - FreeBSD Brasil",
                    "period": "July 2026 – Present",
                    "location": "Maringá, Paraná, Brazil",
                    "highlights": [
                        "Develop and enhance an application security platform that automates SAST and DAST using Nuclei, OpenGrep, Horusec, and other specialized scanners.",
                        "Design and maintain security pipelines for Gitea, GitHub, GitLab, Azure DevOps, and Bitbucket.",
                        "Triage and qualify security findings, assess risk, and refine SAST rules to reduce false positives and improve vulnerability relevance.",
                        "Automate infrastructure provisioning and configuration through Infrastructure as Code using Ansible and Docker."
                    ]
                },
                {
                    "position": "Full Stack Engineer (Contract)",
                    "company": "Logika Solutions",
                    "period": "December 2025 – Present",
                    "location": "Maringá, Paraná, Brazil (Remote)",
                    "highlights": [
                        "Designed a Generative AI semantic analysis engine to compare extensive pharmaceutical documents, reducing manual review time in regulatory compliance workflows.",
                        "Built asynchronous batch processing with Laravel Jobs/Queues, supporting thousands of pages per hour without performance degradation.",
                        "Created high-performance interfaces with React, Hooks, Styled Components, and TanStack Query.",
                        "Implemented multi-tenant authentication with Auth0 and granular RBAC and integrated Azure Blob Storage."
                    ]
                },
                {
                    "position": "Technical Lead",
                    "company": "Smart in Tech",
                    "period": "October 2023 – December 2025",
                    "location": "Campinas, São Paulo, Brazil",
                    "highlights": [
                        "Re-architected a legacy CRM marketplace, optimizing its data architecture and reducing request response times by 30%.",
                        "Implemented microservices and dynamic queues, enabling the platform to process three times the previous data volume.",
                        "Mitigated DDoS attacks and critical vulnerabilities, contributing to 99.9% availability.",
                        "Standardized environments with Docker and automated CI/CD pipelines, reducing deployments from minutes to seconds."
                    ]
                },
                {
                    "position": "Systems Analyst / Technical Specialist",
                    "company": "CI&T",
                    "period": "July 2021 – October 2023",
                    "location": "Campinas, São Paulo, Brazil",
                    "highlights": [
                        "Led feature development and technical reviews for a major US pharmaceutical company's multilingual website using Drupal 7/9 and React.",
                        "Architected solutions with Node.js, Serverless Framework, and Next.js.",
                        "Automated marketing data flows by integrating Acquia CMS with Salesforce and optimized publishing through Jenkins CI/CD."
                    ]
                },
                {
                    "position": "Systems Developer",
                    "company": "Sub100 Sistemas",
                    "period": "September 2020 – July 2021",
                    "location": "Maringá, Paraná, Brazil",
                    "highlights": [
                        "Consolidated multiple instances of a legacy land-development system into a single PHP architecture, reducing Amazon EC2 costs.",
                        "Migrated documents from EC2 to Amazon S3 and developed a real estate portal with Laravel, JWT, and Vue.js/Vuex."
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
                        "Developed WordPress websites and landing pages for clients in the construction and healthcare sectors."
                    ]
                },
                {
                    "position": "Web Developer",
                    "company": "CodeRun - FullStack Developers",
                    "period": "February 2016 – January 2018",
                    "location": "Maringá, Paraná, Brazil",
                    "highlights": [
                        "Developed backend and frontend applications with Laravel, jQuery, and Bootstrap."
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
                    "period": "June 2022 – January 2025"
                }
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
- [GitHub]: https://github.com/LenonCalsavara
- [Website]: https://lenoncalsavara.com`

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
        await writeText(output, `${cvData.personal_info.role}\n`, 1);
        await writeText(output, `Location: ${cvData.personal_info.location}\n`, 1);
        await writeText(output, `Email: ${cvData.personal_info.email}\n`, 1);
        await writeText(output, `LinkedIn: ${cvData.personal_info.linkedin}\n`, 1);
        await writeText(output, `Website: ${cvData.personal_info.website}\n\n`, 1);

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
