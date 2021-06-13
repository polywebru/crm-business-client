import busines from "./busines";
import businesSetings from "./businesSettings";

export default {
  async busines(token) {
    return await busines.getBusinesInfo(token);
  },
  async businesSetings(user, token, route) {
    return await businesSetings.changeBusinrsInfo(user, token, route);
  },
};
