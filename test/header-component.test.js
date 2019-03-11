const test = QUnit.test;

QUnit.module('TESTING OF HEADER CREATION');

test('Creating Header', assert => {
    //arrange
    const expected = /*html*/ `
        <div class="profile">
            <h1>Books</h1>
            <span id="user-name">Frick Goodnuff</span>
            <button>Sign out</button>
        </div>
    `;

    //act
    const result = /*html*/ `
        <div class="profile">
            <h1>Books</h1>
            <span id="user-name">Frick Goodnuff</span>
            <button>Sign out</button>
        </div>
    `;

    //assert
    assert.equal(result, expected);
});