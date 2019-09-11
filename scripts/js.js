// Weird flex but ok
// Written by Yara Veloso
// velosoyara@gmail.com

let pageNumber = 0;
let hash = window.location.hash.replace("#", "")

// if (hash) {
//   pageNumber = parseInt(hash)
// } else {
//   pageNumber == 0
//   sliderTag.scrollIntoView();
// }


//holds all the content
const pages = [

  {name:"Pip Passchier",
  text:'<b>Pip Passchier</b> (1995, NL) is een autonoom beeldend kunstenaar. In haar werk onderzoekt ze het grensgebied van sport en kunst waarbij ze speelt met de herkenbaarheid en de regels binnen sport en spel. Wat doet de visuele beeldtaal van sport met mensen en wat gebeurt er als spelregels vervagen?<br><br><b><i><a href="http://www.pippasschier.nl">www.pippasschier.nl</a></i></b>',
  interview:"<p><b>Wat was de inspiratie voor ‘Please, Do Not Run’?</b><br>Ik onderzoek de openbare ruimte door deze te bekijken als speelveld. Daarin ben ik me bewust van bestaande vormen en lijnen, vaak gedirigeerd door ingrepen van de mens. De vormgeving van de gekozen locatie, bekeken als speelveld, is hierbij mijn inspiratiebron.</p> <p> <b>Waarom heb je juist voor deze locatie gekozen?</b> <br>De grote loze lege ruimte tussen de gebouwen prikkelde mij om er beweging en kleur in te brengen. </p> <p><b>Welke invloed heeft je werk op deze locatie?</b><br> Mijn werk heeft als doel dat je anders kunt gaan kijken en reageren op en naar de inrichting van de publieke ruimte. Het werk reageert op de verdichting van de stad, kan de inrichting van de openbare ruimte een dubbele functie hebben? Hoe kunnen we de groenstrook alssportveld gebruiken?</p> <p><b>Hoe beïnvloedt Rotterdam jouw werk in het algemeen?</b><br> De structuren en patronen binnen de stad beïnvloeden mijn werk. Ik onderzoek hoe de mens zich beweegt binnen deze omgeving.</p> <p><b>Wat is jouw toekomstdroom voor de stad Rotterdam?</b><br>Rotterdam als speeltuin, met ruimte voor experiment.</p>",
  liweight: '<b>Lloydkwartier</b><i>Please, Do Not Run</i>',
  slider: '<div class="carousel-item active"><img id="img1" class="d-block w-100" src="img/pip-1.jpg"></div><div class="carousel-item"><img  id="img2" class="d-block w-100" src="img/pip-2.jpg"></div><div class="carousel-item"><img id="img3" class="d-block w-100" src="img/pip-3.jpg"></div>',
  anchor: "pip"
},

{name:"Jasper van Doorn",
text:'<b>Jasper van Doorn</b> (1993, NL) is een grafisch ontwerper. In zijn werk maakt hij gebruik van verschillende digitale en analoge technieken om impact te creëren. Vaak komt zijn inspiratie vanuit alledaagse objecten die normaal over het hoofd worden gezien. Met technieken als 3D rendering, belettering, illustratie en typografie focust van Doorn zich op het creëren van een hoge impact met een visuele spanning waardoor je getriggerd wordt. <br><br><b><i><a href="http://www.jaspervandoorn.com">www.jaspervandoorn.com</a></i></b>',
interview:"<p><b><i>Wat was de inspiratie voor ’Attentiewaarde 1 t/m 28’?</b></i><br>    Verkeersborden worden voornamelijk gewaardeerd vanwege hun functie, net als de rest van het netwerk van functionele objecten in de openbare ruimte zoals wegbelijning, stoplichten, verkeerspalen, etc. Echter zijn de kleuren, vormen, composities en materialen eindeloos; waarom zouden we niet verder kijken dan enkel de functie? Ik ben gaan kijken hoe ik functionele objecten als medium kan inzetten en de huidige functie achterwege kan laten.</p>     <p><b><i>Waarom heb je juist voor deze locatie gekozen?</b></i><br>    De drukte van de stad is iets wat mij aantrekt, maar ook wegduwt. Ik kom graag in het Nassauhavenpark, er is hier veel ruimte en rust – een soort balans tussen stad en natuur. Niet oer-natuur, maar gewoon wind, eb en vloed, een paar bomen, wat gras en heel veel eenden, meeuwen, en ganzen. Het park heeft een aantal bankjes waar zelden mensen op zitten, er komen hier eigenlijk alleen mensen die een rondje lopen met de hond. Zelf kom ik graag om naar de eendjes te kijken.</p>       <p><b><i>Op welke manier heeft deze locatie invloed gehad op je proces?</b></i><br>        De haven wordt al jaren niet meer gebruikt en door de brede opening richting de Nieuwe Maas heeft de wind er vrij spel. Het idee is dat de werken onderdeel worden van het park en speels meedraaien met de wind, misschien als een soort van voorbeeldfunctie voor hoe het park te gebruiken.</p>     <p><b><i>Welke invloed heeft je werk op deze locatie?</b></i><br>     Dat weet ik niet, maar ik hoop dat de bewoners de verandering in het park waarderen en even op een bankje gaan zitten om misschien maar even niets te doen.</p>     <p><b><i>Hoe zie jij Rotterdam het liefst?</b></i><br>Beetje groen, beetje beton.<p>",
liweight: "<b>Nassauhavenpark</b><i>Attentiewaarde 1 t/m 28</i>",
slider: '<div class="carousel-item active"><img id="img1" class="d-block w-100" src="img/jasper-1.jpg"></div><div class="carousel-item"><img  id="img2" class="d-block w-100" src="img/jasper-2.jpg"></div><div class="carousel-item"><img id="img3" class="d-block w-100" src="img/jasper-3.jpg"></div>',
anchor: "jasper"
},


  {name:"Nazif Lopulissa",
  text:'<b>Nazif Lopulissa</b> (1991, NL) onderzoekt de vormstructuur van objecten en plaatsen uit het dagelijkse leven. Door herkenbare vormen te verwerken tot kleurrijke composities in verschillende materialen en technieken, balanceert zijn werk altijd tussen speelse vrijheid en de manier waarop vormen, symbolen en materialen betekenis krijgen. Zo bieden ze reflectie op de tegenstrijdigheden tussen vorm, functie, ontwerp en betekenis, en de manier waarop wij beeldend en materieel invulling geven aan de wereld om ons heen. Lopulissa’s werk verwijst naar de tijd waarin het gewicht van het volwassen leven nog geen beperkingen oplegt.<br><br><b><i><a href="https://nasbami.com/">www.nasbami.com</a></i></b>',
  interview:"<p><b>Wat was de inspiratie voor ‘Wiggle Wiggle’?</b><br> Tot voor kort geleden maakte ik vooral tweedimensionaal werk waarin ik vormen en hun betekenis bestudeerde. Ik wilde dit al een tijd ook doen in driedimensionaal werk. Ik heb gekeken hoe ik lijnen en speelse vormen kan vertalen naar levensgrote objecten in de publieke ruimte.</p><p><b>Welke invloed wil je dat je werk heeft op deze locatie?</b><br>Zuidplein is eigenlijk een hele onpersoonlijke omgeving. Er rijden veel auto’s, en het is een plek waar mensen eerder langs reizen dan verblijven. Misschien dat de stad daarom ook zo bezig is met de ontwikkeling van Zuidplein de komende jaren. Met een opvallend, imposant en kleurrijk werk hoop ik dat de positieve energie per vierkante meter toeneemt. </p><p><b>Hoe zie jij Rotterdam het liefst?</b><br>Alles wordt tegenwoordig de lucht in gebouwd. Op grondniveau gebeurt er dus steeds minder. Ik denk dat hier voor Rotterdam juist kansen liggen. Op sommige plekken moet tegenwoordig een percentage van de projectontwikkeling aan de publieke ruimte worden besteed. Zo gaan mensen meer nadenken over hoe we de stad beter en interessanter kunnen maken voor iedereen. Kunst kan juist hier een belangrijke rol spelen. Musea kunnen wel blijven proberen om publiek naar binnen te halen, maar mij lijkt het juist fantastisch om de kunst naar de mensen toe te brengen. Vooral in hun dagelijkse leefomgeving.</p><p><b>Wat is jouw toekomstdroom voor de stad?</b><br>Ik ben al een tijd bezig met een onderzoek naar speeltuinen in Rotterdam. Net als het werk voor Stadstukken ben ik daarbij op zoek naar speelsheid in vorm, en hoe ik dit in de publieke ruimte van Rotterdam kan brengen. Wat mij betreft kan Rotterdam nog kunstzinniger worden. En graag een Warung Mini op elke straathoek.</p>",
  liweight: "<b>Zuidplein</b><i>Wiggle Wiggle</i>",
  slider: '<div class="carousel-item active"><img id="img1" class="d-block w-100" src="img/nazif-1.jpg"></div><div class="carousel-item"><img  id="img2" class="d-block w-100" src="img/nazif-2.jpg"></div><div class="carousel-item"><img id="img3" class="d-block w-100" src="img/nazif-3.jpg"></div>',
  anchor: "nazif"
  },

  {name:"Studio Bureau",
  text:'<b>Studio Bureau</b> is een concept- en ontwerpbureau opgericht door Thijs van Dalen (1988) en Frans van Ditzhuijzen (1989). Ze staan bekend om projecten die zich bevinden op het snijvlak van grafisch ontwerp, ruimtelijk ontwerp en kunst – vaak in de alledaagse ruimte om ons heen.<br><br><b><i><a href="http://studiobureau.nl">www.studiobureau.nl</a></i></b>',
  interview:"<p><b>Wat was de inspiratie voor ‘Maanvloed’?</b><br> Wij vinden het een fascinerend idee dat iets ‘buitenaards’ zoals de maan invloed heeft op de Maas. Door de zwaartekracht van de maan ontstaat het getij en stijgt en daalt het water van de Maas. Dat heeft weer invloed op ons landschap en de stad, zo is de natuur de aannemer van de stad.</p> <p><b>Op welke manier heeft deze locatie invloed gehad op jullie proces?</b><br> Het idee dat wij als inwoners van Rotterdam zo dicht bij het water leven, waar we elders in Nederland hoge dijken bouwen en uiterwaarden hebben die een afstand tot het water creëren, heeft ons geïnspireerd.</p> <p><b>Welke invloed willen jullie dat het werk heeft op deze locatie?</b><br> We hopen dat het werk je bewuster maakt over hoe dicht wij bij het water wonen en dat het water wordt beïnvloed door natuurlijke krachten van buiten onze atmosfeer. De zichtbaarheid van het stijgende en dalende waterpeil (eb en vloed) verwacht je langs de kust, maar in een stad is dit verrassend; hier sta je niet elke dag bij stil.</p> <p><b>Wat is jullie toekomstdroom voor de stad Rotterdam?</b><br> Een stad waar de innovatie niet alleen binnen de vergaderruimtes op gele post-its blijft, maar ook letterlijk zichtbaar en tastbaar wordt in de fysieke ruimte. In Rotterdam moet ruimte blijven voor spontaniteit en vindingrijke initiatieven die de stad vormen en identiteit geven. </p>",
  liweight: "<b>De Esch</b><i>Maanvloed</i>",
  slider: '<div class="carousel-item active"><img id="img1" class="d-block w-100" src="img/studiob-1.jpg"></div><div class="carousel-item"><img  id="img2" class="d-block w-100" src="img/studiob-2.jpg"></div><div class="carousel-item"><img id="img3" class="d-block w-100" src="img/studiob-3.jpg"></div>',
  anchor: "studiobureau"
}
]

