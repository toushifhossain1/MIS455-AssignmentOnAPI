var url = `https://www.themealdb.com/api/json/v1/1/categories.php`;

function callAPI() {
    fetch(url)
        .then(res => res.json())
        .then(data => card(data.categories))
}
callAPI();

function card(data) {
    //console.log(data);
    var content = document.getElementById("BootStrapData");
    var newDiv = document.getElementById("div");
    for (var i = 0; i < data.length; i++) {
        //console.log(i);
        console.log(data[i].strCategory);
        var category = (data[i].strCategory);
        var details = (data[i].strCategoryDescription);
        var image = (data[i].strCategoryThumb);
        var newDiv = document.createElement("div");

        newDiv.innerHTML = `<div class="card" style="width: 18rem;">
            <img src=" ${image}" class="card-img-top" alt="">
            <div class="card-body">
                <h5 class="card-title" id="catagory"> <p> ${category} <br></p> </h5>
                <p class="card-text" id="description"><p> ${details} <br></p> </p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div> `;
        content.appendChild(newDiv);
    }
}