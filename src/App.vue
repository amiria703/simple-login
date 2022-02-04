<template>
  <div id="login">
    <main>
      <!-- Different styles for different devices: -->
      <mq-layout mq="lg">
        <Login />
      </mq-layout>

      <mq-layout mq="md">
        <Login mainStyle="left:20%;width:60%;" inputStyle="width:40%;" />
      </mq-layout>

      <mq-layout mq="sm">
        <Login mainStyle="left:10%;width:80%;" inputStyle="width:50%;" />
      </mq-layout>
    </main>
  </div>
</template>

<script>
import Login from "./components/Login.vue";

export default {
  name: "App",
  components: {
    Login,
  },
  mounted: async () => {
    //Animate being hidden after 2500ms and then remove after 500ms
    await new Promise((r) => setTimeout(r, 2500));
    document.getElementById("white").classList.add("hidden");
    await new Promise((r) => setTimeout(r, 500));
    document.getElementById("white").remove();
  },
};
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
