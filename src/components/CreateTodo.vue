<template>
    <div>
        <form action="" method="POST" @submit.prevent="create">
            <div class="field">
                <div class="control">
                    <input class="input is-medium" type="text" placeholder="Whats Need To be done" name="title"
                           v-model="title">
                </div>
            </div>
            <Error :error="error"></Error>

            <button class="button is-primary">Create</button>
        </form>
    </div>
</template>
<script>
    import todo from '../services/Todo'
    import Error from "./Error";

    export default {
        name: 'CreateTodo',
        components: {
            Error
        },
        data() {
            return {
                title: '',
                error: {}
            }
        },
        methods: {
            create() {
                todo.post({
                    'title': this.title
                }).then(res => {
                    if (res.data.errors)
                        this.error = {message: [res.data.errors.message]}
                    this.$router.replace('/')
                }).catch(error => {
                    if (error.response.status == 422) {
                        this.error = error.response.data.errors
                    }
                })
            }
        }

    }
</script>