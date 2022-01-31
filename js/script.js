const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

// Oppgave 1
const cat = {
        complain: function() {
            return "Meow!";
        }
    };
    console.log(cat.complain());

    

// Oppgave 2
const heading = document.querySelector("h3");
heading.innerHTML = "Updated heading";

// Oppgave 3
heading.style.fontSize = "2em";

// Oppgave 4
heading.classList = "subheading";

// Oppgave 5
const paragraphs = document.querySelectorAll("p");
for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.color = "blue";
};

// Oppgave 6
const resultsContainer = document.querySelector("div.results");
resultsContainer.innerHTML = "<p>New paragraph</p>";
resultsContainer.style.backgroundColor = "yellow";

// Oppgave 7

function listcats(list) {
    let string = "";
    for (let cat of list) {
        string += console.log(`${cat.name} ${cat.age}`);
    }
    return string;
};
listcats(cats);

// Oppgave 8
function createCats(cats) {
    let string2 = "";
    for (const create of cats) {
        string2 += `<div><h5>${create.name}</h5></div>`;
        if (create.age) string2 += `<div><p>${create.age}</p></div>`;
        else string2 += "Age unknown";
    }
    return string2;
};
const output = document.querySelector("div.cat-container");
output.innerHTML = createCats(cats);