<template>
  <v-form class="login-form">
    <logo-block></logo-block>
    <h2 class="main-title text-center">Регистрация</h2>
    <component @updateUserState="updateUserState" :is="pageForm"></component>
    <p class="text-center mt-5 register-invite pb-5">
      Уже зарегистрированы?
      <router-link to="/">Авторизуйтесь</router-link>
    </p>
  </v-form>
</template>
<script>
import LogoBlock from "../LogoBlock.vue";
import FirstFormPage from "./FirstFormPage.vue";
import SecondFormPage from "./SecondFormPage.vue";
export default {
  components: {
    LogoBlock,
    FirstFormPage,
    SecondFormPage,
  },
  data() {
    return {
      pages: Object.freeze({ 0: "first", 1: "second", 2: "third" }),
      currentPage: null,
      emailTakenError: "",
      usernameTakenError: "",
      phoneTakenError: "",
      showAlert: false,
      dateBirthError: "",
    };
  },
  created() {
    this.currentPage = this.pages[0];
  },
  computed: {
    pageForm() {
      return `${this.currentPage}-form-page`;
    },
  },
  methods: {
    updateUserState(user, pageNumber) {
      this.currentPage = this.pages[pageNumber];
    },
  },
};
</script>