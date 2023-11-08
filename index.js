import data from "./data.json" assert { type: 'json' };;

console.log(data)
console.log(data.mysteries)

const mysteriesHtml = data.mysteries.map((element) => {
    return `
    <div class="row carousel-box" style="color: white; margin: 0%;  background-color: rgba(0, 0, 0, 0.80);">
        <div class="col-lg-6" style="padding: 10%; padding-top: 20%;">
            <h1>${element.Title}</h1>
        </div>
        <div class="col-lg-6" style="padding: 10%; font-size: 20px;">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium perferendis sit, autem, quae
            libero ducimus suscipit quos quis voluptates ex iste voluptas culpa reprehenderit voluptatem
            nesciunt. Excepturi ipsa nostrum fugit?</p>
        </div>
    </div>
    `;

}).join("")

document.getElementsByClassName("mysteries-container")[0].innerHTML = mysteriesHtml

const inputEl = document.getElementsByClassName("search-bar")[0];
inputEl.addEventListener('input', (event) => {
    const searchText = event.target.value;


    const filteredMyteries = data.mysteries.filter(element => element.Title.toLowerCase().includes(searchText))
    console.log(filteredMysteries)

    const filteredMysteriesHTML = filteredMyesteries.map((mysteriesElement) => {
      return `
      <div class="row carousel-box" style="color: white; margin: 0%;  background-color: rgba(0, 0, 0, 0.80);">
          <div class="col-lg-6" style="padding: 10%; padding-top: 20%;">
              <h1>${mysteriesElement.Title}</h1>
          </div>
          <div class="col-lg-6" style="padding: 10%; font-size: 20px;">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium perferendis sit, autem, quae
              libero ducimus suscipit quos quis voluptates ex iste voluptas culpa reprehenderit voluptatem
              nesciunt. Excepturi ipsa nostrum fugit?</p>
          </div>
      </div>
      `;
    }).join("")

    document.getElementsByClassName("mysteries-container")[0].innerHTML = filteredFilmsHTML
})

