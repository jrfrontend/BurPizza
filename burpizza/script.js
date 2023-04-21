const searchForm = document.querySelector(".search-form");

const searchBtn = document.querySelector("#search-btn");

searchBtn.addEventListener("click", function(){
    searchForm.classList.add.toggle("active");
    document.addEventListener("click", function(e){
        if(
            !e.composedPath().includes(searchBtn) && !e.composedPath().includes(searchForm)
            ){
            searchForm.classList.toggle("active");
        }
    })
})