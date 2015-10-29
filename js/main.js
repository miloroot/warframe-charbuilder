var WarframeModule = ( function( window, undefined ) {

/**************************************************
** Caching the DOM
***************************************************/
  var $theForm            = $( '.the-form' ),
      $frameList          = $( '.frame-list' ),
      $startTag           = '<option class="chosen-frame">',
      $endTag             = '</option>',
      $submitButton       = $( '.submit-button' ),
      $resetButton        = $( '.reset-button' ),
      $chosenFrame        = $( '.chosen-frame' ),
      $userName           = $( '.name' ),
      $frameMastery       = $( '.mastery' ),
      $buildResult        = $( '.build-result' ),
      $buildResultImage   = $( '.build-result-image' ),
      $usernameHolder     = $( '.username' ),
      $warframeHolder     = $( '.warframe' ),
      $masteryHolder      = $( '.masteryrank' ),
      $menu               = $( '.menu' ),
      $menuToggleButton   = $( '.toggle-menu' );

/**************************************************
** "Birth state"
***************************************************/
  $buildResult.hide();
  $menu.hide();

/**************************************************
** Methods called in other methods
***************************************************/
  function submitCharacter() {
    $.ajax({
      url: 'data/warframes.json',
      dataType: 'json',
      success: function( data ) {
        var thisFrame = $frameList.val();
        var image = "<img src=" + "http://n8k6e2y6.ssl.hwcdn.net/sites/all/themes/warframeWhiteReskin/images/warframes/" + thisFrame.toLowerCase() + "Large.png" + ">";
        $buildResultImage.html( image );
      },
      error: function( data ) {
        console.log( "error @ function submitCharacter: ", data );
      }
    });
    $usernameHolder.html( $userName.val() );
    $warframeHolder.html( $frameList.val() );
    $masteryHolder.html( "Mastery Rank: " + $frameMastery.val() );
    $buildResult.show();
  }

  function resetFields() {
    $userName.val( null );
    $frameMastery.val( null );
    $buildResult.hide();
  }

  function toggleMenu() {
    $menu.toggle();
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
    $menuToggleButton.on( 'click', toggleMenu );
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
