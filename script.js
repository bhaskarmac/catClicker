var counter1 = 0;
var counter2 = 0;
var cat1 = document.querySelector('#cat1');
var cat2 = document.querySelector('#cat2');
var cat1ImgClick = document.querySelector('#cat1ImgClick');
cat1.innerHTML = counter1;
cat2.innerHTML = counter2;
cat1ImgClick.addEventListener('click', function(){
	counter1++;
	cat1.innerHTML = counter1;
});
cat2ImgClick.addEventListener('click', function(){
	counter2++;
	cat2.innerHTML = counter2;
});
