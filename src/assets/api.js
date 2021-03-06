import * as axios from "axios";

const instance = axios.create({
  withCredentials: true,
  headers: {
    "API-KEY": "a587f7eb-a37c-4620-89c4-3bf90fb663c4"
  },
  baseURL: "https://social-network.samuraijs.com/api/1.0/"
});

export const usersAPI = {
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
  },
  getProfile(userId) {
    console.warn("Obsolete method. Please use profileAPI object");
    return profileAPI.getProfile(userId);
  }
};

export const profileAPI = {
  getProfile(userId) {
    return instance.get("profile/" + userId);
  },
  getStatus(userId) {
    return instance.get("profile/status/" + userId);
  },
  updateStatus(status) {
    return instance.put("profile/status", { status });
  },
  savePhoto(photo) {
    const formData = new FormData();
    formData.append("image", photo);
    return instance.put("profile/photo", formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    });
  },
  saveProfileData(newProfileData) {
    return instance.put("profile", newProfileData);
  }
};

export const authAPI = {
  me() {
    return instance.get("auth/me");
  },
  login(email, password, rememberMe = false, captcha = null) {
    return instance.post("auth/login", { email, password, rememberMe, captcha });
  },
  logout() {
    return instance.delete("auth/login");
  }
};

export const securityAPI = {
  getCaptcha() {
    return instance.get("security/get-captcha-url");
  }
};
