import baseApi from "./baseApi";
import routes from "./routes";

export default async function changeBusinrsInfo(user, token, route) {
  return await baseApi.execute(
    routes.businesSettings(route),
    user,
    "put",
    token
  );
}
