import data from "./data.json" assert { type: 'json' };;

console.log(data)
console.log(data.mysteries)

const inputEl = document.getElementsByClassName("search-container")[0];
inputEl.addEventListener('input', (event) => {
    const searchText = event.target.value;


    const filteredMysteries = data.mysteries.filter(element => element.Title.toLowerCase().includes(searchText))
    console.log(filteredMysteries)

    const filteredMysteriesHTML = filteredMysteries.map((mysteriesElement) => {
        return `
        <section class="mysteries-container">
            <div class="row mcard-container">
                <div class="col-12 col-lg-4 mystery-card">
                    <div class="mysterie-img-container">
                        <img class="mysterie-img" src="${mysteriesElement.Poster}" alt="">
                        <div class="mystery-descript-container">
                            <div><h2 class="mystery-title">${mysteriesElement.Title}</h2></div>
                            <div><p class="mystery-text">${mysteriesElement.Plot}</p></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        `;
        }).join("")

    document.getElementsByClassName("mysteries-container")[0].innerHTML = filteredMysteriesHTML
})

