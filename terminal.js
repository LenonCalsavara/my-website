const output = document.getElementById("output");
const input = document.getElementById("input");

const cvData = {"personal_info":{"name":"Lenon Calsavara Silva","location":"Maringá, Paraná, Brazil","email":"lenoncsilva@gmail.com","phone":"+55 44 9 9985-2746","linkedin":"linkedin.com/in/lenon-calsavara-silva"},"sections":[{"title":"Summary","content":"Highly experienced Technical Lead with a strong background in software development, specializing in PHP, JavaScript, Laravel, React, and Next.js. Proven ability to lead teams, design scalable solutions, and drive technical direction. Extensive experience in e-commerce and marketplace development, integrating complex systems like Salesforce, and implementing robust CI/CD pipelines using tools like Jenkins."},{"title":"Skills","items":["Languages: PHP, JavaScript, Node.js","Frameworks: Laravel, React, Next.js, Serverless","Databases: Microsoft SQL Server, MySQL, PostgreSQL, Redis, MongoDB (SQL & NoSQL)","Cloud & DevOps: AWS (S3), CloudFlare, Jenkins (CI/CD), Bare Metal Server Configuration","Architecture & Practices: Microservices, API Design, Agile Methodologies, Code Review, Solution Design"]},{"title":"Experience","items":[{"position":"Technical Lead","company":"Smart in Tech","period":"October 2023 – Present","location":"Campinas, São Paulo, Brazil","highlights":["Led a development team, providing technical direction and ensuring code quality","Designed and implemented new services using Laravel, refactored legacy PHP code","Automated deployment processes and configured infrastructure components","Gained hands-on experience developing e-commerce marketplace platforms"]},{"position":"Systems Analyst / Technical Specialist","company":"CIT","period":"July 2021 – October 2023","location":"Campinas, São Paulo, Brazil","highlights":["Developed features and provided technical guidance for enterprise solutions","Integrated complex systems including Salesforce","Implemented and managed CI/CD pipelines using Jenkins"]},{"position":"Systems Developer","company":"Sub100 Sistemas","period":"September 2020 – July 2021","location":"Maringá, Paraná, Brazil","highlights":["Developed and maintained a legacy system in pure PHP","Contributed to new platform using Laravel, Microservices, JWT, and VueJS"]},{"position":"Full Stack Developer","company":"Today.ag","period":"September 2019 – September 2020","location":"Maringá, Paraná, Brazil","highlights":["Developed internal systems and marketing platforms","Built marketing tools including landing page creators","Developed e-commerce solutions using WooCommerce"]},{"position":"Full Stack Developer","company":"LEN | Comunicação e Branding","period":"January 2018 – September 2019","location":"Maringá, Paraná, Brazil","highlights":["Developed institutional websites and landing pages","Implemented e-commerce functionalities using WooCommerce"]},{"position":"Web Developer","company":"CodeRun - FullStack Developers","period":"February 2016 – January 2018","location":"Maringá, Paraná, Brazil","highlights":["Gained foundational experience in full-stack development"]}]},{"title":"Education","items":[{"degree":"Systems Analysis and Development","institution":"Centro Universitário UniFatecie","period":"June 2022 – June 2024"}]},{"title":"Certifications","items":["Serverless with Node.js: Efficient Cloud Applications","Next.JS: Full Stack with Lambdas","Laravel: Transactions, Service Container, and Authentication"]},{"title":"Languages","items":["English: Upper-Intermediate","Portuguese: Native"]}]}

const wait = (ms = 0) => new Promise(resolve => setTimeout(resolve, ms))


function writeText(target, content, delay = 5)
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

        writeText(output, content, 5);
    },
    curriculum: async () => {
        // Se os dados ainda não foram carregados
        if (Object.keys(cvData).length === 0) {
            await writeText(output, "Loading CV data...\n", 10);
            await loadCVData();
        }

        // Exibe informações pessoais
        await writeText(output, `\n${cvData.personal_info.name}\n`, 10);
        await writeText(output, `Location: ${cvData.personal_info.location}\n`, 15);
        await writeText(output, `Email: ${cvData.personal_info.email}\n`, 15);
        await writeText(output, `LinkedIn: ${cvData.personal_info.linkedin}\n\n`, 15);

        // Percorre todas as seções
        for (const section of cvData.sections) {
            await writeText(output, `=== ${section.title.toUpperCase()} ===\n\n`, 20);

            if (section.content) {
                // Seção com conteúdo direto (como Summary)
                await writeText(output, `${section.content}\n\n`, 10);
            }
            else if (section.items) {
                // Seção com itens
                for (const item of section.items) {
                    if (typeof item === 'string') {
                        // Item simples (como em Skills, Certifications)
                        await writeText(output, `• ${item}\n`, 15);
                    }
                    else if (item.position) {
                        // Item de experiência (tem position, company, etc.)
                        await writeText(output, `\n${item.position}\n`, 15);
                        await writeText(output, `${item.company} | ${item.period}\n`, 15);

                        if (item.location) {
                            await writeText(output, `${item.location}\n`, 15);
                        }

                        // Verifica se existe highlights antes de tentar usá-lo
                        if (item.highlights) {
                            for (const highlight of item.highlights) {
                                await writeText(output, `  ◦ ${highlight}\n`, 20);
                            }
                        }
                    }
                    else if (item.degree) {
                        // Item de educação
                        await writeText(output, `\n${item.degree}\n`, 15);
                        await writeText(output, `${item.institution} | ${item.period}\n\n`, 15);
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
        const command = input.value.trim();
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
    await wait(1000);
    await writeText(output, asciiText);
    await wait(500);
    await writeText(output, "\nType 'help' for a list of commands.\n");
    await wait(500);
    document.getElementById('prompt').style.display = 'inline-block';
    input.style.display = 'inline-block';
    input.focus();
})
