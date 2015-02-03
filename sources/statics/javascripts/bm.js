document.addEventListener('DOMContentLoaded', function() {

  setHighlight();

  if (document.getElementById('game')) {
    var teclas = [];
    var konami = '38,38,40,40,37,39,37,39,66,65';

    document.addEventListener('keydown', function(e) {
      e.preventDefault();
      teclas.push(e.keyCode);
      if (teclas.toString().indexOf(konami) >= 0) {
        var pong = new Pong();

        pong.init();
        pong.play();
        document.querySelector("body").classList.add('pong-onplay');
        teclas = [];

      }
    });
  }
});

function setHighlight() {
  var code = document.querySelectorAll("pre code");
  for (i = 0; i < code.length; i++) {
    hljs.highlightBlock(code[i]);
  }
}

function Pong() {
  _this = this;

  this.player = function() {
    this.score = 0,
      this.left = false,
      this.right = false;
    this.paddle = {
      x: 0,
      y: 0,
      w: 5,
      h: 80
    };
  }

  this.init = function(selector) {
    _this.ctx = document.querySelector("#canvas").getContext("2d"),
      _this.WIDTH = document.querySelector("#canvas").width,
      _this.HEIGHT = document.querySelector("#canvas").height,
      _this.gravity = 4,
      _this.wind = 10,
      _this.p1 = new _this.player(),
      _this.p1.id = 1,
      _this.p2 = new _this.player(),
      _this.p2.id = 2,
      _this.p2.paddle.x = (_this.WIDTH - 5);

    document.addEventListener('keydown', _this.onKeyDown);
    document.addEventListener('keyup', _this.onKeyUp);
  }

  _this.play = function() {
    if (!_this.playing) {
      _this.timer = setInterval(_this.animate, 25);
      _this.playing = true;
    } else {
      clearInterval(_this.timer);
      _this.playing = false;
    }
  }


  var bgPong = new Image();
  bgPong.src = "/static/images/bola.png";
  this.circle = function(x, y, r) {
    _this.ctx.drawImage(bgPong, x, y);
    _this.ctx.beginPath();
    _this.ctx.rect(x, y, 20, 20);
    _this.ctx.closePath();
  }


  var bgP1 = new Image();
  bgP1.src = "/static/images/paddle-1.png";
  this.P1 = function(x, y, w, h) {
    _this.ctx.drawImage(bgP1, x, y);
    _this.ctx.beginPath();
    _this.ctx.rect(x, y, w, h);
    _this.ctx.closePath();
  }

  var bgP2 = new Image();
  bgP2.src = "/static/images/paddle-2.png";
  this.P2 = function(x, y, w, h) {
    _this.ctx.drawImage(bgP2, x, y);
    _this.ctx.beginPath();
    _this.ctx.rect(x, y, w, h);
    _this.ctx.closePath();
  }

  this.clear = function() {
    _this.ctx.clearRect(0, 0, _this.WIDTH, _this.HEIGHT);
  }

  this.bola = {
    x: 8,
    y: 50,
    r: 10
  }

  /* Game rules */
  this.animate = function() {
    /* limpa e redesenha a bola */
    _this.clear();
    _this.circle(_this.bola.x, _this.bola.y, _this.bola.r);

    var speed = 4;

    /* player 1 */
    if (_this.p1.right && _this.p1.paddle.y < (_this.HEIGHT - _this.p1.paddle.h)) _this.p1.paddle.y += speed;
    else if (_this.p1.left && _this.p1.paddle.y > 0) _this.p1.paddle.y -= speed;
    _this.P1(_this.p1.paddle.x, _this.p1.paddle.y, _this.p1.paddle.w, _this.p1.paddle.h);

    /* bot */
    var delay = 300;
    if (_this.bola.y < (_this.p2.paddle.y + (_this.p2.paddle.h / 3)) & _this.p2.paddle.y > 0 && _this.bola.x > delay) {
      _this.p2.paddle.y -= (speed + 1);
    } else if (_this.bola.y > (_this.p2.paddle.y - (_this.p2.paddle.h / 3)) && _this.p2.paddle.y < (_this.HEIGHT - _this.p2.paddle.h) && _this.bola.x > delay) {
      _this.p2.paddle.y += (speed + 1);
    }
    _this.P2(_this.p2.paddle.x, _this.p2.paddle.y, _this.p2.paddle.w, _this.p2.paddle.h);

    /* saida lateral */
    if (_this.bola.y + _this.gravity > (_this.HEIGHT - 14) || _this.bola.y + _this.gravity < 0) {
      _this.gravity = -_this.gravity;
    }

    if (_this.bola.x + _this.wind > (_this.WIDTH - 14)) {
      if (_this.bola.y > _this.p2.paddle.y && _this.bola.y < (_this.p2.paddle.y + _this.p2.paddle.h)) {
        _this.wind = -_this.wind;
        _this.gravity = _this.randomize();
      } else {
        _this.p1.score++;
        document.querySelector('#score-1 span').innerHTML = _this.p1.score;
        _this.bola.x = ((_this.WIDTH - 30) / 2),
        _this.bola.y = (_this.HEIGHT / 2);
        _this.wind = -_this.wind;
        _this.play();
      }
    } else if (_this.bola.x + _this.wind < 0) {
      if (_this.bola.y > _this.p1.paddle.y && _this.bola.y < (_this.p1.paddle.y + _this.p1.paddle.h)) {
        _this.wind = -_this.wind;
        _this.gravity = _this.randomize();
      } else {
        _this.p2.score++;
        document.querySelector('#score-2 span').innerHTML = _this.p2.score;
        _this.bola.x = ((_this.WIDTH - 30) / 2),
        _this.bola.y = (_this.HEIGHT / 2);
        _this.wind = -_this.wind;
        _this.play();
      }
    }

    _this.bola.y += _this.gravity;
    _this.bola.x += _this.wind;
  }

  _this.randomize = function(max) {
    var n = Math.floor((Math.random() * 11) + 1);
    if (Math.floor((Math.random() * 2)) > 0) {
      return n;
    } else {
      return -n;
    }
  }

  /* Keydown events */
  _this.onKeyDown = function(evt) {
    switch (evt.keyCode) {
      /* seta direita */
      case 40:
        _this.p1.right = true;
        break;
        /* seta esquerda */
      case 38:
        _this.p1.left = true;
        break;
        /* espaco */
      case 32:
        _this.play();
        break;
      case 27:
        document.querySelector("body").classList.remove('pong-onplay');
        break;
    }

  }

  /* Keyup events */
  _this.onKeyUp = function(evt) {
    switch (evt.keyCode) {
      case 40:
        _this.p1.right = false;
        break;
      case 38:
        _this.p1.left = false;
        break;
    }
  }
};
