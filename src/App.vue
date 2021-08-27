<template>
    <div id="login">
        <main>
            <mq-layout mq="lg">
                <SignUp/>
            </mq-layout>

            <mq-layout mq="md">
                <SignUp main="left:20%;width:60%;" input="width:40%;"/>
            </mq-layout>

            <mq-layout mq="sm">
                <SignUp main="left:10%;width:80%;" input="width:50%;"/>
            </mq-layout>
        </main>
    </div>
</template>

<script>
    import SignUp from './components/SignUp.vue'

    export default {
        name: 'App',
        components: {
            SignUp
        }
    }
</script>

<style>
    #login {
        background: url("assets/background.jpg") center center;
        background-size: cover;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
    }
</style>
