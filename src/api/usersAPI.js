import * as axios from "axios";

const instance = axios.create({
  withCredentials: true,
  headers: {
    "API-KEY": "a587f7eb-a37c-4620-89c4-3bf90fb663c4"
  },
  baseURL: "https://social-network.samuraijs.com/api/1.0/"
});

const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => response.data);
  },

  getFollow(userId) {
    return instance.post(`follow/${userId}`).then(response => response.data);
  },

  getUnfollow(userId) {
    return instance.delete(`follow/${userId}`).then(response => response.data);
  }
};

export default usersAPI;