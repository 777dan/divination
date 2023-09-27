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
        let next = confirm("Any more divining?");
        if (!next) {
            alert("Good bye!");
            break;
        }
    }
}