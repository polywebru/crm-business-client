// import { format } from "date-fns";
import api from "../api";

export default {
  state: {
    businesInfo: {
      // Данные заглушки
      projectName: "Название 1",
      statis: "В работе",
      dataStart: "11.11.2002",
      dataEnd: "11.11.2003",
      manager: "Пешехонов Максим Алексеевич",
      price: "30000",
      description:
        "Равным образом постоянный количественный рост и сфера нашей активности влечет за собой процесс внедрения и модернизации направлений прогрессивного развития.Тыры пы кошка.Равным образом постоянный количественный рост и сфера нашей активности влечет за собой процесс внедрения и модернизации направлений прогрессивного развития.",
    },
    isLoading: false,
    infoChanging: false,
  },
  mutations: {
    setBusinesInfo(state, info) {
      state.userInfo = info;
    },
    setIsLoading(state, isLoading) {
      state.isLoading = isLoading;
    },
    setInfoChanging(state, infoChanging) {
      state.infoChanging = infoChanging;
    },
    resetBusines(state) {
      state.businesInfo = {};
      state.isLoading = false;
    },
    changeBusinesInfo(state, { type, data }) {
      state.businesInfo[type] = data;
    },
  },
  action: {
    async getBusinesInfo({ rootState, commit }) {
      commit("setIsLoading", true);
      try {
        const response = await api.getBusinesInfo(rootState.token);
        if (response.status === 200) {
          commit("setBusinesInfo", response.data.data);
        }
        commit("setIsLoading", false);
      } catch (error) {
        console.log(error);
      }
    },
    async changeBusinesInfo({ state, commit, rootState }, route) {
      try {
        commit("setInfoChanging", true);
        const response = await api.changeUserInfo(
          state.userInfo,
          rootState.token,
          route
        );
        if (response.status === 200) {
          commit("setUserInfo", response.data.data);
        }
        commit("setInfoChanging", false);
      } catch (error) {
        console.log(error);
      }
    },
  },
  getters: {
    getBusinesInfo: (state) => {
      const formatUserInfo = state.businesInfo;
      if (Object.keys(formatUserInfo).length) {
        // formatUserInfo.date_birth = format(
        //   new Date(formatUserInfo.date_birth),
        //   "dd.MM.yyyy"
        // );
        formatUserInfo.gender =
          formatUserInfo.gender === "male"
            ? "Мужской"
            : formatUserInfo.gender === "female"
            ? "Женский"
            : "";
        return formatUserInfo;
      }
    },
  },
};
