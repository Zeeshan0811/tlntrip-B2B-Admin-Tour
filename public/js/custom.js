$(function () {

});

$(document).ready(function () {
    $('[data-toggle="popover"]').popover({
        trigger: 'focus'
    });
    $('img.map').maphilight({
        fill: true,
        fillColor: 'ff0000',
        fillOpacity: 0.2,
        stroke: true,
        strokeColor: 'ff0000',
        strokeOpacity: 1,
        strokeWidth: 1,
        fade: true,
        alwaysOn: false,
        neverOn: false,
        groupBy: false,
        wrapClass: true,
        shadow: false,
        shadowX: 0,
        shadowY: 0,
        shadowRadius: 6,
        shadowColor: '000000',
        shadowOpacity: 0.8,
        shadowPosition: 'outside',
        shadowFrom: false
    });
    $('.popover-dismiss').popover({
        trigger: 'focus'
    });
});

