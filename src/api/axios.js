import axios from 'axios';

const url = "http://localhost:4000/articles";

export const fetchArticles = () => axios.get(url);
export const createArticle = (newPost) => axios.post(url, newPost);