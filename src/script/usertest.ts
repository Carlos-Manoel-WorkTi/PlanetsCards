import { getUserFromCookie, updateUserCookie } from "./cookies";

const UserCokies = {
  nome: "",
  total_xp: 0,
  level: 0,
  imagem: "",
  sign: true,
};

const User = getUserFromCookie();

updateUserCookie(UserCokies);

export default UserCokies;
