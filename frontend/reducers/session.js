import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/sessions';

//this is a POJO that will be returned if we don't have a current user (but why?)
const _nullSession = {
    currentUser: null
}

export default ( state = _nullSession, action ) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, {currentUser: action.user}) //this assigns a new current user to the state, regardless of the old state, however i think this would allow
                                                                    //only for one current user
        case LOGOUT_CURRENT_USER:
            return _nullSession; //the new state will just be the _nullSession object, which just means that the current user is null (there is no current user :) ) 
        default:
            return state;
    }
}