import React from 'react'
import { Link } from 'react-router-dom'


const DashBoard = () => {
    return (
        <div>


            <ul style={{ listStyleType: 'none', margin: 0, padding: 0, height: '60px' }}>

                <li style={{ display: 'inline', marginRight: '100px', backgroundColor: 'cyan', fontSize: '20px' }}>
                    <Link to="/dashboard/hr" style={{ textDecoration: 'none', color: 'black' }}>HR</Link>
                </li>

                <li style={{ display: 'inline', marginRight: '100px', backgroundColor: 'blue', fontSize: '20px' }}>
                    <Link to="/dashboard/finance" style={{ textDecoration: 'none', color: 'black' }}>Finance</Link>
                </li>

                <li style={{ display: 'inline', marginRight: '100px', backgroundColor: 'yellow', fontSize: '20px' }}>
                    <Link to="/dashboard/admin/allUsers" style={{ textDecoration: 'none', color: 'black' }}>Admin</Link>
                </li>



            </ul>


        </div>
    )
}

export default DashBoard
