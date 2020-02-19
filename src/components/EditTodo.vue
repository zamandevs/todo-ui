<template>
    <div>
        <form action="" method="POST" @submit.prevent="update">
            <div class="field">
                <div class="control">
                    <input class="input is-medium" type="text" name="title"
                           v-model="todo.title">
                </div>
            </div>

            <button class="button is-primary">Update</button>
        </form>
    </div>
</template>

<script>
    import todo from '../services/Todo'

    export default {
        name: 'TodoView',
        components: {},
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
        methods: {
            update() {
                todo.patch(this.todo).then(res => {
                    console.log(res)
                })
            }
        }
    }
</script>