$(function() {
    $(document).on('click','.Icon_metro-menu',function() {
        $('.sidebar').toggleClass('min-200');
        $('.main-content').toggleClass('main-content-100');
        $(this).toggleClass('right-nn')
    })
})