var list = document.getElementById('todo-list');
var inputBox = document.getElementById('todo-input');
var btnAdd = document.getElementById('add-item');
var btnUpdate = document.getElementById('update-item');
var btnRemove = document.getElementById('remove-item');

var currentInputVal = '';

inputBox.addEventListener('input', function(e) {
	currentInputVal = e.target.value;
})

inputBox.addEventListener('keyup', function(e) {
	if(e.keyCode === 13) {
		//alert("Enter Key is Pressed");
		addNewList();
	}
});

function createNewNode() {
	var newListElement = document.createElement('li');
	var textNode = document.createTextNode(currentInputVal)
	newListElement.appendChild(textNode);
	newListElement.id = 'item' + (list.childElementCount + 1);

	return newListElement;
}

function addNewList() {
	if(currentInputVal !== undefined && currentInputVal !== null && currentInputVal !== '') {
		var newListElement = createNewNode();
	
	list.appendChild(newListElement);
	
	inputBox.value = '';
	currentInputVal = '';
	}
	else
		alert("Please enter a valid TODO task");
	
}

btnAdd.addEventListener('click', addNewList);

btnUpdate.addEventListener('click', function() {
	//alert('Update Item was clicked');
	var firstElement = list.firstElementChild;
	var newListElement = createNewNode();

	list.replaceChild(newListElement, firstElement);
})

btnRemove.addEventListener('click', function() {
	var firstElement = list.firstElementChild;
	//alert('Delete was clicked')
	if(firstElement === undefined || firstElement === null || firstElement === '') {
		alert('No Items to Delete');
	}
	list.removeChild(firstElement);
})