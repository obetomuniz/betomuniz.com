(function (win) {
    'use strict';

    var OTemplate = function () {};

    OTemplate.prototype.prepareData = function(data, query, key) {
      var objs = [], re = new RegExp("^"+this.filter(query));

      for (var i = 0; i < data.length; i++)
        if (re.test(this.filter(data[i][key])))
            objs.push(data[i]);

      return objs;
    };

    OTemplate.prototype.prepareTemplate = function(template, key, value) {
      var item, tpl = document.getElementById(template).innerHTML;

      for (var i = 0; i < key.length; i++) {
        var $key = (typeof key[i] === 'string') ? key[i] : key[i].key,
            re = new RegExp('{{'+$key+'}}','gi');

        item = (!item) ? tpl.replace(/\s+/g, ' ').replace(re, value[i]) : item.replace(/\s+/g, ' ').replace(re, value[i]);
      }
      return item;
    };

    OTemplate.prototype.filter = function(str) {
     var rgx = [
        {re:/[\xC0-\xC6]|&Agrave;|&Aacute;|&Acirc;|&Atilde;|&Auml;/g, ch:'A'},
        {re:/[\xE0-\xE6]|&agrave;|&aacute;|&acirc;|&atilde;|&auml;/g, ch:'a'},
        {re:/[\xC8-\xCB]|&Egrave;|&Eacute;|&Ecirc;|&Etilde;|&Euml;/g, ch:'E'},
        {re:/[\xE8-\xEB]|&egrave;|&eacute;|&ecirc;|&etilde;|&euml;/g, ch:'e'},
        {re:/[\xCC-\xCF]|&Igrave;|&Iacute;|&Icirc;|&Itilde;|&Iuml;/g, ch:'I'},
        {re:/[\xEC-\xEF]|&igrave;|&iacute;|&icirc;|&itilde;|&iuml;/g, ch:'i'},
        {re:/[\xD2-\xD6]|&Ograve;|&Oacute;|&Ocirc;|&Otilde;|&Ouml;/g, ch:'O'},
        {re:/[\xF2-\xF6]|&ograve;|&oacute;|&ocirc;|&otilde;|&ouml;/g, ch:'o'},
        {re:/[\xD9-\xDC]|&Ugrave;|&Uacute;|&Ucirc;|&Utilde;|&Uuml;/g, ch:'U'},
        {re:/[\xF9-\xFC]|&ugrave;|&uacute;|&ucirc;|&utilde;|&uuml;/g, ch:'u'},
        {re:/[\xC7]|&Ccedil;/g, ch:'C'},
        {re:/[\xE7]|&ccedil;/g, ch:'c'}
      ];

      for(var i=0; i < rgx.length; i++)
        str = str.replace(rgx[i].re, rgx[i].ch).toLowerCase();

      return str;
    };

    win.OTemplate = OTemplate;

})(window);
