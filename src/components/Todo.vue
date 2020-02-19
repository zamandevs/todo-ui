<template>
    <div>
        <p>All Todo</p>
        <div class="list-group" v-for="todo in todos">
            <div class="columns box">
                <span class="column"
                      contenteditable="true" id="todo" @input="onEdit(todo,$event)" @onchange="getChange()">
                    {{todo.title}}
                </span>
                <span class="column">

                     <router-link :to="{name:'TodoView',params:{id:todo.id}}" class="button">View</router-link>
                    <UserTodo :usertodo="todo" @deleteTodo="popTodo($event)"></UserTodo>
                </span>
            </div>
        </div>
    </div>
</template>

<script>
    import todo from '../services/Todo'
    import UserTodo from '../components/AuthAction'

    export default {
        name: 'Todo',
        components: {
            UserTodo
        },
        data() {
            return {
                todos: ''
            }
        },
        created() {
            todo.index().then(res => {
                this.todos = res.data
            })
        },
        methods: {
            popTodo(id) {
                this.todos.pop(id)
            }
        }
    }

</script>
