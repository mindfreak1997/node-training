import React from 'react'
import { Link } from 'react-router-dom'
import UserForm from './addUser'
import ExistingUsers from './existingUsers'

const Admin = () => {
    return (
        <div className='nav bg-grey'>
            {<ul style={{ listStyleType: 'none', margin: 0, padding: 0, height: '60px' }}>

                <li style={{ display: 'inline', marginRight: '100px', backgroundColor: 'cyan', fontSize: '20px' }}>
                    <Link to="/dashboard/admin/allUsers" style={{ textDecoration: 'none', color: 'black' }}>EXISTING USERS</Link>
                </li>

                <li style={{ display: 'inline', marginRight: '100px', backgroundColor: 'cyan', fontSize: '20px' }}>
                    <Link to="/dashboard/admin/addUsers" style={{ textDecoration: 'none', color: 'black' }}>ADD USERS</Link>
                </li>

                <li style={{ display: 'inline', marginRight: 'auto', backgroundColor: 'green', fontSize: '20px' }}>
                    <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>LOGOUT</Link>
                </li>

            </ul>}
        </div>
    )
}

export default Admin
