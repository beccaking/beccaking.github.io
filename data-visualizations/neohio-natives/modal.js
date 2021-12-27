let plantimages = document.getElementsByClassName('plant')

for(i=0;i<plantimages.length;i++){
  let genus = plantimages[i].getAttribute('id')


  plantimages[i].insertAdjacentHTML('afterend', '<div class="information"></div>')

  let information = document.getElementsByClassName('information')

  let currentImage = plantimages[i]


    for(j=0;j<plants.length;j++){
      if(genus == plants[j].genus){
        var species = plants[j].species
        var names = plants[j].name
        var count = plants[j].count
        var url = plants[j].url
      }
    }

    let modalheader = document.createElement('div')
    modalheader.classList.add('modal-header')
    information[i].append(modalheader)

    let nameblock = document.createElement('div')
    nameblock.classList.add('name-block')
    modalheader.append(nameblock)

    let scientificname = document.createElement('span')
    scientificname.classList.add('genus')
    scientificname.innerHTML = '<em>' + genus + ' ' + species + ' </em> '
    nameblock.append(scientificname)

      for(k=0;k<names.length;k++){
        let commonname = document.createElement('span')
        commonname.classList.add('common-wrapper')
        if(names.length > 1){
          if(k == 0){
            commonname.innerHTML = 'Common name(s): <span class="common">' + names[k] + '</span>, '
          } else if(k == names.length - 1){
            commonname.innerHTML += '<span class="common">' + names[k] + '</span>'
          } else {
            commonname.innerHTML += '<span class="common">' + names[k] + '</span>, '
          }
        } else {
          commonname.innerHTML = 'Common name(s): <span class="common">' + names[k] + '</span>'
        }
        nameblock.append(commonname)
      }

  // let moreinfo = document.createElement('span')
  // moreinfo.innerHTML = '<br><a class="more" href="' + url + '">Click here for more information</a>'
  // information[i].append(moreinfo)

  let image = document.createElement('img')
  image.setAttribute('src', './images/'+ genus + '.jpeg')
  image.classList.add('thumbnail')
  modalheader.append(image)

  let close = document.createElement('span')
  close.innerHTML = 'X'
  close.classList.add('close')
  modalheader.append(close)

  let number = document.createElement('span')
  number.classList.add('number-statement')
  number.innerHTML = '<br><em>' + genus + ' ' + species + '</em> supports ' + count + ' species of moths and butterflies.<br>'
  information[i].append(number)

  let theinformation = information[i]
  let modalbackdrop = document.getElementById('modal-backdrop')

  plantimages[i].addEventListener('click', function(event){
      event.stopPropagation();


        // //do something about duplicate images when you click twice
        //
        // let baseUrlKey = 'https://api.gbif.org/v1/species?name=' + species
        // let taxonKey = ''
        //
        // $.ajax({
        //   url: baseUrlKey,
        //   crossDomain: true,
        //   success: function(data){
        //     taxonKey = data.results[1].taxonID
        //   },
        //   error: function(data){
        //     console.log('Error fetching taxon key')
        //   }
        // })
        //
        // let baseUrlMap = 'https://api.gbif.org/v2/map/occurrence/density/0/0/0@1x.png?srs=EPSG:3857&style=greenHeat.point&taxonKey='
        //
        // $.ajax({
        //   url: baseUrlMap + taxonKey,
        //   crossDomain: true,
        //   success: function(data){
        //     let map = document.createElement('img')
        //     map.setAttribute('src', baseUrlMap + taxonKey)
        //     theinformation.append(map)
        //   },
        //   error: function(data){
        //     console.log('Error fetching map')
        //   }
        // })

      if(theinformation.classList.contains('showing')){
        theinformation.classList.remove('showing')
        modalbackdrop.style.display = 'none'
      } else {
        for(k=0;k<information.length;k++){
          information[k].classList.remove('showing')
        }
        theinformation.classList.add('showing')
        modalbackdrop.style.display = 'block'
      }
  })

  close.addEventListener('click', function(event){
      event.stopPropagation();
      theinformation.classList.remove('showing')
      modalbackdrop.style.display = 'none'
  })

  modalbackdrop.addEventListener('click', function(event){
    event.stopPropagation();
    theinformation.classList.remove('showing')
    modalbackdrop.style.display = 'none'
  })

  plantimages[i].addEventListener('keypress', function(event){
    if(event.keyCode == 13){
      event.stopPropagation();
      if(theinformation.classList.contains('showing')){
        theinformation.classList.remove('showing')
        modalbackdrop.style.display = 'none'
      } else {
        for(k=0;k<information.length;k++){
          information[k].classList.remove('showing')
        }
        theinformation.classList.add('showing')
        modalbackdrop.style.display = 'block'
      }
    }
  })

    close.addEventListener('keypress', function(event){
      if(event.keyCode == 13){
        event.stopPropagation();
        theinformation.classList.remove('showing')
        modalbackdrop.style.display = 'none'
      }
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
