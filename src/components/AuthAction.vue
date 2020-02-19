<template>
    <div v-if="authuser.id==usertodo.user_id">
        <router-link :to="{name:'TodoEdit',params:{id:usertodo.id}}" class="button">Edit</router-link>
        <button class="button" @click="deleteTodo(usertodo.id)">Delete</button>
    </div>

</template>

<script>
    import todo from '../services/Todo'

    export default {
        name: 'AuthAction',
        props: ['usertodo'],
        computed: {
            authuser() {
                return this.$store.state.user
            }
        },
        methods: {
            deleteTodo(id) {
                todo.delete(id).then(res => {
                    if(res.status==200)
                        this.$emit('deleteTodo',id);
                })
            }
        }
    }
</script>