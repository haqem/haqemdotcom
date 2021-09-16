/* Submit disable after 1 click */
$('[type=submit][name=submit]').on('click', (event) => {
    $(event.currentTarget).addClass('disabled');

    let text = $(event.currentTarget).text();
    let loader = '<div class="spinner-grow spinner-grow-sm"><span class="sr-only">Loading...</span></div>';
    $(event.currentTarget).html(loader);

    setTimeout(() => {
        $(event.currentTarget).removeClass('disabled');
        $(event.currentTarget).text(text);
    }, 3000);

});

/* Confirm delete handler */
$('body').on('click', '[data-confirm]', (event) => {
    let message = $(event.currentTarget).attr('data-confirm');

    if(!confirm(message)) return false;
});

/* Custom links */
$('[data-href]').on('click', event => {
    let url = $(event.currentTarget).data('href');

    fade_out_redirect({ url, full: true });
});

/* Enable tooltips everywhere */
$('[data-toggle="tooltip"]').tooltip();


$(".faq-p").click(function(){
    // $(this).find('img').animate({  textIndent: 0 }, {
    //     step: function(now,fx) {
    //         $(this).find('img').css('-webkit-transform','rotate('+now+'deg)'); 
    //     },
    //     duration:'slow'
    // },'linear');
    $(this).next().toggle(500);
});


function showLoader(){
    $(".full-page-loader").removeClass('d-none');
}
function hideLoader(){
    $(".full-page-loader").addClass('d-none');
}