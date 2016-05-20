$(document).ready(function() {

    $("form").on("submit",function(event){

        event.preventDefault();

        var userData = $(".user-data").val();
        if ( userData != '' ) {
            // do stuff here...
            $("ul").append("<li class=\"openItem\"><img class=\"checkbx\" src=\"./img/unchecked_checkbox.png\" alt=\"unchecked checkbox\" height=\"17\" width=\"17\">" + userData + "<img class=\"trash\" src=\"./img/trash_recyclebin_empty_closed.png\" alt=\"trash can\" height=\"17\" width=\"17\"></li>");
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

  console.log($('ul').on('click', '.checkbx', function() {
        alert( $(this).text() );
    }));

});
