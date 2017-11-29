var arr = [];
var winArr = [];
for (var i = 0; i < 16; i++) {
	arr.push(i);
}
winArr = arr;
winArr.shift();
winArr.push(0);
console.log(winArr);

function compareRandom(a, b) {
  return Math.random() - 0.5;
}

arr.sort(compareRandom);

var parent  = document.getElementById('parent');
for (var i = 0; i < 16; i++) {

	var div = document.createElement('div');
	div.setAttribute('data-number', arr[i]);
	div.setAttribute('class', 'child');
	if(arr[i] == 0) {
		var zero = div;
		zero.setAttribute('class', 'zero child');		
	}

	div.innerHTML = (arr[i]);	
	
	parent.appendChild(div);}

parent.onclick = function(event) {
	var target = event.target;
	var cells = document.getElementsByClassName('child');
	var newArr = [];
	for(var i = 0; i < cells.length; i++) {
		newArr.push(cells[i]);
		if(cells[i].getAttribute('data-number') == 0) {
			
		var newZero = (cells[i]);
		var zeroPosition = i;		
		}		
		if (cells[i].getAttribute('data-number') == target.getAttribute('data-number')){
			var targetPosition = i; 
		} 
	}
	
	if (((targetPosition - 1) == zeroPosition)||((targetPosition + 1) == zeroPosition)||
		((targetPosition + 4) == zeroPosition)||((targetPosition - 4) == zeroPosition)){	
		if((targetPosition==3||targetPosition==4)&&(zeroPosition==3||zeroPosition==4)){			
			
		}else if ((targetPosition==7||targetPosition==8)&&(zeroPosition==7||zeroPosition==8)) {
			
		}else if ((targetPosition==11||targetPosition==12)&&(zeroPosition==11||zeroPosition==12)){
			
		} else {
			exchangeElements(target, newZero);
			 var newCell = document.getElementsByClassName('child');
			 var resArr = [];
			 for (var i = 0; i < newCell.length; i++) {
			 	resArr[i] = parseInt(newCell[i].getAttribute('data-number'));

			 }
			 console.log(resArr	);
			 if (resArr == arr) {
			 	alert ('You Win!')
			 }
		}
		
		
	}
	
	
	
	//exchangeElements(target, newZero);
	
	//console.log(arr);
}


function exchangeElements(element1, element2) {

    var clonedElement1 = element1.cloneNode(true);
    var clonedElement2 = element2.cloneNode(true);
    
    element2.parentNode.replaceChild(clonedElement1, element2);
    element1.parentNode.replaceChild(clonedElement2, element1);
    
}

