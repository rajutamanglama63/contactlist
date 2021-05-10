import React from 'react'
import {useSelector} from 'react-redux'
import Data from '../components/Data'

const DataPage = () => {
    const contacts = useSelector((state) => state.contacts);
    console.log(contacts);
    return (
        !contacts.length ? <h1>LOADING ...</h1> : (
            
                <div className="container">
                    {
                        contacts.map((contact) => (
                            <Data key={contact._id} contact={contact} />
                        ))
                    }
                </div> 
            
        )
    )
}

export default DataPage
