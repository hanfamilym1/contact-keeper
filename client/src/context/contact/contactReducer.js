import { 
    GET_CONTACTS,
    ADD_CONTACT,
    DELETE_CONTACT,
    CLEAR_CONTACTS,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_CONTACT,
    FILTER_CONTACTS,
    CLEAR_FILTER,
    CONTACT_ERROR
} from '../types'

// eslint-disable-next-line
export default (state, action) => {
    switch(action.type){
        case GET_CONTACTS:
            return {
                ...state,
                contacts: action.payload,
                loading: false
            }
        case ADD_CONTACT:
            return {
                ...state,
                contacts: [action.payload, ...state.contacts],
                loading: false
            }
        case UPDATE_CONTACT:
            return {
                ...state,
                contacts: state.contacts.map( contact => contact._id === action.payload._id ? action.payload : contact),
                loading: false
            }
        case DELETE_CONTACT:
            return {
                ...state,
                contacts: state.contacts.filter(contact => contact._id !== action.payload),
                loading: false
            }
        case CLEAR_CONTACTS:
            return {
                ...state,
                contacts: null,
                filtered: null,
                error: null,
                current: null
            }
        case SET_CURRENT:
            return {
                ...state,
                current: action.payload,
                loading: false
            }
        case CLEAR_CURRENT:
            return {
                ...state,
                current: null,
                loading: false
            }
        case FILTER_CONTACTS:
            return {
                ...state,
                // eslint-disable-next-line
                filtered: state.contacts.filter(contact => {
                    if(contact.name.toLowerCase().includes(action.payload.toLowerCase()) || contact.email.toLowerCase().includes(action.payload.toLowerCase())){
                        return contact
                    }
                }),
                loading: false
            }
        case CLEAR_FILTER:
            return {
                ...state,
                filtered: null,
                loading: false
            }
        case CONTACT_ERROR:
            return {
                ...state,
                error: action.payload,
            }
        default:
            return state
    }
}