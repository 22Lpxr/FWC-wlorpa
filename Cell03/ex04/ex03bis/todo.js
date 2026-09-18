function saveTodos() {
	const items = [];
	$('#ft_list div').each(function () {
		items.push($(this).text());
	});
	document.cookie = "ft_todos=" + encodeURIComponent(JSON.stringify(items)) + "; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";
}

function loadTodos() {
	const match = document.cookie.match(/ft_todos=([^;]+)/);
	if (!match) return;
	const items = JSON.parse(decodeURIComponent(match[1]));
	$.each(items, function (i, text) {
		addTodo(text, false);
	});
}

function addTodo(text, save) {
	const $div = $('<div>').text(text);
	$div.on('click', function () {
		if (confirm("Remove this to-do?")) {
			$div.remove();
			saveTodos();
		}
	});
	$('#ft_list').prepend($div);
	if (save) saveTodos();
}

function createTodo() {
	const text = prompt("New to-do:");
	if (text && text.trim())
		addTodo(text.trim(), true);
}

$(document).ready(function () {
	loadTodos();
	$('#newBtn').on('click', createTodo);
});
