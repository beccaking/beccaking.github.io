$(() => {
  for(let i=0;i<6;i++){
    const $card = $('<div>').addClass('card').text('Word');
    $('.container').append($card);
    //creates six cards

    $.ajax({
      url: "https://www.dictionaryapi.com/api/v3/references/collegiate/json/"+randomWord+"?key=5de59e6b-4d8a-470a-8cef-cb5fc9ed10f8"
    }).then(
      (data) => {
        console.log(data[0]);
      },
      (error) => {
        alert('error');
      }
    )
    //Calls the dictionary API
  }
})
