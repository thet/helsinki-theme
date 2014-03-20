// From: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
// Returns a random integer between min and max
// Using Math.round() will give you a non-uniform distribution!
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

jQuery(document).ready(function () {

    (function () {
        // portlet static randomizer
        var min = 1;
        var max = jQuery('.portlet-static-mach-mit dd a').length;
        var show = getRandomInt(min, max);
        jQuery('.portlet-static-mach-mit dd a:nth-child(' + show + ')').css('display', 'block');
    }());

    jQuery.ajax({
        url: '/get_current',
        dataType: 'json',
        success: function (data) {
            var show = data.show;
            var artist = data.artist;
            var title = data.title;
            var nop_str = show ? show : '';
            nop_str += nop_str && (artist || title) ? ': ' : '';
            nop_str += artist ? artist : '';
            nop_str += artist && title ? ' | ' : '';
            nop_str += title ? title : '';
            jQuery("#onair input").val(nop_str);
        }
    });

    jQuery("#calendar").datepicker({
        dateFormat: "yy.mm.dd",
        defaultDate: window.location.href.split('/').slice(4, 7).join('.'),
        onSelect: function (dateText, inst) {
            window.location = '/programm/' + dateText.split('.').join('/');
        }
    });


});
