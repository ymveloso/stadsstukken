let pageNumber = 0; //"var" initial page is 0

//hold the content of the "pages" array
const pages = [
  {name:"Artist 1",
  text:"Text Artist 1",
  circle:"#3e78ed",
  interview:"Interview 1",
  bgcolour:"#302D7D",
  colour: "#FAD2C8",
  menucolour: "#302D7D",
},

  {name:"Artist 2",
  text:"Text Artist 2",
  circle:"#e34a47",
  interview:"Interview 2",
  bgcolour: "#E62A44",
  colour:"#302D7D",
  menucolour:"#E62A44"
},

  {name:"Artist 3",
  text:"Text Artist 3",
  circle:"#f7fe00",
  interview:"Interviewt 3",
  bgcolour: "#FAD2C8",
  colour: "#302D7D",
  menucolour:"#FAD2C8"
},

  {name:"Artist 4",
  text:"Text Artist 4",
  circle:"#b472e6",
  interview:"Interview 4",
  bgcolour: "#F7A813",
  colour: "#302D7D",
  menucolour:"#F7A813"
}
]

//define all tags
const nextTag = document.querySelector("img.next") //finds next.svg
const titleTag = document.querySelector("h2") // finds h2
const circleTag = document.querySelector("div.circle") //finds div.circle
const textTag = document.querySelector("p.bio") //finds div.circle
const interTag = document.querySelector("p.interview") //finds div.circle
const bgTag = document.querySelector("#info") //finds div.circle
const fontTag = document.querySelector("#info") //finds div.circle
const menuTag = document.querySelector("#works") //finds div.circle


//next events
const next = function(){
  pageNumber = pageNumber + 1
    if (pageNumber > pages.length - 1){pageNumber = 0} //checks if page number is the final one
    updateSection()
}


// updates section's inner html
const updateSection = function(){
  titleTag.innerHTML = pages[pageNumber].name
  textTag.innerHTML = pages[pageNumber].text
  interTag.innerHTML = pages[pageNumber].interview
  circleTag.style.backgroundColor = pages[pageNumber].circle
  bgTag.style.backgroundColor = pages[pageNumber].bgcolour
  fontTag.style.color = pages[pageNumber].colour
  menuTag.style.backgroundColor = pages[pageNumber].menucolour


}

//addEventListener runs on load, listening for a "click"
//when we run a click, we want to run something
nextTag.addEventListener("click", function(){
  next()
})
