function saveTodos() {
	var list = document.getElementById("ft_list");
	var items = [];
	for (var i = 0; i < list.children.length; i++)
		items.push(list.children[i].textContent);
	document.cookie = "ft_todos=" + encodeURIComponent(JSON.stringify(items)) + "; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";
}

function loadTodos() {
	var match = document.cookie.match(/ft_todos=([^;]+)/);
	if (!match)
		return;
	var items = JSON.parse(decodeURIComponent(match[1]));
	for (var i = 0; i < items.length; i++)
		addTodo(items[i], false);
}

function addTodo(text, save) {
	var list = document.getElementById("ft_list");
	var div = document.createElement("div");
	div.textContent = text;
	div.onclick = function () {
		if (confirm("Remove this to-do?")) {
			list.removeChild(div);
			saveTodos();
		}
	};
	list.insertBefore(div, list.firstChild);
	if (save)
		saveTodos();
}

function createTodo() {
	var text = prompt("New to-do:");
	if (text && text.trim())
		addTodo(text.trim(), true);
}

loadTodos();
