import axios from 'axios';

const getURL = 'http://localhost:5000/contacts';
const createURL = 'http://localhost:5000/create';
const deleteURL = 'http://localhost:5000/:id/delete';
const updateURL = 'http://localhost:5000/:id/update';

export const fetchContacts = () => axios.get(getURL);
export const createContact = (newContact) => axios.post(createURL, newContact);
export const deleteContact = (id) => axios.delete(`${deleteURL}/${id}`);
export const updateContact = (id, updatedContact) => axios.patch(`${updateURL}/${id}`, updatedContact);

