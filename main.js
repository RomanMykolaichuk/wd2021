"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var url = "https://jsonplaceholder.typicode.com/todos/15";
axios_1["default"].get(url).then(function (response) {
    var todo = response.data;
    showTodo(todo);
});
var showTodo = function (todo) {
    console.log("Todo id= " + todo.id + "\n    text: " + todo.title + "\n    completed: " + todo.completed);
};
