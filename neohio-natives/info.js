let plantimages = document.getElementsByClassName('plant')

for(i=0;i<plantimages.length;i++){
  let species = plantimages[i].getAttribute('id')


  plantimages[i].insertAdjacentHTML('afterend', '<div class="information"></div>')

  let information = document.getElementsByClassName('information')

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
  number.innerHTML = '<br>Supports ' + count + ' Species<br>'
  information[i].append(number)

  let moreinfo = document.createElement('span')
  moreinfo.innerHTML = '<br><a class="more" href="' + url + '">Click here for more information from the National Wildlife Foundation</a>'
  information[i].append(moreinfo)

  let theinformation = information[i]

  plantimages[i].addEventListener('click', function(){
    if(theinformation.classList.contains('showing')){
      theinformation.classList.remove('showing')
      this.style.border = '1px solid lightgrey';
    } else {
      this.style.border = '3px solid white';
      theinformation.classList.add('showing')
    }
  })
}
