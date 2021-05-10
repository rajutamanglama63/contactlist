import {GET_ALL_CONTACTS, CREATE_CONTACT, DELETE_CONTACT, UPDATE_CONTACT} from '../constants/actionTypes';

export const contactsReducers = (contacts = [], action) => {
    switch(action.type){
        case GET_ALL_CONTACTS:
            return action.payload;

        case CREATE_CONTACT:
            return [...contacts, action.payload];

        case DELETE_CONTACT:
            return contacts.filter((contact) => contact._id !== action.payload);

        case UPDATE_CONTACT:
            return contacts.map((contact) => (contact._id === action.payload._id ? action.payload : contact));

        default:
            return contacts;
    }
} 