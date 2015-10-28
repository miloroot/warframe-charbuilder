var WarframeModule = ( function( window, undefined ) {

/**************************************************
** Caching the DOM
***************************************************/
  var $theForm = $( '.the-form' ),
      $frameList = $( '.frame-list' ),
      $startTag = '<option class="chosen-frame">',
      $endTag = '</option>',
      $submitButton = $( '.submit-button' ),
      $resetButton = $( '.reset-button' ),
      $chosenFrame = $( '.chosen-frame' ),
      $userName = $( '.name' ),
      $frameMastery = $( '.mastery' ),
      $buildResult = $( '.build-result' );

/**************************************************
** "Birth state"
***************************************************/
  $buildResult.hide();

/**************************************************
** Methods called in other methods
***************************************************/
  function submitCharacter() {
    $buildResult.html( $userName.val() + " // " + $frameList.val() + " - Mastery Rank: " + $frameMastery.val() );
    $buildResult.show();
  }

  function resetFields() {
    $userName.val( null );
    $frameMastery.val( null );
    $buildResult.hide();
  }

/**************************************************
** Methods called in the return{} object
***************************************************/
  function loadFrames() {
    $.ajax({
      url: 'data/warframes.json',
      dataType: 'json',
      success: function( data ) {
        for( var i = 0; i < data.length; i++ ) {
          $frameList.append( $startTag + data[i].name + $endTag );
        }
      },
      error: function( data ) {
        console.log( "error @ function loadFrames: ", data );
      }
    });
  }

  function clickHandlers() {
    $submitButton.on( 'click', submitCharacter );
    $resetButton.on( 'click', resetFields );
  }

/**************************************************
** The return{} object calling methods above
***************************************************/
  return {
    loadFrames : loadFrames,
    clickEvents : clickHandlers
  }

} )( window );

WarframeModule.loadFrames();
WarframeModule.clickEvents();
