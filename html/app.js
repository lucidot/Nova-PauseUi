window.addEventListener('load', function() {
})

window.addEventListener('message', function(event) {
  var v = event.data

  switch(v.action) {

      case 'show':
			ShowSettings()
      break;

  }
})



function ShowSettings() {

	$('.container').fadeIn()
  openUi = true
}

$(function(){
    $('#settings').click(function(){
      $.post('https://Nova-PauseUI/SendAction', JSON.stringify({action: 'settings'}));
      CloseAll()
    })
    $('#map').click(function(){
      $.post('https://Nova-PauseUI/SendAction', JSON.stringify({action: 'map'}));
      CloseAll()
    })
	$('#resume').click(function(){
      CloseAll()
    })
	
    $('#exit').click(function(){
		$.post('https://Nova-PauseUI/SendAction', JSON.stringify({action: 'exit'}));
      CloseAll()
    })
})

function CloseAll(){
  $('.container').fadeOut()
  $.post('https://Nova-PauseUI/exit', JSON.stringify({}));
  openUi = false
}
