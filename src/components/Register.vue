<template>
    <div>
        <form action="" method="POST" @submit.prevent="register">
            <div class="field">
                <div class="control">
                    <input class="input is-medium" type="text" placeholder="Enter Name" name="name" v-model="name">
                </div>
            </div>
            <div class="field">
                <div class="control">
                    <input class="input is-medium" type="text" placeholder="Enter Email" name="email" v-model="email">
                </div>
            </div>
            <div class="field">
                <div class="control">
                    <input class="input is-medium" type="password" placeholder="Enter Passowrd" name="password"
                           v-model="password">
                </div>
            </div>
            <Error :error="error"></Error>

            <button class="button is-primary">Register</button>
        </form>
    </div>
</template>

<script>
    import auth from '../services/Auth'
    import Error from "./Error";

    export default {
        name: 'Register',
        components: {
            Error
        },
        data() {
            return {
                name: '',
                email: '',
                password: '',
                error: {}
            }
        },
        methods: {
            register() {
                auth.register({
                    name:this.name,
                    email: this.email,
                    password: this.password,
                }).then(res => {
                    if (res.data.errors)
                        this.error = {message: [res.data.errors.message]}
                    this.$router.push('/login')
                }).catch(error => {
                    if (error.response.status == 422) {
                        this.error = error.response.data.errors
                    }
                })
            }
        }
    }
</script>

