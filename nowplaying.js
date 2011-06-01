jQuery(document).ready(function() {
    jQuery.ajax({
        url: '/get_current',
        dataType: 'json',
        success: function(data) {
            var show = data.show;
            var artist = data.artist;
            var title = data.title;
            var nop_str = show ? show : '';
            nop_str += nop_str && (artist || title) ? ': ' : '';
            nop_str += artist ? artist : '';
            nop_str += artist && title ? ' | ' : '';
            nop_str += title ? title : '';
            jQuery("#onair input").val(nop_str);
        }});
});
