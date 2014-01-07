jquery.modal
============

A simple jquery Modal boxe.

__<a href="http://creativedream.net/plugins/jquery.modal/" target="_blank">Demo Page</a>__

Usage
-------
The function is called 'modal'. So just call it ;)
~~~ javascript
modal({
	 type       : 'default',
	 title      : 'Title',
	 text       : 'It works.',
	 buttons    : [{text:'OK', val:true, onClick:function(e){return true} }, {text:'Cancel', val:'cancel', onClick:function(e){alert('If function return false, modal will not disappear.'); return false} }],
	 center     : true,
	 autoclose  : false,
	 callback   : null,
	 onShow     : function(e){console.log(e);},
	 closeClick : true,
	 theme      : 'default',
	 background : 'rgba(52,73,94,0.7)',
	 zIndex     : 1050,
	 buttonText : {ok:'OK',yes:'Yes',no:'No',cancel:'Cancel'},
	 template   : '<div class="modal-box"><div class="modal-title"><a class="modal-close-btn"></a></div><div class="modal-text"></div><div class="modal-buttons"></div></div>',
	 _classes   : {box:'.modal-box', title:'.modal-title', content:'.modal-text', buttons:'.modal-buttons', closebtn:'.modal-close-btn'}
});
~~~~

Options
-------
* __type__ is type of Modal Box, can be : alert | confirm | prompt | success | warning | error | info.
* __title__ is title of modal, if is null - title div will disappear
* __text__ is modal inner HTML content
* __buttons__ is an array with buttons. Each button is in an object array and contais: text, val, onClick(return){} callback('return' contains is an object with keys: bObj - button clicked, bOpts - info abou clicked button from options, modal - modal box, val - button value; if function returns false - modal will not disappear)
* __center__ Center align?, can be true or false
* __autoclose__ Autoclose Modal?, can be true or false,
* __callback__ Callback function after modal close, it has a parameter with value and if function returns false, modal will not disappear
* __onShow__ After modal appearing, it has a parameter with modal object
* __closeClick__ On click near the modal box, close it
* __theme__ Custom class for your modal, Example: 'custom' - it will append class like: 'modal-theme-custom'
* __background__ Background Color of modal overlay
* __zIndex__ Modal z-index
* __buttonText__ Custom text for alert, confirm and prompt modals
* __template__ Custom modal template
* <b>_classes</b> An object with each class name from modal box

License
-------
> Licensed under <a href="http://opensource.org/licenses/MIT">MIT license</a>.

