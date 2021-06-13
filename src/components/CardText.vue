<template>
  <div class="card--wrapper">
    <v-card :class="{ 'card--grid': isGrid }" class="card--main--wrapper">
      <v-card-title class="card--title">
        {{ cardInfo.nameOrder }}
      </v-card-title>
      <div class="flex--wrapper">
        <div class="card--info">
          <v-card-text class="card--info--text"
            >Статус:
            <span :style="color(cardInfo.status)">{{
              cardInfo.status
            }}</span></v-card-text
          >
          <v-card-text class="card--info--text"
            >Создан: <span>{{ cardInfo.generated }}</span></v-card-text
          >
          <v-card-text class="card--info--text"
            >Стоимость: <span>{{ cardInfo.price }} руб.</span></v-card-text
          >
        </div>
        <div class="card--descriptions">
          <v-card-text class="card--descriptions--titel">Описание:</v-card-text>
          <v-card-text class="card--descriptions--text">{{
            cardInfo.descriptions
          }}</v-card-text>
        </div>
      </div>
      <v-card-actions>
        <popup-info
          data-app
          :color="color(cardInfo.status)"
          :cardInfo="cardInfo"
        ></popup-info>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import popupInfo from "./vPopup.vue";

export default {
  data() {
    return {};
  },
  props: {
    isGrid: Boolean,
    cardInfo: Object,
  },
  components: {
    popupInfo,
  },
  methods: {
    isPopupTrue() {
      this.isPopup = true;
    },
    isPopupFalse() {
      this.isPopup = false;
    },
    color(status) {
      switch (status) {
        case "В работе":
          return "color: #FF9900";
        case "Завершен":
          return "color: #00BC13";
        case "Открыт":
          return "color: #EAD200";
        default:
          return "color: #000000";
      }
    },
  },
};
</script>

<style lang="scss">
.v-card__text,
.v-card__title {
  padding: 0px !important;
}
.flex--wrapper {
  display: flex;
  justify-content: space-between;
  @media (max-width: 480px) {
    flex-direction: column;
  }
}
.card {
  font-family: "Open Sans";
  &--main--wrapper {
    padding: 30px !important;
    @media (max-width: 480px) {
      padding: 15px !important;
    }
  }
  &--wrapper {
    margin-bottom: 45px;
  }
  &--grid {
    max-width: 380px;

    > .flex--wrapper {
      display: block;
    }
    .card--descriptions--text {
      -webkit-line-clamp: 2;
      display: -webkit-box;
      overflow: hidden;
      -webkit-box-orient: vertical;
    }
  }
  &--title {
    margin-bottom: 21px;
    font-weight: 600 !important;
    font-size: 18px !important;
    line-height: 25px !important;
    @media (max-width: 1100px) {
      font-size: 14px !important;
      line-height: 19px !important;
    }
    @media (max-width: 768px) {
      font-size: 12px !important;
      line-height: 16px !important;
    }
  }
  &--info {
    width: 160px;
    line-height: 19px;
    font-size: 14px;
    margin-right: 90px;
    @media (max-width: 1100px) {
      margin-right: 60px;
    }
    &--text {
      width: 160px;
      margin-bottom: 13px;
      display: flex;
      justify-content: space-between;
      @media (max-width: 1100px) {
        font-size: 12px !important;
        line-height: 16px !important;
      }
      span {
        @media (max-width: 1100px) {
          font-size: 12px !important;
          line-height: 16px !important;
        }
      }
    }
    &--btn {
      @media (max-width: 1100px) {
        font-size: 12px !important;
        line-height: 16px !important;
      }
    }
  }
  &--descriptions {
    &--titel {
      margin-bottom: 6px;
      font-weight: 600 !important;
      font-size: 14px !important;
      line-height: 19px !important;
      @media (max-width: 1100px) {
        font-size: 12px !important;
        line-height: 16px !important;
        margin-bottom: 2px;
      }
      @media (max-width: 480px) {
        font-weight: normal !important;
        font-size: 12px !important;
        line-height: 16px !important;
      }
    }
    &--text {
      font-weight: normal !important;
      font-size: 14px !important;
      line-height: 19px !important;
      @media (max-width: 1100px) {
        font-size: 12px !important;
        line-height: 16px !important;
        -webkit-line-clamp: 4;
        display: -webkit-box;
        overflow: hidden;
        -webkit-box-orient: vertical;
      }
      @media (max-width: 480px) {
        -webkit-line-clamp: 2;
        display: -webkit-box;
        overflow: hidden;
        -webkit-box-orient: vertical;
      }
    }
  }
}
.btn > span {
  @media (max-width: 1100px) {
    font-size: 12px !important;
    line-height: 16px !important;
  }
}
.v-btn {
  margin-top: 20px;
  letter-spacing: 0 !important;
  height: 26px !important;
  font-size: 12px !important;
  line-height: 16px !important;
  width: 104px !important;
}
</style>
