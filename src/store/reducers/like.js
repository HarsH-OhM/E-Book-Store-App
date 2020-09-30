const likeReducer = (state = 15, action)=>{
    switch (action.type) {
        case 'LIKE':
            
        return state + 1;
            
    
        default:
            return state;
    }
};

export default likeReducer;