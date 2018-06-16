import { Http } from './Http'

export const fetchRepos = username => Http.get(`users/${username}/repos`)