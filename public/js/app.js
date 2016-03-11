$(document).ready(function(){
    $('.product').first().addClass('is-active');
    $(".product-indicator[data-uuid='"+$('.product').first().data('uuid')+"']").addClass('is-active');

    $('.product-indicator').on('click', function(e){
        var id = $(e.currentTarget).data('uuid');
        $('.product-indicator-active').removeClass('is-active');
        $(e.currentTarget).addClass('is-active');
        $('.product.product-active').removeClass('is-active');
        $(".product[data-uuid='"+id+"']").addClass('is-active');
    });
});
