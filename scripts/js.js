let pageNumber = 0; //"var" initial page is 0

//hold the content of the "pages" array
const pages = [
  {name:"Artist 1",
  text:"Text Artist 1",
  circle:"#3e78ed",
  interview:"Interview 1",
  bgcolour:"#302D7D",
  colour: "#FAD2C8",
  menucolour: "#E62A44",
  liweight: "<b>Off-side</b>"
},

  {name:"Artist 2",
  text:"Text Artist 2",
  circle:"#e34a47",
  interview:"Interview 2",
  bgcolour: "#E62A44",
  colour:"#FAD2C8",
  menucolour:"#FAD2C8",
  workscolour: "#302D7D",
  liweight: "<b>Playdoh</b>"

},

  {name:"Artist 3",
  text:"Text Artist 3",
  circle:"#f7fe00",
  interview:"Interviewt 3",
  bgcolour: "#FAD2C8",
  colour: "#302D7D",
  menucolour:"#302D7D",
  workscolour: "#F7A813",
  liweight: "<b>Attentie Warde</b>"

},

  {name:"Artist 4",
  text:"Text Artist 4",
  circle:"#b472e6",
  interview:"Interview 4",
  bgcolour: "#F7A813",
  colour: "#E62A44",
  menucolour:"#E62A44",
  workscolour: "#FAD2C8",
  liweight: "<b>De maan</b>"

}
]

//define all tags
const nextTag = document.querySelector("img.next") //finds next.svg
const titleTag = document.querySelector("h2.name") // finds h2
const circleTag = document.querySelector("div.circle") //finds div.circle
const textTag = document.querySelector("p.bio") //finds div.circle
const interTag = document.querySelector("p.interview") //finds div.circle
const bgTag = document.querySelector("#info") //finds div.circle
const fontTag = document.querySelector("#info") //finds div.circle
const menuTag = document.querySelector("#works") //finds div.circle
const slideTag = document.querySelector("#carousel") //finds div.circle
const li1Tag = document.querySelector("li.item1") //finds div.circle
const li2Tag = document.querySelector("li.item2") //finds div.circle
const li3Tag = document.querySelector("li.item3") //finds div.circle
const li4Tag = document.querySelector("li.item4") //finds div.circle


//clarify that "next" is moving +1 down in the array and >then run updateSection
const next = function(){
  pageNumber = pageNumber + 1
    if (pageNumber > pages.length - 1){pageNumber = 0} //checks if page number is the final one
    updateSection()
}

// What does it mean to update the section and what elements are involved
const updateSection = function(){
  titleTag.innerHTML = pages[pageNumber].name
  textTag.innerHTML = pages[pageNumber].text
  interTag.innerHTML = pages[pageNumber].interview


  bgTag.style.backgroundColor = pages[pageNumber].bgcolour
  menuTag.style.backgroundColor = pages[pageNumber].menucolour
  slideTag.style.backgroundColor = pages[pageNumber].menucolour

  fontTag.style.color = pages[pageNumber].colour
  menuTag.style.color = pages[pageNumber].workscolour

  li1Tag.innerHTML = pages[pageNumber].liweight
  li2Tag.innerHTML = pages[pageNumber].liweight
  li3Tag.innerHTML = pages[pageNumber].liweight
  li4Tag.innerHTML = pages[pageNumber].liweight


  circleTag.style.backgroundColor = pages[pageNumber].circle
}

//addEventListener runs on load, listening for a "click"
//when we run a click, we want to run something
nextTag.addEventListener("click", function(){
  next()
})

//addEventListener vs onclick + console error
//it needs to be specified that once "next" is clicked again, the content of <li> is reseted
// li.item# only changes when it is the correct page
// so if page = 1 then li1tag = updated to 1
