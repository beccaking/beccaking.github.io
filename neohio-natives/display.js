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


  container[0].append(plant)

  plant.style.backgroundImage = "url('./images/" + plants[i].species +".jpeg')"
  if(plants[i].count < 30){
    plant.style.width = plants[i].count*20 + 'px';
    plant.style.height = plants[i].count*20 + 'px';
  } else if (30 <= plants[i].count < 100) {
    plant.style.width = plants[i].count*5 + 'px';
    plant.style.height = plants[i].count*5 + 'px';
  } else {
    plant.style.width = plants[i].count + 'px';
    plant.style.height = plants[i].count + 'px';
  }

}
