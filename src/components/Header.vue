<template>
    <div id="nav">
        <router-link to="/">All Todo</router-link>
        |
        <template v-if="!token">
            <router-link to="/register">Register</router-link>
            |
            <router-link to="/login">Login</router-link>
        </template>
        <template v-else>
            <router-link to="/home">Home</router-link>
            |
            <router-link to="/todo-create">Create Todo</router-link>
            |
            <a @click="logout">Logout</a>
        </template>
    </div>
</template>
<script>
    export default {
        name: 'Header',
        data() {
            return {}
        },
        computed: {
            token() {
                return this.$store.state.token
            }
        },
        methods: {
            logout() {
                this.$store.commit('removeUser')
                this.$router.push('/')
            }
        }
    }
</script>


