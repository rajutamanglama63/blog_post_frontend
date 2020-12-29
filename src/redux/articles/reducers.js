export const articleReducer = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL_ARTICLES':
            return action.payload;
        
        case 'CREATE_AND_POST_ARTICLE':
            return [...state, action.payload];

        default:
            return state;
    }
}