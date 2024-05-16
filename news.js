const headlineElement = document.getElementById("headlines");

const fetchHeadlines = async () => {
  const response = await fetch(
    "https://newsapi.org/v2/top-headlines?country=in&apiKey=340bab72149845a991de2c5a37b90e43"
  );
  const data = await response.json();
  console.log(data);
  displayHeadlines(data);
};

const displayHeadlines = (data) => {
  data.articles.forEach((article) => {
    const subDiv = document.createElement("div");
    subDiv.setAttribute("class", "headlinessubdiv");
    subDiv.style.backgroundImage = `url(${article.urlToImage})`;
    subDiv.innerHTML = `
      <div style="background-color: black; padding: 5px 10px;">
        <h3 style="color: white;">${article.title}</h3>
      </div>
    `;
    const readMoreButton = document.createElement("button");
    readMoreButton.setAttribute("class", "read-more-button");
    readMoreButton.style.backgroundColor = "#bb9f00";
    readMoreButton.style.color = "white";
    readMoreButton.style.padding = "5px 10px";
    readMoreButton.style.border = "none";
    readMoreButton.style.borderRadius = "5px";
    readMoreButton.style.cursor = "pointer";
    readMoreButton.innerHTML = `<a href="${article.url}" target="_blank" style="color: white;">Read more</a>`;
    subDiv.appendChild(readMoreButton);
    subDiv.addEventListener("mouseover", () => {
      readMoreButton.style.display = "block";
    });
    subDiv.addEventListener("mouseout", () => {
      readMoreButton.style.display = "none";
    });
    
    headlineElement.appendChild(subDiv);
  });
};

fetchHeadlines();
window.addEventListener("load",()=>{
    const loader = document.querySelector(".loader");
    loader.classList.add("loader-hidden");
    loader.addEventListener("transitionend",()=>{
        document.body.removeChild("loader")
    })
})

document.getElementById("Year").innerHTML = new Date().getFullYear();