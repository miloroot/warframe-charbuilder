var WarframeModule = ( function( window, undefined ) {

  var $theForm = $( '.the-form'),
      $frameList = $( '.frame-list');

  function loadFrames() {
    $.ajax({
      url: 'data/warframes.json',
      dataType: 'json',
      success: function( data ) {
        console.log( "warframes: ", data );
      },
      error: function( data ) {
        console.log( "error: ", data );
      }
    });
  }

  return {
    loadFrames : loadFrames
  }

} )( window );

WarframeModule.loadFrames();
