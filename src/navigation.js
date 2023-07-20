function navigator(){
    if (location.hash.startsWith('#trends')) {
        trendsPage();
    }
    else if (location.hash.startsWith('#search=')) {
        searchPage();
    }
    else if (location.hash.startsWith('#movie')){
        movieDetailPage();
    }
    else if (location.hash.startsWith('#category')){
        categoriesPage();
    } else {
        homePage() ;
    }
}

function homePage(){
    console.log("Home!!")
}

function trendsPage(){
    console.log("Trending!!")
}

function movieDetailPage(){
    console.log("Movie!!")
}

function searchPage(){
    console.log("Searching!!")
}

function categoriesPage(){
    console.log("Categories!!")
}