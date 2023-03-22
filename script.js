"use strict";
let wrapper = document.querySelector(".wrapper");

let newArray = movies.slice(0, 20);


newArray.forEach(item => {


    let box = document.createElement("div", "card");
    box.setAttribute("class", "card");


    box.innerHTML = `
    <img src="${item.bigThumbnail}" alt="img" class="mainImg">
    <h2 class="title">${item.title}</h2>
    <p class="language">Language: ${item.language}</p>
    <hr>
    <p class="rating">Rating: ${item.imdbRating}</p>
    <hr>
    <p class="categories">Uncategorized</p>
    <hr>
    <div class="link mt-4">
        <a href="#" class="linkyutube p-2 px-2 bg-danger rounded-2 text-decoration-none text-white">YOUTUBE</a>
        <button class="add p-2 px-4 bg-info text-white">ADD</button>
    </div>    
    `
    wrapper.append(box);
})