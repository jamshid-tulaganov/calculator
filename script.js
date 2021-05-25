 function $(x){
 	return document.querySelector(x)
 }
// arfimetika
var elEnterLine = $('.enter__line');
var elReset = $('.reset')
var elPlusOrMinus = $('.plus_or_minus')
var elPercent = $('.percent')
var elDivision = $('.division')
var elMultiply = $('.multiply')
var elMinus = $('.minus')
var elPlus = $('.plus')
var elEqual = $('.equal')
var elNumberDelete = $('.number__delete')
var elResultCalc1 = $('.result__calc1')
var elResultSymbol = $('.result__calc')
var elResultNumber = $('.result__number')
var elShowArf = $('.show__arf')
 // result
 var elInputEnter = $('.enter__input')
 var elResultBox = $('.result__box')
 // numbers buttons
 var elNumber1 = $('.num_1')
 var elNumber2 = $('.num_2')
 var elNumber3 = $('.num_3')
 var elNumber4 = $('.num_4')
 var elNumber5 = $('.num_5')
 var elNumber6 = $('.num_6')
 var elNumber7 = $('.num_7')
 var elNumber8 = $('.num_8')
 var elNumber9 = $('.num_9')
 var elNumber0 = $('.num_0')
 var elPoint = $('.point');

// enter the numbers


elNumber1.addEventListener('click',function(){
	if(elEnterLine.style.display == 'none'){
		elResultBox.value += 1;
	}
	else{
		elInputEnter.value += 1;
	}
})
elNumber2.addEventListener('click',function(){
	if(elEnterLine.style.display == 'none'){
		elResultBox.value += 2;
	}
	else{
		elInputEnter.value += 2;
	}
})
elNumber3.addEventListener('click',function(){
	if(elEnterLine.style.display == 'none'){
		elResultBox.value += 3;
	}
	else{
		elInputEnter.value += 3;
	}

})
elNumber4.addEventListener('click',function(){
	if(elEnterLine.style.display == 'none'){
		elResultBox.value += 4;
	}
	else{
		elInputEnter.value += 4;
	}
})
elNumber5.addEventListener('click',function(){
	if(elEnterLine.style.display == 'none'){
		elResultBox.value += 5;
	}
	else{
		elInputEnter.value += 5;
	}
})
elNumber6.addEventListener('click',function(){
	if(elEnterLine.style.display == 'none'){
		elResultBox.value += 6;
	}
	else{
		elInputEnter.value += 6;
	}
})
elNumber7.addEventListener('click',function(){
	if(elEnterLine.style.display == 'none'){
		elResultBox.value += 7;
	}
	else{
		elInputEnter.value += 7;
	}
})
elNumber8.addEventListener('click',function(){
	if(elEnterLine.style.display == 'none'){
		elResultBox.value += 8;
	}
	else{
		elInputEnter.value += 8;
	}
})
elNumber9.addEventListener('click',function(){
	if(elEnterLine.style.display == 'none'){
		elResultBox.value += 9;
	}
	else{
		elInputEnter.value += 9;
	}
})
elNumber0.addEventListener('click',function(){
	if(elEnterLine.style.display == 'none'){
		elResultBox.value += 0;
	}
	else{
		elInputEnter.value += 0;
	}
})
elPoint.addEventListener('click', function(){
	if(elEnterLine.style.display == 'none'){
		elResultBox.value = doubleClickPoint2()
				
	}
	else{
		elInputEnter.value = doubleClickPoint();

	}
})

function doubleClickPoint(){
	let b = elInputEnter.value + '.';
	a =0
	for (var i = 0; i < elInputEnter.value.length; i++) {
		console.log(elInputEnter.value[i])
         if(elInputEnter.value[i] != '.'){ 
         	a++;
         }

	}
	if(a == elInputEnter.value.length){
		
		return b;
	}
	else{
		alert('Normalni son kiriting !')
		return elInputEnter.value;
	}
}

function doubleClickPoint2(){
	let b = elResultBox.value + '.';
	a =0
	for (var i = 0; i < elResultBox.value.length; i++) {
		console.log(elResultBox.value[i])
         if(elResultBox.value[i] != '.'){ 
         	a++;
         }

	}
	if(a == elResultBox.value.length){
		
		return b;
	}
	else{
		alert('Normalni son kiriting !')
		return elResultBox.value;
	}
}
//  reset button
function reset1(){
	elInputEnter.value = '';
	elResultBox.value = '';
	elResultNumber.innerHTML = '';
	elShowArf.style.display = 'none';
	elResultSymbol.style.display = 'none';
	elEnterLine.style.display = 'block';
	elEqual.removeEventListener('click',showEqual)
}

