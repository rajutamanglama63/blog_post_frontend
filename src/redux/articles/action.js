import * as api from '../../api/axios';

export const getArticles = () => async (dispatch) => {
    try {
        const { data } = await api.fetchArticles();
        dispatch({type:"FETCH_ALL_ARTICLES", payload:data});
    } catch (error) {
        console.log(error);
    }
}

export const postArticle = (post) => async (dispatch) => {
    try {
        const { data } = await api.createArticle(post);
        dispatch({type: "CREATE_AND_POST_ARTICLE", payload:data});
    } catch (error) {
        console.log(error);
    }
}