const Telegraf = require('telegraf');
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

const app = new Telegraf('573623710:AAFSnsKFENl4cUz38QDuoT0kUqdr0Yx5T_E');

const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://api.coinmarketcap.com/v2/ticker/?limit=5&structure=array', false);

xhr.send();

let resp = JSON.parse(xhr.responseText);

let message = /^[Кк]урс$/;

let botResponse = "";

for (let i = 0; i < resp.data.length; i++){

	botResponse += resp.data[i].symbol + " - " + resp.data[i].quotes.USD.price.toFixed(2) + "$  ";
}

app.hears(message, ctx => {

	return ctx.reply(botResponse);
});

app.startPolling();