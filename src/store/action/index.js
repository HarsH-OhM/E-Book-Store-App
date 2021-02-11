

export const ADD_ARTICLE = 'ADD_BOOK';
export const SET_ARTICLE = 'SET_BOOK';
export const REMOVE_ARTICLE = 'DELETE_BOOK';


 export const like = () => {
    return{
        type:'LIKE'
    }
};

export const set = (book) => {
    return {
      type: 'SET_BOOK',
      book: book,
    };
  };

export const add = (book) => {
    return{
        type:'ADD_BOOK',
        book,
        
    }
};

export const del = (id) => {
    return{
        type:'DELETE_BOOK',
        id:id,
        
    }
};

export const setChangeColor = (color) => {
    return{
        type:'SET_CHANGE_COLOR',
        color:color,
        
    }
};

