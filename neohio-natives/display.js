//size proportionate to the number of dependent species
//Resize original images to production size to speed up page load
//Intersperse divs with quotes from Dr. Tallamy about the importance of native species, facts from his books, plugs for his books, esp newest- Nature's Best Hope

let container = document.getElementsByClassName('photo-container');


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
  if(plants[i].count < 50){
    plant.classList.add('small')
    console.log('small')
  } else if(50 <= plants[i].count < 150){
    plant.classList.add('mid')
    console.log('mid')
  } else if(150 <= plants[i].count < 300){
    console.log('large')
    plant.classList.add('large')
  } else if (300 <= plants[i].count){
    plant.classList.add('extra-large')
    console.log('extra-large')
  }

  container[0].append(plant)

  plant.style.backgroundImage = "url('./images/" + plants[i].species +".jpeg')"

}
