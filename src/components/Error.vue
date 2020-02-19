<template>
    <div>
        <p class="message" v-for="e in error">{{e[0]}}</p>
    </div>
</template>

<script>
    export default {
        name:'Error',
        props:{
            error: {}
        }
    }
</script>