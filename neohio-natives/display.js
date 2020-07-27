//size proportionate to the number of dependent species
//Resize original images to production size to speed up page load
//Intersperse divs with quotes from Dr. Tallamy about the importance of native species, facts from his books, plugs for his books, esp newest- Nature's Best Hope

let container = document.getElementsByClassName('photo-container');
let midcontainer = document.getElementsByClassName('mid-photo-container');
let smallcontainer = document.getElementsByClassName('small-photo-container');


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
  if(plants[i].count < 30){
    plant.style.width = plants[i].count + 'px';
    plant.style.height = plants[i].count + 'px';
    plant.classList.add('small')
    smallcontainer[0].append(plant)
  } else if (30 <= plants[i].count && plants[i].count < 100) {
    plant.style.width = plants[i].count + 'px';
    plant.style.height = plants[i].count + 'px';
    plant.classList.add('mid')
    midcontainer[0].append(plant)
  } else {
    plant.style.width = plants[i].count + 'px';
    plant.style.height = plants[i].count + 'px';
    plant.classList.add('large')
    container[0].append(plant)
  }

}

var smalls = document.getElementsByClassName('small')
var enlarge = document.getElementsByClassName('click')

enlarge[0].addEventListener('click', function(){
  if(smallcontainer[0].classList.contains('grid')){
    for (i=0;i<smalls.length;i++){
      smalls[i].classList.remove('grid-small')
    }
    smallcontainer[0].classList.remove('grid')
  } else {
    for (i=0;i<smalls.length;i++){
      smalls[i].classList.add('grid-small')
    }
    smallcontainer[0].classList.add('grid')
  }
})

var mids = document.getElementsByClassName('mid')
var enlargemid = document.getElementsByClassName('click-mid')

enlargemid[0].addEventListener('click', function(){
  if(midcontainer[0].classList.contains('grid')){
    for (i=0;i<mids.length;i++){
      mids[i].classList.remove('grid-mid')
    }
    midcontainer[0].classList.remove('grid')
  } else {
    for (i=0;i<mids.length;i++){
      mids[i].classList.add('grid-mid')
    }
    midcontainer[0].classList.add('grid')
  }
})

var larges = document.getElementsByClassName('large')
var enlargelarge = document.getElementsByClassName('click-large')

enlargelarge[0].addEventListener('click', function(){
  if(container[0].classList.contains('grid')){
    for (i=0;i<larges.length;i++){
      larges[i].classList.remove('grid-large')
    }
    container[0].classList.remove('grid')
  } else {
    for (i=0;i<larges.length;i++){
      larges[i].classList.add('grid-large')
    }
    container[0].classList.add('grid')
  }
})
