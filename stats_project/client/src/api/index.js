import axios from 'axios';

const url = 'https://been-there-done-stat.fly.dev/stats';

export const fetchStats = () => axios.get(url);
export const createStat = (newStat) => axios.post(url, newStat);
export const updateStat = (id, updatedStat) => axios.patch(`${url}/${id}`, updatedStat);
export const deleteStat = (id) => axios.delete(`${url}/${id}`);