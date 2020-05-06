
  function teste() {

  }
function onConfirm(buttonIndex) {
    if(buttonIndex == 1) {
        navigator.notification.alert( "A");
     }else {
  navigator.notification.alert( "B");
  }
}

  $(document).on('click', '#notification', function() {
    navigator.notification.alert("ASIDUHASIOUDHAISUDHASIUDH",teste, 'TITULO TESTE', 'SAir');
  });

  $(document).on('click', '#confirm', function() {
    navigator.notification.confirm("ESCOLHA A OU B",onConfirm,'TITULO TESTE',['A', 'B']); 
  });

$(document).on('click', '#beep', function() {
      navigator.notification.beep(3);
});

$(document).on('click', '#vibration', function() {
      navigator.vibrate(10000);
});


 function mostraMapa(lat, long) {
        L.mapquest.key = 'hLoK3mft3XTGgGTChJ5GmmweD1cL7IKA';

        var map = L.mapquest.map('map', {
          center: [lat, long],
          layers: L.mapquest.tileLayer('map'),
          zoom: 12
        });

        map.addControl(L.mapquest.control());
      }

$(document).on('click', '#local', function() {
   var onSuccess = function(position) {
   mostraMapa( position.coords.latitude, position.coords.longitude )
    };

    // onError Callback receives a PositionError object
    //
    function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }

    navigator.geolocation.getCurrentPosition(onSuccess, onError);
    
});

$(document).on('click', '#loc', function() {
     $('#lat').val(position.coords.latitude);
     $('#loc').val(position.coords.longitude);
});
