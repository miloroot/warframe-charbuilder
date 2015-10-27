var WarframeModule = ( function( window, undefined ) {

  var $theForm = $( '.the-form'),
      $frameList = $( '.frame-list'),
      $startTag = '<option>',
      $endTag = '</option>';

  function loadFrames() {
    $.ajax({
      url: 'data/warframes.json',
      dataType: 'json',
      success: function( data ) {
        for( var i = 0; i < data.length; i++ ) {
          $frameList.append( $startTag + data[i] + $endTag );
        }
      },
      error: function( data ) {
        console.log( "error @ function loadFrames: ", data );
      }
    });
  }

  return {
    loadFrames : loadFrames
  }

} )( window );

WarframeModule.loadFrames();
