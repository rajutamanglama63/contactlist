import React from 'react'
import {useDispatch} from 'react-redux'
import {contactDelete} from '../redux/actions/contactActions'

const Data = ({contact}) => {
    const dispatch = useDispatch();
    return (
        <div>
            <div className="data">
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Contact</th>
                        <th></th>
                    </tr>
                    <tr>
                        <td>{contact.name}</td>
                        <td>{contact.address}</td>
                        <td>{contact.contact}</td>
                        <td className="option"><button className="btn-del" onClick={() => dispatch(contactDelete(contact._id))}>Delete</button><button className="btn-edit">edit</button></td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default Data
