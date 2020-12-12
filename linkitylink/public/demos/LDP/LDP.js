//Linear Differntial Privacy Demo!

//IMPORTS
import {UserData, UserDataReader} from './UserData.js';
import {Privatize, randomInt} from './Privatizer.js';
import {Histogram} from './Histogram.js';
import {Simulator} from './Simulator.js';

//Histograms
var H1 = new Histogram("chartNoisy", "Age Groups (with LDP)", 10, 10, 10);
var H2 = new Histogram("chartReal", "Age Groups (without LDP)", 10, 10, 10);

//Run when demo loads:
document.addEventListener("DOMContentLoaded", event=>{

	console.log("Loaded page!");
	//console.log(UserDataReader(1000))
	//console.log(H1.peek());
	//console.log(H2.peek());

	
	var animation = setInterval(myTimer, 10);
	var ticks = 0;
	var duration = 100;

	function myTimer() {
	  var T = randomInt(10,101);
	  H1.send(Privatize(T));
	  H2.send(T);
	  ticks += 1;

	  if (ticks >= duration) clearInterval(animation);
	}

});

//When table uploaded:

document.getElementById('fileupload').onchange = function(){
   UserDataReader(this,10);
}
