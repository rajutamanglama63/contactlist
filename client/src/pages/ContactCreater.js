import React, {useState, useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom';
import {contactCreater} from '../redux/actions/contactActions'

const ContactCreater = () => {
    const [createData, setCreateData] = useState({
        name : "",
        address : "",
        contact : ""
    });

    const dispatch = useDispatch();

    const history = useHistory();
 
    const submitHandler = (e) => {
        e.preventDefault();

        dispatch(contactCreater(createData));

        history.push('/');
    } 

    const clear = () => {
        setCreateData({
            name : "",
            address : "", 
            contact : ""
        });
    }

    return (
        <div>
            <div className="container">
                <div className="contact__form">
                    <div className="form">
                        <h1>Create Contact</h1>
                        <form onSubmit={submitHandler}>
                            <label>Name:</label>
                            <br />
                            <input 
                             placeholder="enter name" 
                             type="text" 
                             value={createData.name}
                             onChange={(e) => setCreateData({...createData, name : e.target.value})}
                            />
                            <br />
                            <label>Address:</label>
                            <br />
                            <input 
                             placeholder="enter address" 
                             type="text" 
                             value={createData.address}
                             onChange={(e) => setCreateData({...createData, address : e.target.value})}
                            />
                            <br />
                            <label>Contact:</label>
                            <br />
                            <input 
                             placeholder="enter contact" 
                             type="text" 
                             value={createData.contact}
                             onChange={(e) => setCreateData({...createData, contact : e.target.value})}
                            />
                            <br />
                            <button className="btn-submit" type="submit" onClick={clear}>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactCreater
