$(document).ready(function () {
	openToggle('about')
	openToggle('works')
	openToggle('toolkit')
	openToggle('contact')
})

function openToggle(aTag) {
	$(`.${aTag} .container`).fadeToggle(500, 'linear')
}
function setFadeToggle(aTag) {
	$(`a.${aTag}`).on('click', () => {
		$(`.${aTag} .container`).fadeToggle(500, 'linear')
	})
}
function setAllToggles() {
	setFadeToggle('about')
	setFadeToggle('works')
	setFadeToggle('toolkit')
	setFadeToggle('contact')
}
function setUpButton() {
	$('button.letsTalk').on('click', () => {
		$('.contact .container').focus()
		if ($('.contact .container').css('display', 'none')) {
			$('.contact .container').fadeToggle()
		}
	})
}
function app() {
	setUpButton()
	setAllToggles()
}

app()

// Carousel Logic inspired by https://codepen.io/nopr/pen/rfBJx
var carousel = $('.carousel'),
	currdeg = 0

$('.next').on('click', { d: 'n' }, rotate)
$('.prev').on('click', { d: 'p' }, rotate)

function rotate(e) {
	if (e.data.d == 'n') {
		currdeg = currdeg - 60
	}
	if (e.data.d == 'p') {
		currdeg = currdeg + 60
	}
	carousel.css({
		'-webkit-transform': 'rotateY(' + currdeg + 'deg)',
		'-moz-transform': 'rotateY(' + currdeg + 'deg)',
		'-o-transform': 'rotateY(' + currdeg + 'deg)',
		transform: 'rotateY(' + currdeg + 'deg)',
	})
}
