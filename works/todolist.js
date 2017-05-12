function createTodoItemNode (description){
  var todoItemNode = document.createElement('div');
  var todoItemNodeAttrClass = document.createAttribute('class');
  todoItemNodeAttrClass.value = "todo-item";
  todoItemNode.setAttributeNode(todoItemNodeAttrClass);

  var todoCheckBox = document.createElement('input');
  var todoCheckBoxAttrType = document.createAttribute('type');
  todoCheckBoxAttrType.value = 'checkbox';
  todoCheckBox.setAttributeNode(todoCheckBoxAttrType);
  todoItemNode.appendChild(todoCheckBox);
  todoCheckBox.addEventListener('click', function(e){
    console.dir(todoCheckBox);
    if(todoCheckBox.checked){
      todoCheckBox.parentNode.classList.add('todo-item-mark');
    }else{
      todoCheckBox.parentNode.classList.remove('todo-item-mark');
    }
  });

  var todoDescription = document.createElement('span');
  var todoDescriptionText = document.createTextNode(description);
  todoDescription.appendChild(todoDescriptionText);
  todoItemNode.appendChild(todoDescription);

  var todoDeleteButton = document.createElement('input');
  var todoDeleteButtonAttrType = document.createAttribute('type');
  todoDeleteButtonAttrType.value = 'image';
  todoDeleteButton.setAttributeNode(todoDeleteButtonAttrType);
  var todoDeleteButtonAttrSrc = document.createAttribute('src');
  todoDeleteButtonAttrSrc.value = '../img/icons/delete_icon.png';
  todoDeleteButton.setAttributeNode(todoDeleteButtonAttrSrc);
  todoItemNode.appendChild(todoDeleteButton);

  todoDeleteButton.addEventListener('click', function(e){

    todoDeleteButton.parentNode.classList.add('todo-item-move');
    setTimeout(function() {
      todoDeleteButton.parentNode.remove();
    }, 180);

  });

  return todoItemNode;
}

function addTodoItem(description){
  var todoList = document.getElementById('todo-list');
  var todoItem = createTodoItemNode(description);
  todoList.appendChild(todoItem);
}

var newTodoDescription = document.getElementById('new-todo-description');
newTodoDescription.addEventListener('keypress', function(e){
  if(e.charCode === 13 && newTodoDescription.value.trim() !== ''){
    addTodoItem(newTodoDescription.value);
    newTodoDescription.value = '';

  }
});

var todoMarkAllButton = document.getElementById('todo-mark-all-button');
todoMarkAllButton.addEventListener('click', function(e){
  var todoItems = document.getElementsByClassName('todo-item');
  for(var i=0; i<todoItems.length; i++){
    todoItems[i].classList.add('todo-item-mark');
    todoItems[i].children[0].checked = true;
  }
});
