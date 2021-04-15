$(document).ready(function () {
	openToggle('about')
	openToggle('works')
	openToggle('toolkit')
	openToggle('contact')
	openToggle('resume')
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
	setFadeToggle('resume')
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


