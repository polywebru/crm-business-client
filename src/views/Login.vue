<template>
  <div class="d-flex justify-center align-center">
    <content-block :content="loginContent" :isLogin="true"></content-block>
    <login-form></login-form>
  </div>
</template>
<script>
import LoginForm from "@/components/login/LoginForm.vue";
import ContentBlock from "@/components/ContentBlock.vue";

export default {
  data() {
    return {
      loginContent: {
        imgUrl: "login_img.jpg",
        btnText: "Регистрация",
        subtitle: "Ещё не с нами?",
        title: "С Возвращением!",
      },
    };
  },
  components: {
    LoginForm,
    ContentBlock,
  },
};
</script>