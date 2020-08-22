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


      for(k=0;k<names.length;k++){
        let commonname = document.createElement('span')
        commonname.innerHTML = 'Name(s):<br>' + names[k] + '<br>'
        information[i].append(commonname)
      }

  let speciesname = document.createElement('span')
  speciesname.innerHTML = '(<em>' + species + '</em> '

  information[i].append(speciesname)

  let genusname = document.createElement('span')
  genusname.innerHTML = '<em>' + genus + '</em>)<br>'
  information[i].append(genusname)

  let number = document.createElement('span')
  number.innerHTML = '<br>Supports ' + count + ' species of moths and butterflies<br>'
  information[i].append(number)

  // let moreinfo = document.createElement('span')
  // moreinfo.innerHTML = '<br><a class="more" href="' + url + '">Click here for more information</a>'
  // information[i].append(moreinfo)

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


  let body = document.body

//Slow as molasses
  // body.addEventListener('click', function(){
  //   for(j=0;j<plantimages.length;j++){
  //     plantimages[j].style.border = '1px solid white';
  //   }
  //   for(k=0;k<information.length;k++){
  //     information[k].classList.remove('showing')
  //   }
  // })

}
