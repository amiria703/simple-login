<template>
    <div class="main" :style="main">
        <h1>Welcome!</h1>
        <input type="text" name="username" id="username" placeholder="User Name" :style="input">
        <br>
        <input type="password" name="password" id="password" placeholder="P@$$W0RD" :style="input">
        <br>
        <input type="button" value="Done!" class="button" id="done" :style="input"/>
        <br>
        <img src="../assets/google.svg" alt="Login using Google">
        <img src="../assets/facebook.svg" alt="Login using Facebook">
    </div>
</template>

<script>
    export default {
        name: 'SignUp',
        props: {
            main: String,
            input: String
        }
    }
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
    .main {
        background: rgba(255, 255, 255, 0.4);
        position: absolute;
        top: 20%;
        left: 30%;
        width: 40%;
        text-align: center;
        padding: 5px;
        border-radius: 3rem;
        box-shadow: 0px 0px 10px 0px;
        padding-top: 3%;
        padding-bottom: 5%;
        font-family: 'Poppins', sans-serif;
    }

    h1 {
        cursor: default;
        user-select: none;
    }

    input {
        border-radius: 3rem;
        border: none;
        padding: 10px;
        text-align: center;
        outline: none;
        margin: 10px;
        width: 30%;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    input:hover {
        box-shadow: 0px 0px 5px 0px;
    }

    input:active {
        box-shadow: 0px 0px 5px 0px;
    }

    #done {
        background: lightgreen;
    }

    .button {
        cursor: pointer;
        user-select: none;
    }

    img {
        height: 2.2rem;
        margin: 10px;
        user-select: none;
    }

    img:hover {
        box-shadow: 0px 0px 5px 0px;
        cursor: pointer;
        border-radius: 200rem;
    }
</style>
