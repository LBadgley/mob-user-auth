import { makeHeader, makeProfile } from '../src/header-component.js';

const test = QUnit.test;

QUnit.module('TESTING OF HEADER CREATION');


test('Creating Header', assert => {
    //arrange
    const expected = /*html*/ `
        <header>
            <h1>Books</h1>
        </header>
    `;

    //act
    const result = makeHeader();

    //assert
    assert.htmlEqual(result, expected);
});


test('make profile', assert => {
    // arrange
    const user = {
        displayName: 'Goodnuff Frick',
        photoURL: '../assets/default-avatar.png'
    };

    const expected = /*html*/ `
        <div class="profile">
            <img src="../assets/default-avatar.png">
            <span>Goodnuff Frick</span>
            <button>Sign out</button>
        </div>
    `;
    // act
    const result = makeProfile(user);

    // assert
    assert.htmlEqual(result, expected);
});

test('make user profile with default avatar', assert => {
    // arrange
    const user = {
        displayName: 'Goodnuff Frick',
        photoURL: null
    };

    const expected = /*html*/ `
        <div class="profile">
            <img src="./assets/default-avatar.png">
            <span>Goodnuff Frick</span>
            <button>Sign out</button>
        </div>
        `;
    // act
    const dom = makeProfile(user);
    // assert
    assert.htmlEqual(dom, expected);
});