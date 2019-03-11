// const headerContainer = document.getElementById('header-container');

// const dom = makeHeader();

export function makeHeader() {
    const html = /*html*/ `
        <header>
            <h1>Books</h1>
        </header>
    `;

    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

// headerContainer.appendChild(dom);
