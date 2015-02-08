/*
 (c) 2015, Beto Muniz
 Get my Talks.
*/

(function (win, moment, hbs) { 'use strict';

    function Talks() {
        if(document.getElementById('talks'))
            this.init('https://rawgit.com/obetomuniz/betomuniz.com/master/data/talks.json');
    }

    Talks.prototype = {

        init: function (url) {
            this.helpers();
            this.bind(url);
        },

        bind: function (url) {
            var that = this;
            that.get(url, function(){

                var res = JSON.parse(this.responseText),
                    sourcePresentOrFuture   = document.getElementById('talks-present-or-future').innerHTML,
                    sourcePast   = document.getElementById('talks-past').innerHTML,
                    templatePresentOrFuture = hbs.compile(sourcePresentOrFuture),
                    templatePast = hbs.compile(sourcePast),
                    target = document.getElementById('talks'),
                    resPresentOrFuture = resPast = {"talks": []},
                    resPast = {"talks": []};

                for (var i = 0; i < res.talks.length; i++) {
                    if (that.isPresentOrFuture(res.talks[i].date)) resPresentOrFuture.talks.push(res.talks[i]);
                    if (that.isPast(res.talks[i].date)) resPast.talks.push(res.talks[i]);
                };

                resPresentOrFuture["hasTalk"] = (resPresentOrFuture.talks.length > 0) ? true : false;
                resPast["hasTalk"] = (resPast.talks.length > 0) ? true : false;

                target.innerHTML = templatePresentOrFuture(resPresentOrFuture);
                target.innerHTML += templatePast(resPast);

            });
        },

        helpers: function () {

            hbs.registerHelper('specialTruncate', function(ctx) {
              return (ctx.length > 60) ? ctx.substring(0, 30)+"..."+ctx.substring(ctx.length - 30, ctx.length) : ctx;
            });

            hbs.registerHelper('dateToStr', function(ctx) {
              return (moment(ctx).isValid()) ? moment(ctx).format("YYYY • MMMM, DD") : ctx;
            });

            hbs.registerHelper('hasTalk', function(ctx, options) {
                var fnTrue=options.fn, fnFalse=options.inverse;
                return (ctx) ? fnTrue(this) : fnFalse(this);
            });

            hbs.registerPartial("talk", document.getElementById('talk-template').innerHTML);
        },

        get: function (url, callback) {
          var req = new XMLHttpRequest();
          req.onload = callback;
          req.open("GET", url, true);
          req.send();
        },

        isPresentOrFuture: function (ctx) {
            return (moment(ctx) >= moment() || !moment(ctx).isValid()) ? true : false;
        },

        isPast: function (ctx) {
            return (moment(ctx) < moment() && moment(ctx).isValid()) ? true : false;
        }
    };

    window.Talks = Talks;

})(window, moment, Handlebars);
