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

var smalls = document.getElementsByClassName('small')
for (i=0;i<smalls.length;i++){
    smalls[i].classList.add('grid-small')
  }

var mids = document.getElementsByClassName('mid')
  for (i=0;i<mids.length;i++){
      mids[i].classList.add('grid-mid')
    }

var larges = document.getElementsByClassName('large')

    for (i=0;i<larges.length;i++){
      larges[i].classList.add('grid-large')
    }

var toggle = document.getElementsByClassName('click')
var proportionate = document.getElementsByClassName('proportionate')
var body = document.getElementsByTagName('body')

toggle[0].addEventListener('click', function(){
 if(body[0].classList.contains('proportionate-body')){
   body[0].classList.remove('proportionate-body')
   proportionate[0].style.display ='none'
   container[0].style.display = 'flex'
   midcontainer[0].style.display = 'flex'
   smallcontainer[0].style.display = 'flex'

   for (i=0;i<smalls.length;i++){
       smalls[i].classList.add('grid-small')
     }
   for (i=0;i<mids.length;i++){
       mids[i].classList.add('grid-mid')
     }
   for (i=0;i<larges.length;i++){
       larges[i].classList.add('grid-large')
     }
 } else {
  body[0].classList.add('proportionate-body')
  proportionate[0].style.display = 'flex'
  container[0].style.display = 'none'
  midcontainer[0].style.display = 'none'
  smallcontainer[0].style.display = 'none'
  for (i=0;i<smalls.length;i++){
      smalls[i].classList.remove('grid-small')
    }
  for (i=0;i<mids.length;i++){
      mids[i].classList.remove('grid-mid')
    }
  for (i=0;i<larges.length;i++){
      larges[i].classList.remove('grid-large')
    }

    for(i=0;i<plants.length;i++){
      var plantcard = document.createElement('div')
      plantcard.classList.add('plant')
      plantcard.classList.add(plants[i].species)
      plantcard.setAttribute('id', plants[i].species)
      var count = plants[i].count
      plantcard.style.width = plants[i].count + 'px';
      plantcard.style.height = plants[i].count + 'px';
      plantcard.style.backgroundImage = "url('./images/" + plants[i].species +".jpeg')"

      plantcard.classList.add('proportionate-plant')
      proportionate[0].append(plantcard)
    }
  }

  let plantimages = document.getElementsByClassName('plant')

  for(i=0;i<plantimages.length;i++){
    let species = plantimages[i].getAttribute('id')


    plantimages[i].insertAdjacentHTML('afterend', '<div class="information"></div>')

    let information = document.getElementsByClassName('information')

    let currentImage = plantimages[i]


      for(j=0;j<plants.length;j++){
        if(species == plants[j].species){
          var genus = plants[j].genus
          var names = plants[j].name
          var count = plants[j].count
          var url = plants[j].url
        }
      }

      let close = document.createElement('span')
      close.innerHTML = 'X'
      close.classList.add('close')
      information[i].append(close)

    let speciesname = document.createElement('span')
    speciesname.innerHTML = 'Species: <em>' + species +'</em>'

    information[i].append(speciesname)

    let genusname = document.createElement('span')
    genusname.innerHTML = '<br>Genus: <em>' + genus + '</em><br> <br>Common Name(s):<br>'
    information[i].append(genusname)

    for(k=0;k<names.length;k++){
      let commonname = document.createElement('span')
      commonname.innerHTML = names[k] + '<br>'
      information[i].append(commonname)
    }

    let number = document.createElement('span')
    number.innerHTML = '<br>Supports ' + count + ' species of moths and butterflies<br>'
    information[i].append(number)

    let moreinfo = document.createElement('span')
    moreinfo.innerHTML = '<br><a class="more" href="' + url + '">Click here for more information</a>'
    information[i].append(moreinfo)

    let image = document.createElement('img')
    image.setAttribute('src', './images/'+species + '.jpeg')
    image.classList.add('thumbnail')
    information[i].append(image)



    let theinformation = information[i]

    plantimages[i].addEventListener('click', function(event){
      event.stopPropagation();
      if(theinformation.classList.contains('showing')){
        this.style.border = '1px solid white';
        theinformation.classList.remove('showing')
      } else {
        for(j=0;j<plantimages.length;j++){
          plantimages[j].style.border = '1px solid white';
        }
        for(k=0;k<information.length;k++){
          information[k].classList.remove('showing')
        }
        this.style.border = '3px solid white';
        theinformation.classList.add('showing')
      }
    })

    close.addEventListener('click', function(event){
      event.stopPropagation();
      currentImage.style.border = '1px solid white';
      theinformation.classList.remove('showing')
    })


  }

})
