//size proportionate to the number of dependent species
//Resize original images to production size to speed up page load
//Intersperse divs with quotes from Dr. Tallamy about the importance of native species, facts from his books, plugs for his books, esp newest- Nature's Best Hope

var container = document.getElementsByClassName('photo-container');
var midcontainer = document.getElementsByClassName('mid-photo-container');
var smallcontainer = document.getElementsByClassName('small-photo-container');


// for (i=0;i<plants.length;i++){
//   let randomIndex = Math.floor(Math.random()*i)
//   let value1 = plants[i]
//   let value2 = plants[randomIndex]
//   plants[i] = value2
//   plants[randomIndex] = value1
// }

for (i=0;i<plants.length;i++){

  let plant = document.createElement('div')
  plant.classList.add('plant')
  plant.classList.add(plants[i].genus)
  plant.setAttribute('id', plants[i].genus)
  plant.setAttribute('tabindex', '0')

  plant.style.backgroundImage = "url('./images/" + plants[i].genus +".jpeg')"
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

var proportionview = document.getElementsByClassName('click-proportion')
var gridview = document.getElementsByClassName('click-grid')
var body = document.getElementsByTagName('body')

$('.click-proportion').on('click keypress', function(event){
  if(event.keyCode == 13 || $(this).data('clicked', true)){
     body[0].classList.add('proportionate-body')
     body[0].classList.remove('grid')
  }
 })

  $('.click-grid').on('click keypress', function(event){
    console.log('here')
    if(event.keyCode == 13 || $(this).data('clickd', true)){
      body[0].classList.remove('proportionate-body')
      body[0].classList.add('grid')
     }
   })

   let cards = document.getElementsByClassName('plant')

   for(i=0;i<cards.length;i++){

     let genus = cards[i].getAttribute('id')

     for(j=0;j<plants.length;j++){
       if(genus == plants[j].genus){
         var names = plants[j].name
         var count = plants[j].count
       }
     }


     let number = document.createElement('span')
     number.innerHTML = '<img class="butterfly" src="./images/monarch-butterfly.png"/><span class="count">' + count + '</span><br><span class="name">' + names[0] + '</span>'
     number.classList.add('hover')
     cards[i].append(number)


   }
