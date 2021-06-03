<template>
  <div class="d-flex justify-center align-center">
    <register-form></register-form>
    <content-block :content="loginContent" :isLogin="false"></content-block>
  </div>
</template>
<script>
import RegisterForm from "@/components/register/RegisterForm.vue";
import ContentBlock from "@/components/ContentBlock.vue";

export default {
  data() {
    return {
      loginContent: {
        imgUrl: "register_img.jpg",
        btnText: "Авторизуйтесь",
        subtitle: "Уже есть аккаунт?",
        title: "Добро пожаловать",
      },
    };
  },
  components: {
    RegisterForm,
    ContentBlock,
  },
};
</script>