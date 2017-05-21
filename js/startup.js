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

    $('#maitre-submit-button').on('click', function(){
        $('#maitre-content').css('display', 'block');
    });

    $('.social-feed-container').socialfeed({
        facebook : {
            accounts : ['@qipoco'],
            limit : 3,
            access_token : 'EAABbPx0tBz8BABkFla7OjBqhk0QFQwW449hz0l6SKQrc6tNK9Aib5JWJnMeyiBlrnk6hrm5da4LZBIQ81fCZC7bpYqYZB3QloYMT6TX5cdFA7jlASvlPaSTlDqUPA7oAD36yZAP8CVs8JBmRAt1BpQAOD6ZBAx47b2xzuhjmNUc55TpcCiGqXTYObUt5UElwZD'
        },
        callback : function(){
            console.log("The Facebook posts have allegedly all been fetched...");
        },
        show_media : true
        //twitter : {
        //    accounts : ['@qipo.io'],
        //    limit : 3,
        //    consumer_key : 'UupQInh3kg9mHSVaEb5tR8JUb',
        //    consumer_secret : 'tHH9SqLyIyvVcG4s8sQSy1xOwhLlfDpmD6u4FqouVG3OHzEvrq'
        //}
    })
});