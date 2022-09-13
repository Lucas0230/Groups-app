

export const initialState = {
    _id: ''
};

export const UserReducer = (state, action) => {

    switch (action.type) {
        case 'setAvatar':
            return { ...state, avatar: action.payload.avatar };
            break;
        case 'setId':
            return { ...state, _id: action.payload._id }
        case 'setName':
            return { ...state, name: action.payload.name }
        default:
            return state;
    }

}