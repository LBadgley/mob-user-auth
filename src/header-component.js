const headerContainer = document.getElementById('header-container');

const dom = makeHeader();
headerContainer.appendChild(dom);

export function makeHeader() {
    const html = /*html*/ `
        <div class="profile">
            <h1>Books</h1>
            <span id="user-name">Frick Goodnuff</span>
            <button>Sign out</button>
        </div>
    `;
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}
