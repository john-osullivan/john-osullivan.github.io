/**
 * Created by John on 3/28/2017.
 */

$(document).ready(function(){
    $('.sec3_5_btn.small36').on('click', function(){
        console.log('swal: ',swal);
        swal({
            title : 'Hold Your Horses!',
            text : "Our beta version is coming soon, but it hasn't been released yet.  Use the form to join our mailing list, we'll let you know once it's ready.  We promise not to bother you with email until then.",
            type : 'info',
            confirmButtonText : 'Got it!'
        });
    });
});