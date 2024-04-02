import axios from 'axios'

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
})

export const usersAPI = {
  getUsers(currentPage: number, pageSize: number) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((res) => res.data)
  },
  unFollowUser(id: number) {
    return instance.delete(`follow/${id}`)
  },
  followUser(id: number) {
    return instance.post(`follow/${id}`)
  },
}

export const authAPI = {
  getAuth() {
    return instance.get(`auth/me`).then((res) => res.data)
  },
}

export const profileAPI = {
  getProfile(id: number) {
    return instance.get(`profile/${id}`).then((res) => res.data)
  },
}
