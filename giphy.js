let search = document.querySelector(".search");
let list = document.querySelector(".list");

search.addEventListener("change", () => {
  getGiphy(search.value);
});

getGiphy();
async function getGiphy(text) {
  try {
    let response = await fetch(
      `https://api.giphy.com/v1/gifs/search?q=${
        text ? text : "sad"
      }&api_key=YOxgnLIErg6GBhZD7dCPoEoy4XJHvFoE&limit=20`
    );
    let data = await response.json();
    craeteGifList(data.data);
    console.log(data.data);
    return data;
  } catch (error) {
    console.log(error);
  }
}

function craeteGifList(gifList) {
  list.innerHTML = "";
  gifList.forEach((elem) => {
    let li = document.createElement("li");
    let img = document.createElement("img");
    img.className = "gifs";
    let h3 = document.createElement("h3");

    h3.textContent = elem.url;
    img.src = elem.images.original.url;
    li.appendChild(img);
    list.append(li);
  });
}
