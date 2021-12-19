var url = `https://www.themealdb.com/api/json/v1/1/categories.php`;

callAPI();

function callAPI() {
    fetch(url)
        .then(res => res.json())
        .then(data => card(data.categories))
}


function card(data) {
    //console.log(data);
    var content = document.getElementById("BootStrapData");
    var newDiv = document.getElementById("div");
    for (var i = 0; i < data.length; i++) {
        //console.log(i);

        //console.log(data[i].strCategory);
        var category = (data[i].strCategory);
        var details = (data[i].strCategoryDescription);
        var image = (data[i].strCategoryThumb);
        var newDiv = document.createElement("div");
        //newStyle.classList.add("styles");





        newDiv.innerHTML = `<div class="card" style="width: 1000px;">
            <img src=" ${image}" class="card-img-top" alt=""  >
            <div class="card-body ">
                <h5 class="card-title" id="catagory" >  ${category} <br> </h5>
                <p class="card-text" id="description"> ${details} <br> 
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div> `;

        content.appendChild(newDiv);


    }


}




































function searchResults() {
    var search = document.getElementById("searchbox").value;




    fetch(url)
        .then(res => res.json())
        .then(data => SearchCard(data.categories, search))
}

function SearchCard(data, search) {
    //console.log(data);

    var element = document.getElementById("BootStrapData"); // This one gets deleted

    var content = document.getElementById("SearchBootStrapData"); // Eita bairer ta jeita delete hoy na
    element.parentNode.removeChild(element);

    var newDiv = document.createElement("div");
    for (var i = 0; i < data.length; i++) {

        var category = (data[i].strCategory);
        var details = (data[i].strCategoryDescription);
        var image = (data[i].strCategoryThumb);

        if (search == category) {

            //console.log(category);
            newDiv.innerHTML = `<div class="card" style="width: 1000px;">
            <img src=" ${image}" class="card-img-top" alt=""  >
            <div class="card-body ">
               <h5 class="card-title" id="catagory" >  ${category} <br> </h5>
                <p class="card-text" id="description"> ${details} <br> 
               <a href="#" class="btn btn-primary">Go somewhere</a>
           </div>
       </div> `;
            // console.log(newDiv);
            //console.log(content);
            content.appendChild(newDiv);

        }



    }
}

