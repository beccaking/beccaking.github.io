let plantimages = document.getElementsByClassName('plant')

for(i=0;i<plantimages.length;i++){
  let species = plantimages[i].getAttribute('id')

  let information = document.createElement('div')
  information.classList.add('information')

  let speciesname = document.createElement('span')
  speciesname.innerHTML = 'Species: <em>' + species +'</em>'

  information.append(speciesname)

  plantimages[i].append(information)


    for(j=0;j<plants.length;j++){
      if(species == plants[j].species){
        var genus = plants[j].genus
        var names = plants[j].name
        var count = plants[j].count
        var url = plants[j].url
      }
    }

  let genusname = document.createElement('span')
  genusname.innerHTML = '<br>Genus: <em>' + genus + '</em><br> <br>Common Name(s):<br>'
  information.append(genusname)

  for(k=0;k<names.length;k++){
    let commonname = document.createElement('span')
    commonname.innerHTML = names[k] + '<br>'
    information.append(commonname)
  }

  let number = document.createElement('span')
  number.innerHTML = '<br>Supports ' + count + ' Species<br>'
  information.append(number)

  let moreinfo = document.createElement('span')
  moreinfo.innerHTML = '<br><a class="more" href="' + url + '">Click here for more information from the National Wildlife Foundation</a>'
  information.append(moreinfo)

  let modal = document.getElementsByClassName('modal')

  plantimages[i].addEventListener('click', function(){
    if(information.classList.contains('showing')){
      this.style.zIndex='0'
      information.classList.remove('showing')
      modal[0].style.display = 'none'
      smallcontainer.style.zIndex='0';
      midcontainer.style.zIndex='0';
      container.style.zIndex='0';
    } else {
      this.style.zIndex='10';
      information.classList.add('showing')
      modal[0].style.display = 'block'
      smallcontainer.style.zIndex='-10';
      midcontainer.style.zIndex='-10';
      container.style.zIndex='-10';
    }
  })
}
