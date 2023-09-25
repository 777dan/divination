let poems = [
    [
        "In a tent of colors, dark and deep",
        "A fortune teller's secrets keep",
        "With a deck of cards and a knowing eye",
        "She unfolds destinies, reaching for the sky"
    ],
    [
        "With crystal ball and stars above",
        "She speaks of destiny, dreams, and love",
        "In her words, the future's spun",
        "A mystic dance beneath the sun"
    ],
    [
        "Gazing into the great unknown",
        "A fortune teller on her throne",
        "She reads the signs, her wisdom clear",
        "Guiding souls through hope and fear"
    ]
];

let poets = {
    "Evelyn Nightshade": poems[0],
    "Lucius Starweaver": poems[1],
    "Seraphina Moonshadow": poems[2]
}

let poem = "";
function poet1() {
    poem = poets["Evelyn Nightshade"];
    divination();
}
function poet2() {
    poem = poets["Lucius Starweaver"];
    divination();
}
function poet3() {
    poem = poets["Seraphina Moonshadow"];
    divination();
}

function divination() {
    while (true) {
        let question = prompt("Ask a fortune teller a question");
        let randomPhrase = Math.floor(Math.random() * poem.length);
        let answer = poem[randomPhrase];
        alert(answer);
        let next = prompt("Any more divining?");
        if (next == "no") {
            alert("Good bye!");
            break;
        }
    }
}