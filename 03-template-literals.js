console.log('Template Literals');

let verbo = 'quero';
let verbo2 = 'comer';
let objeto = 'pizza';
let adjetivo = 'boa';

console.log('Eu ' + verbo + ' ' + verbo2 + ' ' + objeto + ' ' + adjetivo + '.');
console.log(`Eu ${verbo} ${verbo2} ${objeto} ${adjetivo}.`);

console.log('');

const article = {
    title: 'Template Literals',
    intro: 'Breve explicação de Template Literals do ES6',
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, " +
            "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, " +
            "quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. " +
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. " +
            "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    tags: ['es6','js','template-literal'],
};

const html = `
    <article>
        <header>
            <h1>${article.title}</h1>
        </header>
        <section>
            <p>${article.intro}</p>
        </section>
        <footer>
            <ul>
                ${article.tags.map(tag => `<li>${tag}</li>`).join('')}
            </ul>
        </footer>
    </article>
`;

document.body.innerHTML = html;

// Tagged Template

function tagged(template, ...values) {
    return template.reduce((accumumulator, part, i) => {
        //accumulator - string acumulada
        //part - string trabalhada no momento
        //i - contador a partir do template
        return `
            ${accumumulator}
            <span style='color: green;'>${values[i - 1]}</span>
            ${part}
        `
    });
}

const taggedString = tagged`Eu ${verbo} ${verbo2} bastante ${objeto} ${adjetivo}.`;

document.body.innerHTML += taggedString;