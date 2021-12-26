let cards = document.getElementsByClassName('plant')

for(i=0;i<cards.length;i++){

  let species = cards[i].getAttribute('id')

  for(j=0;j<plants.length;j++){
    if(species == plants[j].species){
      var names = plants[j].name
      var count = plants[j].count
    }
  }


  let number = document.createElement('span')
  number.innerHTML = '<img class="butterfly" src="https://img.icons8.com/ios-glyphs/30/000000/monarch-butterfly.png"/><span class="count">' + count + '</span><br><span class="name">' + names[0] + '</span>'
  number.classList.add('hover')
  cards[i].append(number)


}
