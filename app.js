const app = new Vue({
    el: '#app',
    data: {
        title: 'Lista de tareas',
        newTodo:'',
        todos: [],
    },
    methods:{
        addTodo(){
            // console.log(this.newTodo);
            this.todos.push({
                title: this.newTodo,
                done: false
            });
            this.newTodo = '';
        },
        removeTodo(todo){
            const todoIndex = this.todos.indexOf(todo);
            this.todos.splice(todoIndex, 1);
        },
    },
});