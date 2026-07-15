let card = document.getElementById("card");

let url = 'https://dummyjson.com/recipes';

let fetchData = async (value = "") => {
    let response = await fetch(`https://dummyjson.com/recipes/search?q=${value}`);
    let data = await response.json();
    let arr = data.recipes;
    card.innerHTML = ""
    console.log(arr);
    arr.forEach((element, i) => {
        card.innerHTML += `
        <div id="d-${i}">
            <img src="${element.image}">
            <h3>${element.name}</h3>
            <p>Time: ${element.prepTimeMinutes} minutes</p>
            <button onclick="handleDelete(${i})">Delete</button>
        </div>
        `;
    });
}
fetchData();

function handleDelete(divId) {
    alert(`trrigered $(divId)`);
    let div = document.getElementById(`d-${divId}`);
    div.remove()
}

function searchRecipe() {
    let inp = document.getElementById("inp");
    fetchData(inp.value)
    inp.value=""
}