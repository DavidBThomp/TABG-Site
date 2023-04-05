// Find and make CDN for images?
// Fit images and text in box


// Data to be used if not found already in localStorage
// This will be used to originally write to localStorage when page is first loaded
const data= [
    {
        name: "Luger1",
        img: "./Luger.webp",
        status: true
    },
    {
        name: "Luger2",
        img: "",
        status: false
    },
    {
        name: "Luger3",
        img: "",
        status: false
    }
]

const browserJSON = JSON.stringify(data);

// Sending data if not found
let browserData = localStorage.getItem("data");
if (browserData === null) {
    localStorage.setItem("data", browserJSON);
    // This is redundant because the data is inserted then pulled out, but nessesary?
    // Changing the order might resolves this but this works for now...
    browserData = localStorage.getItem("data");
}

let readData = JSON.parse(browserData);




// Get the top level conatiner
const itemHolder = document.querySelector(".itemHolder");

// Loop through item list
for (let item of readData) {
    // Create Div
    let div = document.createElement('div');

    // Add class of item and id of item title
    div.classList.add('item')
    div.setAttribute("id", `${item.name}`)

    // Takes items with status completed and adds class completed
    if (item.status) {
        div.classList.add('completed')
    }

    div.innerHTML += `<h2>${item.name}</h2><div class="imgHolder"><img src="${item.img}" alt=""></div>`

    // Append the newly created div to item holder
    itemHolder.appendChild(div)
}





// User Click on .item (Boxes)
const items = document.querySelectorAll(".item");

const buttonPressed = e => {
    // This changes the cosmetics but not the data
    let idClicked = e.target.id; // ID is the item name
    let idToChange = document.querySelector(`#${idClicked}`);
    idToChange.classList.toggle('completed')

    // This changes the data
    // Fetch data in case their was update before
    let updatedData = JSON.parse(localStorage.getItem("data"));
    

    let newData = updatedData.map((item) => {
        if (item.name === idClicked){
            return {...item, 'status': !item.status}
        } 

        return item
    })

    let browserNewData = JSON.stringify(newData);

    localStorage.removeItem("data");
    localStorage.setItem("data", browserNewData)
}

for (let itemClicked of items) {
    itemClicked.addEventListener("click", buttonPressed);
}