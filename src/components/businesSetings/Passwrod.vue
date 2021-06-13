<template>
  <div class="password-info">
    <div class="password-text-fields">
      <div class="field">
        <label for="oldPassword">Пароль</label>
        <v-text-field
          outlined
          class="custom-input settings__input"
          type="password"
          id="oldPassword"
        ></v-text-field>
      </div>
      <div class="field">
        <label for="newPassword">Новый пароль</label>
        <v-text-field
          outlined
          class="custom-input settings__input"
          type="password"
          id="newPassword"
        ></v-text-field>
      </div>
      <div class="field">
        <label for="confirmPassword">Подтвердите пароль</label>
        <v-text-field
          outlined
          type="password"
          id="confirmPassword"
        ></v-text-field>
      </div>
      <button
        class="settings__change"
        type="submit"
        @click.prevent="changeInfo"
      >
        <span> Изменить</span>
      </button>
    </div>
  </div>
</template>
<script>
export default {
  metaInfo: {
    title: "Пароль - PolyWeb",
  },
  data() {
    return {
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
    };
  },
};
</script>
