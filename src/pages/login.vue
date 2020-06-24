<template>
    <div class="login">
        login
    </div>
</template>

<script>
export default {
  name: "login",
  mounted() {
    this.axios.get("/user/login").then(res => {
      console.log(res);
    });
  }
};
</script>
