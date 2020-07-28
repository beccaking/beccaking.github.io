let plantimages = document.getElementsByClassName('plant')

for(i=0;i<plantimages.length;i++){
  let species = plantimages[i].getAttribute('id')


  plantimages[i].insertAdjacentHTML('afterend', '<div class="information"></div>')

  let information = document.getElementsByClassName('information')

  let close = document.createElement('span')
  close.innerHTML = 'X'
  close.classList.add('close')
  let currentImage = plantimages[i]
  close.addEventListener('click', function(){
    theinformation.classList.remove('showing')
    currentImage.style.border = '1px solid lightgrey';

    for (l=0;l<plantimages.length;l++){
      plantimages[l].style.zIndex='0'
    }

        modal[0].style.display = 'none'
  })

  information[i].append(close)

    for(j=0;j<plants.length;j++){
      if(species == plants[j].species){
        var genus = plants[j].genus
        var names = plants[j].name
        var count = plants[j].count
        var url = plants[j].url
      }
    }

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

  let modal = document.getElementsByClassName('modal')
  let theinformation = information[i]

  plantimages[i].addEventListener('click', function(){
      this.style.border = '3px solid white';
      theinformation.classList.add('showing')
      for (m=0;m<plantimages.length;m++){
        plantimages[m].style.zIndex='-10'
    }
    modal[0].style.display = 'block'
  })

}
