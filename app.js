// Store and change data in cookies
// Beware: don't want to overwrite and reseed data, if no cookie

// Find and make CDN for images
// Fit images and text in box


const data = [
    {
    name: "Luger1",
    img: "https://static.wikia.nocookie.net/totally-accurate-battle-simulator/images/8/83/Luger.png/revision/latest?cb=20210516232637",
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
}]


// Get the top level conatiner
const itemHolder = document.querySelector(".itemHolder");

// Loop through item list
for (let item of data) {
    // Create Div
    let div = document.createElement('div');

    // Add class of item and id of item title
    div.classList.add('item')
    div.setAttribute("id", `${item.name}`)

    // Takes items with status completed and adds class completed
    if (item.status) {
        div.classList.add('completed')
    }

    div.innerHTML += `<img src="${item.img}" alt="" ><p>${item.name}</p>`

    // Append the newly created div to item holder
    itemHolder.appendChild(div)
}

// Get the items
const items = document.querySelectorAll(".item");

const buttonPressed = e => {
    // This changes the cosmetics but not the data
  let idToChange = document.querySelector(`#${e.target.id}`);
  idToChange.classList.toggle('completed')

}

for (let itemClicked of items) {

  itemClicked.addEventListener("click", buttonPressed);
}
