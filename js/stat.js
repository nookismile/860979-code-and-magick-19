'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 20;
var FONT_GAP = 15;
var BAR_WIDTH = 40;
var BAR_HEIGHT = 150;
var TEXT_Y = 260;
var TEXT_HEIGHT = 15;
var BAR_Y = TEXT_Y - GAP;
var GAP_BAR = 50;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', CLOUD_X + GAP, CLOUD_Y + GAP + FONT_GAP);
  ctx.fillText('Список результатов:', CLOUD_X + GAP, CLOUD_Y + GAP + (FONT_GAP * 2));

  function randomVal(min, max) {
    return Math.floor(Math.random() * (max - min) + 1) + min;
  }

  function barColor(playerName) {
    if (playerName === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'hsl(233, ' + randomVal(1, 100) + '%, 30%)';
    }
  }

  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {
    ctx.fillStyle = barColor(names[i]);
    ctx.fillText(names[i], CLOUD_X + GAP + (BAR_WIDTH + GAP_BAR) * i, TEXT_Y);
    ctx.fillText(Math.round(times[i]), CLOUD_X + GAP + (BAR_WIDTH + GAP_BAR) * i, CLOUD_HEIGHT - GAP - TEXT_HEIGHT - ((BAR_HEIGHT * times[i]) / maxTime));
    ctx.fillRect(CLOUD_X + GAP + (BAR_WIDTH + GAP_BAR) * i, BAR_Y, BAR_WIDTH, -((BAR_HEIGHT * times[i]) / maxTime));
  }
};
