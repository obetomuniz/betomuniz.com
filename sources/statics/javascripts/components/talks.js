/*
 (c) 2015, Beto Muniz
 Get my Talks.
*/

(function (win, moment) { 'use strict';

    function MyTalks(target) {
        this.init('/static/data/talks.json', target);
    }

    MyTalks.prototype = {

        init: function (url, target) {
            var that = this;
            that.get(url, function(){

                var res = JSON.parse(this.responseText),
                    otemplate = new OTemplate(),
                    content = [];

                for (var i = 0; i < res.talks.length; i++) {
                    content.push(otemplate.prepareTemplate(
                          target+'-template', [
                            {key: "date"},
                            {key: "event"},
                            {key: "event_url"},
                            {key: "location"},
                            {key: "location_url"},
                            {key: "talk"},
                            {key: "talk_url"}
                           ], [
                            that.dateToStr(res.talks[i].date),
                            res.talks[i].event,
                            res.talks[i].event_url,
                            that.trunk(res.talks[i].location),
                            res.talks[i].location_url,
                            that.trunk(res.talks[i].talk),
                            (res.talks[i].talk_url) ? res.talks[i].talk_url : false
                          ]
                        )
                    );
                };
                document.getElementById(target).innerHTML = content.join('');

            });
        },

        get: function (url, callback) {
          var req = new XMLHttpRequest();
          req.onload = callback;
          req.open("GET", url, true);
          req.send();
        },
        
        dateToStr: function (ctx) {
            return moment(ctx).format("YYYY • MMMM, DD");
        },

        trunk: function (ctx) {
          return (ctx.length > 28) ? ctx.substring(0, 15)+"..."+ctx.substring(ctx.length - 15, ctx.length) : ctx;
        }
    };

    window.MyTalks = MyTalks;

})(window, moment);
