let pageNumber = 0 //"var" initial page is 0

//hold the content of the "pages" array
const pages = [
  { title: "Pip Passier", text:"text about pip"},
  { title: "Artist 2", text:"text about artist 2"},
  { title: "artist 3", text:"text about artist 3"},
  { title: "artist 4", text:"text about artist 4"}
]

//define all tags
const nextTag = document.querySelector("col img.next") //finds next.svg
const nameTag = document.querySelector("h2") // find the artist name
const biotextTag = document.querySelector("p.bio") //finds the bio text

//next events
const next = function(){
  pageNumber = pageNumber = 1
    // if (pageNumber > pages.length - 1){pageNumber = 0} //checks if page number is the final one
    // updateSection()
}

// updates section's inner html
const updateSection = function(){
  nameTag.innerHTML = pages[pageNumber].title
  biotextTag.innerHTML = pages[pageNumber].text
}

//addEventListener runs on load, listening for a "click"
//when we run a click, we want to run something
nextTag.addEventListener("click", function(){
  next()
})
