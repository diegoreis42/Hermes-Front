export enum ApiConnection {
  HOST = "http://localhost:3001",
  PATH_AUTH = HOST + '/auth',
  PATH_CHAT = HOST + "/chat",
  PATH_LOGIN = PATH_AUTH + "/login",
  PATH_REGISTER = PATH_AUTH + "/register",
  PATH_ME = PATH_AUTH + "/me",
  PATH_USER = HOST + "/user",
}
