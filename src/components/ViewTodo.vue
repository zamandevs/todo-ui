<template>
    <div>
        <p>All Todo</p>
        <div class="list-group">
            <div class="columns box">
                <p class="column"
                   contenteditable="true" id="todo" @input="onEdit(todo,$event)" @onchange="getChange()">
                    {{todo.title}}
                </p>
                <p class="column">
                    <UserTodo :usertodo="todo"></UserTodo>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    import todo from '../services/Todo'
    import UserTodo from '../components/AuthAction'

    export default {
        name: 'TodoView',
        components: {
            UserTodo
        },
        data() {
            return {
                todo: ''
            }
        },
        created() {
            todo.show(this.$route.params.id).then(res => {
                this.todo = res.data.result
            })
        },
    }
</script>