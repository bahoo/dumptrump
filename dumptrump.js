if(window.top == window){

    var elem, parent;

    if(/facebook\.com/i.test(location.href)){

        parent = '*[data-pnref="story"] > div > div, *[data-referrer^="feed_stream"] > div > div, *[id^="stream_pagelet"]';
        elem = '.userContentWrapper '
    }

    if(elem){

        setInterval(function(){
            $(elem + '*:contains("Trump"), ' + elem + '*:contains("TRUMP")').each(function(i, e){
                $(e).closest(parent).fadeOut(150, function(e){
                    $(e).remove();
                });
            });
        }, 4000);
    }
}