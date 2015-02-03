/*
 (c) 2015, Beto Muniz
 Get my Talks.
*/

(function (win, moment, hbs) { 'use strict';

    function Talks() {
        this.helpers();
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
                    target = document.getElementById('talks');

                for (var i = 0; i < res.talks.length; i++) {
                    target.innerHTML += templatePresentOrFuture(res.talks[i]);
                };

                for (var i = 0; i < res.talks.length; i++) {
                   target.innerHTML += templatePast(res.talks[i]);
                };

            });
        },

        helpers: function () {

            hbs.registerHelper('specialTruncate', function(ctx) {
              return (ctx.length > 28) ? ctx.substring(0, 15)+"..."+ctx.substring(ctx.length - 20, ctx.length) : ctx;
            });

            hbs.registerHelper('dateToStr', function(ctx) {
              return (moment(ctx).isValid()) ? moment(ctx).format("YYYY • MMMM, DD") : ctx;
            });

            hbs.registerHelper('isPresentOrFuture', function(ctx, options) {
                var fnTrue=options.fn, fnFalse=options.inverse;
                return (moment(ctx) >= moment() || !moment(ctx).isValid()) ? fnTrue(this) : fnFalse(this);
            });
            hbs.registerHelper('isPast', function(ctx, options) {
                var fnTrue=options.fn, fnFalse=options.inverse;
                return (moment(ctx) < moment() && moment(ctx).isValid()) ? fnTrue(this) : fnFalse(this);
            });
        },

        get: function (url, callback) {
          var req = new XMLHttpRequest();
          req.onload = callback;
          req.open("GET", url, true);
          req.send();
        }
    };

    window.Talks = Talks;

})(window, moment, Handlebars);