//defines all tags
const titleTag = document.querySelector("h2.name") // artist name
const bioTag = document.querySelector("p.bio") // bio
const interTag = document.querySelector("p.interview") // interview
const sliderTag = document.querySelector("#innerslide")//finds flex section of slide
  //menu items
const li0Tag = document.querySelector("#item1") //pip
const li1Tag = document.querySelector("#item2") //attentie
const li2Tag = document.querySelector("#item3") //nazif
const li3Tag = document.querySelector("#item4") //stbureau
  //controls
const nextTag = document.querySelector("#next")
const prevTag = document.querySelector("#prev")
const currentTag = document.querySelector("#current")


// defines what it means to "update the section" and what elements are changed/updated
const updateSection = function(){
  // window.location.hash = "#" + pageNumber

  bioTag.innerHTML = pages[pageNumber].text
  interTag.innerHTML = pages[pageNumber].interview

  sliderTag.innerHTML = pages[pageNumber].slider
  sliderTag.style.transitionDuration = "0.5s"


  li0Tag.innerHTML = pages[0].liweight
  li1Tag.innerHTML = pages[1].liweight
  li2Tag.innerHTML = pages[2].liweight
  li3Tag.innerHTML = pages[3].liweight

  currentTag.innerHTML = pages[pageNumber].name


//conditionals (classList/toggle does not allow hover/messes up the CSS. I'm sorry Javascript Gods, I hope you find forgiveness in your heart)
  if (pageNumber == 0) {
    li0Tag.style.color = "#302D7D"

  } else {
    li0Tag.style.color = "#F7A813"
  }

  if (pageNumber == 1) {
    li1Tag.style.color = "#302D7D"

  } else {
    li1Tag.style.color = "#F7A813"
  }

  if (pageNumber == 2) {
    li2Tag.style.color = "#302D7D"

  } else {
    li2Tag.style.color = "#F7A813"
  }

  if (pageNumber == 3) {
    li3Tag.style.color = "#302D7D"


  } else {
    li3Tag.style.color = "#F7A813"
  }

}

//defines that "next" is moving +1 up in the array and >then run updateSection
const next = function(){
  pageNumber = pageNumber + 1
    if (pageNumber > pages.length - 1){pageNumber = 0} //checks if page number is the final one
    updateSection()

}

//defines that "prev" is moving -1 down in the array and >then run updateSection
const prev = function(){
  pageNumber = pageNumber - 1
    if (pageNumber < 0){pageNumber = pages.length - 1} //if page number is lower than zero
    updateSection()
}


//formely
// const updatePage? = function(){
// pageNumber = 0
//     updateSection()

// defines all clickable elements and which function they run
// defines wich object is ran depending on element clicked
nextTag.addEventListener("click", function(){
  next()
})

prevTag.addEventListener("click", function(){
  prev()
})

li0Tag.addEventListener("click", function(){
  updateSection(pageNumber = 0)
})

li1Tag.addEventListener("click", function(){
    updateSection(pageNumber = 1)
})

li2Tag.addEventListener("click", function(){
  updateSection(pageNumber = 2)
})

li3Tag.addEventListener("click", function(){
    updateSection(pageNumber = 3)
})



//runs the section automatically on page load
// if (location.href == "./about#nazif"){
//   updateSection(pageNumber = 2)
// } else {
  updateSection()
