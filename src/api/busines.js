import baseApi from "./baseApi";
import routes from "./routes";

export default {
  async getBusinesInfo(token) {
    return await baseApi.execute(routes.user, null, "get", token);
  },
};
