jquery.modal
============

A simple jquery Modal boxes.

__<a href="http://creativedream.net/plugins/jquery.modal/" target="_blank">Demo Page</a>__

Usage
-------
The function is called 'modal'. So just call it ;)
~~~ javascript
modal({
	type: 'inverted', //Type of Modal Box (alert | confirm | prompt | success | warning | error | info | inverted | primary)
	title: 'Message', //Modal Title
	text: 'Text', //Modal HTML Content
	size: 'normal', //Modal Size (normal | large | small)
	buttons: [{
		text: 'OK', //Button Text
		val: 'ok', //Button Value
		eKey: true, //Enter Keypress
		addClass: 'btn-light-blue', //Button Classes (btn-large | btn-small | btn-green | btn-light-green | btn-purple | btn-orange | btn-pink | btn-turquoise | btn-blue | btn-light-blue | btn-light-red | btn-red | btn-yellow | btn-white | btn-black | btn-rounded | btn-circle | btn-square | btn-disabled)
		onClick: function(dialog) {
			console.log(dialog);
			alert('Look in console!');
			return true;
		}
	}, ],
	center: true, //Center Modal Box?
	autoclose: false, //Auto Close Modal Box?
	callback: null, //Callback Function after close Modal (ex: function(result){alert(result);})
	onShow: function(r) {}, //After show Modal function
	closeClick: true, //Close Modal on click near the box
	closable: true, //If Modal is closable
	theme: 'atlant', //Modal Custom Theme (xenon | atlant | reseted)
	animate: false, //Slide animation
	background: 'rgba(0,0,0,0.5)', //Background Color, it can be null
	zIndex: 1050, //z-index
	buttonText: {
		ok: 'OK',
		yes: 'Yes',
		cancel: 'Cancel'
	},
	template: '<div class="modal-box"><div class="modal-inner"><div class="modal-title"><a class="modal-close-btn"></a></div><div class="modal-text"></div><div class="modal-buttons"></div></div></div>',
	_classes: {
		box: '.modal-box',
		boxInner: ".modal-inner",
		title: '.modal-title',
		content: '.modal-text',
		buttons: '.modal-buttons',
		closebtn: '.modal-close-btn'
	}
});
~~~~

Options
-------
* __type__ is type of Modal Box, can be : alert | confirm | prompt | success | warning | error | info | primary | inverted.
* __title__ is title of modal, if is null - title div will disappear
* __text__ is modal inner HTML content
* __buttons__ is an array with buttons. Each button is in an object array and contais: 
        text, 
	val, 
	addClass: Class for button(btn-large | btn-small | btn-green | btn-light-green | btn-purple | btn-orange | btn-pink | btn-turquoise | btn-blue | btn-light-blue | btn-light-red | btn-red | btn-yellow | btn-white | btn-black | btn-rounded | btn-circle | btn-square | btn-disabled), 
	onClick(return){} callback('return' contains is an object with keys: bObj - button clicked, bOpts - info abou clicked button from options, val - button value; methods: getContet, getTitle, getModal, setClosable, setContent, setTitle; if function returns false - modal will not disappear)
* __center__ Center align?, can be true or false
* __autoclose__ Autoclose Modal?, can be true or false,
* __callback__ Callback function after modal close, it has a parameter with value and if function returns false, modal will not disappear
* __onShow__ After modal appearing, it has a parameter with modal object
* __closeClick__ On click near the modal box, close it
* __closable__ Enable Modal closing
* __theme__ Custom class for your modal, Example: 'xenon'
* __background__ Background Color of modal overlay
* __zIndex__ Modal z-index
* __buttonText__ Custom text for alert, confirm and prompt modals
* __template__ Custom modal template
* <b>_classes</b> An object with each class name from modal box

License
-------
> Licensed under <a href="http://opensource.org/licenses/MIT">MIT license</a>.

