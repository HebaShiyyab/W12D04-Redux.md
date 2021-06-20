const initialState = {
  token: [],
};

const articleReducers = (state = initialState, { type, payload }) => {
  switch (type) {
    case "SET_ARTICLES":
      return { token: [...payload] };
    case "ADD_ARTICLE":
      return { token: [...state.token, payload] };
    case "UPDATE_ARTICLE":
      return state.token.map((element) => {
        if (element.id === payload.id) {
          return payload;
        }
        return element;
      });
    case "DELETE_ARTICLE":
      return state.token.filter((element)=>
          element.id !== payload.id
      )
    default:
      return state;
  }
};

export default articleReducers;

export const setArticles = (articles) => {
  return { type: "SET_ARTICLES", payload: articles };
};

export const addArticles = (article) => {
  return { type: "Add_ARTICLE", payload: article };
};
export const updateArticles = (article) => {
  return { type: "UPDATE_ARTICLE", payload: article };
};

export const deleteArticles = (id) => {
  return { type: "DELETE_ARTICLE", payload: id };
};
