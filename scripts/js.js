let pageNumber = 0; //"var" initial page is 0 NOT WORKING

//hold the content of the "pages" array
const pages = [
  {name:"Jasper van Doorn",
  text:"Jasper van Doorn is a Dutch graphic designer, graduated from illustration in 2018. Currently lives in Rotterdam and works as an independent designer and artist in the graphic design industry.</p><p>Jasper van Doorn makes use of countless digital and analogue disciplines in his graphic design practice, a few occurring examples are: 3D rendering, lettering, illustration and typography. All to achieve a high visual impact and create an immersive effect to trigger people.",
  circle:"#3e78ed",
  interview:"<h2>Interview</h2> <p><b><i>Question?</i></b><br>Answer.<p> <p><b><i>Question2?</i></b><br>Answer2.<p>",
  liweight: "<b>Off-side</b>",
  slider: '<div class="carousel-item active"><img id="img1" class="d-block w-100" src="img/jasper-portret2.jpg"></div><div class="carousel-item"><img  id="img2" class="d-block w-100" src="img/jasper-portret3.jpg"></div><div class="carousel-item"><img id="img3" class="d-block w-100" src="img/jasper-portret4.jpg"></div>'
},

  {name:"Nazif",
  text:"Nasbami or Nazif Lopulissa is a Rotterdam based artist who graduated the Willem de Kooning Academy in 2016. His vibrant, colorful and playful style is always meticulously matched with his eye for high impact and high quality.",
  circle:"#e34a47",
  interview:"Interview 2",
  liweight: "Playdoh",
  slider: '<div class="carousel-item active"><img id="img1" class="d-block w-100" src="img/nazif-portret1.jpg"></div><div class="carousel-item"><img  id="img2" class="d-block w-100" src="img/nazif-portret2.jpg"></div><div class="carousel-item"><img id="img3" class="d-block w-100" src="img/nazif-portret3.jpg"></div>'
},

  {name:"Pip Passchier",
  text:"The worlds of sports and art lie far apart. As both athlete and artist, I aim to show connections between these worlds. I often wonder about the particular culture of amateur sports. The physical space of the sports club is the main source of inspiration for this project.",
  circle:"#f7fe00",
  interview:"<b>Wat was de inspiratie voor ‘Off-Side’?</b><br>Ik onderzoek de openbare ruimte door deze te bekijken als speelveld. Daarin ben ik me bewust van bestaande vormen en lijnen, vaak gedirigeerd door ingrepen van de mens. De vormgeving van de gekozen locatie, bekeken als speelveld, is hierbij mijn inspiratiebron.<br><b>Waarom heb je juist voor deze locatie gekozen?</b> <br>De grote loze lege ruimte tussen de gebouwen prikkelde mij om er beweging en kleur in te brengen. <br><b>Welke invloed heeft je werk op deze locatie?</b><br> Mijn werk heeft als doel dat je anders kunt gaan kijken en reageren op en naar de inrichting van de publieke ruimte. Het werk reageert op de verdichting van de stad, kan de inrichting van de openbare ruimte een dubbele functie hebben? Hoe kunnen we de groenstrook alssportveld gebruiken?<br><b>Wat is jouw toekomstdroom voor de stad Rotterdam?</b><br>Rotterdam als speeltuin, met ruimte voor experiment.",
  liweight: "Attentie Waarde",
  slider: '<div class="carousel-item active"><img id="img1" class="d-block w-100" src="img/pip-portret1.jpg"></div><div class="carousel-item"><img  id="img2" class="d-block w-100" src="img/pip-portret2.jpg"></div><div class="carousel-item"><img id="img3" class="d-block w-100" src="img/pip-portret3.jpg"></div>'
},

  {name:"Studio Bureau",
  text:"Studio Bureau is een concept- en ontwerpbureau opgericht door Thijs van Dalen en Frans van Ditzhuijzen. Sinds 2016 werken ze aan ontwerpen die culturele instituten, bedrijven of individuen transformeren en interactie tot stand brengen met het publiek.",
  circle:"#b472e6",
  interview:"Interview 4",
  liweight: "De maan",
  slider: '<div class="carousel-item active"><img id="img1" class="d-block w-100" src="img/studiobureau-portret1.jpg"></div><div class="carousel-item"><img  id="img2" class="d-block w-100" src="img/studiobureau-portret2.jpg"></div><div class="carousel-item"><img id="img3" class="d-block w-100" src="img/studiobureau-portret3.jpg"></div>'
}
]

//define all tags
const nextTag = document.querySelector("div.circle2") //finds circle / now next

const slideTag = document.querySelector("#carousel") //finds div.circle

//const fontTag = document.querySelector("#info") //finds div.circle


const titleTag = document.querySelector("h2.name") // title
const bioTag = document.querySelector("p.bio") // bio
const interTag = document.querySelector("p.interview") // interview

const li1Tag = document.querySelector("li.item1")
const li2Tag = document.querySelector("li.item2")
const li3Tag = document.querySelector("li.item3")
const li4Tag = document.querySelector("li.item4")

const sliderTag = document.querySelector("#innerslide")//finds flex section of slide

const circleTag = document.querySelector("div.circle") //finds second circle

//clarify that "next" is moving +1 down in the array and >then run updateSection
const next = function(){
  pageNumber = pageNumber + 1
    if (pageNumber > pages.length - 1){pageNumber = 0} //checks if page number is the final one
    updateSection()
}

// What does it mean to update the section and what elements are involved
const updateSection = function(){
  titleTag.innerHTML = pages[pageNumber].name
  bioTag.innerHTML = pages[pageNumber].text
  interTag.innerHTML = pages[pageNumber].interview

  sliderTag.innerHTML = pages[pageNumber].slider

  li1Tag.innerHTML = pages[0].liweight
  li2Tag.innerHTML = pages[1].liweight
  li3Tag.innerHTML = pages[2].liweight
  li4Tag.innerHTML = pages[3].liweight

  circleTag.style.backgroundColor = pages[pageNumber].circle
}

//if statements HERE
// if pageNumber = 0 {
//   li1Tag.style.fontWeight = 900
// }


//addEventListener runs on load, listening for a "click"
//when we run a click, we want to run something
nextTag.addEventListener("click", function(){
  next()
})

//addEventListener vs onclick + console error
//it needs to be specified that once "next" is clicked again, the content of <li> is reseted
// li.item# only changes when it is the correct page
// so if page = 1 then li1tag = updated to 1
li1Tag.addEventListener("click", function(){
  pageNumber = 0
})

li2Tag.addEventListener("click", function(){
  pageNumber = 1
})

li3Tag.addEventListener("click", function(){
  pageNumber = 2
})

li4Tag.addEventListener("click", function(){
  pageNumber = 3
})

updateSection()
