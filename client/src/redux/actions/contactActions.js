import {GET_ALL_CONTACTS, CREATE_CONTACT, DELETE_CONTACT, UPDATE_CONTACT} from '../constants/actionTypes';

import * as api from '../api/index';

export const getContacts = () => async(dispatch) => {
    try {
        const {data} = await api.fetchContacts();

        dispatch({
            type : GET_ALL_CONTACTS,
            payload : data
        });
    } catch (error) {
        console.log(error.message);
    }
};

export const contactCreater = (create) => async(dispatch) => {
    try {
        const {data} = await api.createContact(create);

        dispatch({
            type : CREATE_CONTACT,
            payload : data
        });
    } catch (error) {
        console.log(error.message);
    }
};

export const contactDelete = (id) => async(dispatch) => {
    try {
        await api.deleteContact(id);

        dispatch({
            type : DELETE_CONTACT,
            payload : id
        })
    } catch (error) {
        console.log(error.message);
    }
};

export const contactUpdate = (id, contact) => async(dispatch) => {
    try {
        const {data} = await api.updateContact(id, contact);

        dispatch({
            type : UPDATE_CONTACT,
            payload : data
        });
    } catch (error) {
        console.log(error.message);
    }
};