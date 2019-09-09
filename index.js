var list = document.getElementById('todo-list');
var inputBox = document.getElementById('todo-input');
var btnAdd = document.getElementById('add-item');
var currentInputVal = '';

inputBox.addEventListener('input', function(e) {
	currentInputVal = e.target.value;
})

inputBox.addEventListener('keyup', function(e) {
	if(e.keyCode === 13) {
		//alert("Enter Key is Pressed");
		addNewList();
	}
})

function addNewList() {
	if(currentInputVal !== undefined && currentInputVal !== null && currentInputVal !== '') {
		var newListElement = document.createElement('li');
	var textNode = document.createTextNode(currentInputVal)
	newListElement.appendChild(textNode);
	newListElement.id = 'item' + (list.childElementCount + 1);
	
	list.appendChild(newListElement);
	
	inputBox.value = '';
	currentInputVal = '';
	}
	else
		alert("Please enter a valid TODO task");
	
}

btnAdd.addEventListener('click', addNewList);