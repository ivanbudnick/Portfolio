let bottomHeight = window.scrollY;

function debounce(func, wait = 20, immediate = true) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
}

amed = document.getElementById("desc-amed")
 n = 0;
function showHeight(){
    n++;
    console.log(n);
    console.log(bottomHeight);
}

window.addEventListener("scroll", debounce(showHeight));