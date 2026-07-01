var btn = document.getElementById("submit");
btn.addEventListener("click", handleClick);

function handleClick() {

    var image = document.getElementById("image");
    var title = document.getElementById("title");
    var rating = document.getElementById("rating");

    var movieCards = document.getElementById("movieCards");

    movieCards.innerHTML += `
        <div class="card">
            <img src="${image.value}" alt="">
            <p>Movie : ${title.value}</p>
            <h3>Rating : ${rating.value}</h3>
        </div>
    `;

    // Clear the input fields
    image.value = "";
    title.value = "";
    rating.value = "";
}