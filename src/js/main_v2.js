$(document).ready(function() {

    $("form#myForm").on("submit",function(event){

        event.preventDefault();

        var userData = $(".user-data").val();
        if ( userData != '' ) {
            // do stuff here...
            $("ul").append("<li class=\"openItem\"><img class=\"checkbx unchecked\" src=\"./img/unchecked_checkbox.png\" alt=\"unchecked checkbox\" height=\"17\" width=\"17\">" + userData + "<img class=\"trash\" src=\"./img/trash_recyclebin_empty_closed.png\" alt=\"trash can\" height=\"17\" width=\"17\"></li>");
        } else {
            alert('you did not enter an item to add');
        }

        $('#myForm')[0].reset();

        /*--------- Used when using a button to clear the form ---
         $(".reset").click(function() {
         $(this).closest('form').find("input[type=text], textarea").val("");
         });
         -----------*/



    });
/*--------------
    $('ul').on('click', 'li', function() {
        alert( $(this).text() );
    });
----------------*/

  console.log($('ul').on('click', '.checkbx', function( event ) {
      $( event.target ).closest( "li" ).toggleClass( "openItem closedItem" );
      $( event.target ).closest( "img" ).toggleClass( "unchecked checked" );
      $( event.target ).closest('.unchecked').attr('src','./img/unchecked_checkbox.png').attr('alt','unchecked checkbox');
      $( event.target ).closest('.checked').attr('src','./img/checked_checkbox.png').attr('alt','checked checkbox');

      // $( event.target ).closest('.checkbx').attr('src','./img/checked_checkbox.png');
      // $( event.target ).closest('.checked').attr('src','./img/checked_checkbox.png');

      //$( this ).attr('src','./img/checked_checkbox.png');
      // $("#cplusa").attr('src', 'images/cplusb.png'); // fixed source...
      // else
      // $("#cplusa").attr('src', 'images/cplus.gif'); // fixed source...
  //}

  }));

    console.log($('ul').on('click', '.trash', function( event ) {
        $( event.target ).closest( "li" ).remove();
    }));



/*
    console.log($('ul').on('click', '.button', function() {
        $( "li" ).remove(".openItem, .closedItem");
    }));
*/

    $(".button").click(function(){
        $("li").remove();
    });

    /*
        $( document ).on( "click", function( event ) {
            $( event.target ).closest( "li" ).toggleClass( "hilight" );
        });
    */



});