elReset.addEventListener('click', function(){
	reset1();
})
// click the arf buttons

elDivision.addEventListener('click', function(){
	if(elInputEnter.value != ''){
		elShowArf.innerHTML = elDivision.textContent;
		repeatCalc();
		elShowArf.style.display = 'block';
		elEnterLine.style.display = 'none';
	}
	
})
elPercent.addEventListener('click', function(){
	if(elInputEnter.value != ''){
		elShowArf.innerHTML = elPercent.textContent
		elEnterLine.style.display = 'none';
		repeatCalc();
		elShowArf.style.display = 'block';

	}
})
elPlusOrMinus.addEventListener('click', function(){
	if(elInputEnter.value != ''){
		if(elEnterLine.style.display == 'none'){
			elResultBox.value = changeNumb2()
		}
		else{
			elInputEnter.value = changeNumb()
		}
		elShowArf.style.display = 'block';
	}
})
elMultiply.addEventListener('click', function(){
	if(elInputEnter.value != ''){
		elShowArf.innerHTML = elMultiply.textContent
		elEnterLine.style.display = 'none';
		repeatCalc()
		elShowArf.style.display = 'block';
	};
})
elMinus.addEventListener('click', function(){
	if(elInputEnter.value != ''){
		elShowArf.innerHTML = elMinus.textContent
		elEnterLine.style.display = 'none';
		repeatCalc();
		elShowArf.style.display = 'block';
	}
	
})
elPlus.addEventListener('click', function(){
	if(elInputEnter.value != ''){
		elShowArf.innerHTML = elPlus.textContent
		elEnterLine.style.display = 'none';
		repeatCalc();
		elShowArf.style.display = 'block';
	}
})

function repeatCalc(){
	if(elResultNumber.textContent != ''){
		elInputEnter.value = elResultNumber.textContent
		elResultNumber.innerHTML = '';
		elShowArf.style.display = 'none';
		elResultBox.value = '';
		elResultSymbol.style.display = 'none';
	}
}

setInterval(function(){
	if(elEnterLine.style.opacity == 0){
		elEnterLine.style.opacity = 1
	} 
	else{
		elEnterLine.style.opacity = 0
	}
},500)


elEqual.addEventListener('click', function(evt){
	if(elResultBox.value != ''){
		showEqual();
	}
})

function showEqual(){
	elResultSymbol.style.display = 'block';
	elResultSymbol.innerHTML = elEqual.textContent
	if(elShowArf.innerHTML == elPlus.textContent){
		elResultNumber.innerHTML = plus1();
	}
	if(elShowArf.innerHTML == elMinus.textContent){
		elResultNumber.innerHTML = minus1()
	}
	if(elShowArf.innerHTML == elMultiply.textContent){
		elResultNumber.innerHTML = mult()
	}
	
	if(elShowArf.innerHTML == elDivision.textContent){
		elResultNumber.innerHTML = division()
	}
	if(elShowArf.innerHTML == elPercent.textContent){
		elResultNumber.innerHTML = percent()
	}
}


function plus1(){
	var a = Number(elInputEnter.value) + Number(elResultBox.value)
	return a;
	
}

function minus1(){
	var a = Number(elInputEnter.value) - Number(elResultBox.value) 
	return a;
}

function mult(){
	var a = Number(elInputEnter.value) * Number(elResultBox.value) 
	return a;
}

function division(){
	var a = Number(elInputEnter.value) / Number(elResultBox.value) 
	return a;
}

function changeNumb(){
	a = elInputEnter.value;
	if(a > 0){
		a = a * (-1);
	}
	else{
		a = a * (-1);	
	}
	return a;
}

function changeNumb2(){
	a = elResultBox.value;
	if(a > 0){
		a = a * (-1);
	}
	else{
		a = a * (-1);	
	}
	return a;
}

function percent(){
	var a = (Number(elInputEnter.value) * Number(elResultBox.value))/100;
	repNumber()
}
// Number delete
elNumberDelete.addEventListener('click',function(evt){
	str =[];
	if(elEnterLine.style.display == 'none'){
		str = elResultBox.value.split('')
		str.pop()
		elResultBox.value = str.join('')

	}
	else{
		str = elInputEnter.value.split('')
		str.pop();
		elInputEnter.value = str.join('')
	}	
});



