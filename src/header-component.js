import { auth } from './firebase.js';

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

export function makeProfile(user) {
    const html = /*html*/ `
        <div class="profile">
            <img src="${user.photoURL}">
            <span>${user.displayName}</span>
            <button>Sign out</button>
        </div>
    `;

    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

const headerContainer = document.getElementById('header-container');

function loadHeader() {
    const dom = makeHeader();
    headerContainer.appendChild(dom);

    auth.onAuthStateChanged(user => {
        if(user) {
            // const userNameDisplay = document.getElementById('user-name');
            // userNameDisplay.textContent = user.displayName;
            // const profileDisplay = document.getElementById('user-profile');
            // profileDisplay.src = user.photoURL;
        }
        else {
            // no user
        }
    });
}