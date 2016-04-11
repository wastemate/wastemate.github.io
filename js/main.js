var slider = document.querySelector('#slider-input .slider');
var sliderInput = document.querySelector('#slider-input input');
var numberBox = document.querySelector('#slider-input .number-box');

var range = {
	'min': 0,
	'8.25%': 10,
	'24.95%': 20,
	'41.65%': 30,
	'58.35%': 40,
	'75.05%': 50,
	'91.75%': 100,
	'max': 110
};

noUiSlider.create(slider, {
	start: 10,
	range: range,
	snap: true,
	pips: {
		mode: 'values',
		values: [10, 20, 30, 40, 50, 100],
		density: 20
	}
});


slider.noUiSlider.on('slide', function () {
	var val = slider.noUiSlider.get();
	var set = Math.min(Math.max(10, val), 100);

	slider.noUiSlider.set(set);
	sliderInput.value = set;
	numberBox.innerText = set;
});
