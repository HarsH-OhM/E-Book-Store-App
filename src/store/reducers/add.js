
import { SET_BOOK, ADD_Book, DELETE_BOOK} from '../action/index';

const initialState = {

    changedColor:'#1AB394',
    textColor:'black'
};

const addReducer = (state = initialState, action)=>{
    switch (action.type) {

        case 'SET_BOOK':
            
            return action.books;

        case 'ADD_BOOK':
            
        return state.concat([action.book]);
        // return [action.book, ...state];

        case 'DELETE_BOOK':

        // return state.filter(initialFormState=> initialFormState.id !== action.id)

            return {
            ...state,

            books:[state.books.filter(books => books.id !== action.id)]    
    }

    case 'SET_CHANGE_COLOR':
        return{
            ...state,
            changedColor:action.color,
            textColor:action.color,
        }
    
        default: 
            return state;
    }
};

export default addReducer;