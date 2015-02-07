var randomArr = require('random-array');
	
var collection = ['3413','3548','3569','3452','1523','1582','1574'];
var col = [];
/*	col = randomArr(collection, { 'picks' : 2});
	console.log(col.collection);
	console.log(col.winners);*/

	col = randomArr(collection);
	console.log(col.collection);
	console.log(col.winners);