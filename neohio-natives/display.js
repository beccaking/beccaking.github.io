//size proportionate to the number of dependent species
//Resize original images to production size to speed up page load
//Intersperse divs with quotes from Dr. Tallamy about the importance of native species, facts from his books, plugs for his books, esp newest- Nature's Best Hope

var container = document.getElementsByClassName('photo-container');
var midcontainer = document.getElementsByClassName('mid-photo-container');
var smallcontainer = document.getElementsByClassName('small-photo-container');


for (i=0;i<plants.length;i++){
  let randomIndex = Math.floor(Math.random()*i)
  let value1 = plants[i]
  let value2 = plants[randomIndex]
  plants[i] = value2
  plants[randomIndex] = value1
}

for (i=0;i<plants.length;i++){

  let plant = document.createElement('div')
  plant.classList.add('plant')
  plant.classList.add(plants[i].species)
  plant.setAttribute('id', plants[i].species)

  plant.style.backgroundImage = "url('./images/" + plants[i].species +".jpeg')"
  plant.style.width = plants[i].count + 'px';
  plant.style.height = plants[i].count + 'px';

  if(plants[i].count < 30){
    plant.classList.add('small')
    smallcontainer[0].append(plant)
  } else if (30 <= plants[i].count && plants[i].count < 100) {
    plant.classList.add('mid')
    midcontainer[0].append(plant)
  } else {
    plant.classList.add('large')
    container[0].append(plant)
  }
}

var toggle = document.getElementsByClassName('click')
var body = document.getElementsByTagName('body')

toggle[0].addEventListener('click', function(){
 if(body[0].classList.contains('proportionate-body')){
   body[0].classList.remove('proportionate-body')
   body[0].classList.add('grid')
 } else {
  body[0].classList.add('proportionate-body')
  body[0].classList.remove('grid')
  }



})
