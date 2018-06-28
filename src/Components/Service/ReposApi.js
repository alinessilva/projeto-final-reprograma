import { Http } from './Http'

export const fetchRepos = username => Http.get(`users/${username}/repos`)
export const fetchUser = username => Http.get(`users/${username}`)
export const fetchSearch = search => Http.get(`search/users?q=${search}+in:login,email,fullname`)