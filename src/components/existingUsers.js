import Button from '@restart/ui/esm/Button'
import axios from 'axios'
import React from 'react'
import { useSelector } from 'react-redux'
import { Table } from 'react-bootstrap'

const ExistingUsers = () => {
    const allUsers = useSelector((state) => {
        return state.users
    })

    return (
        <div>
            <h1>Existing users</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Password</th>
                        <th>Roles</th>
                        <th>Operations</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        ExistingUsers.map(ele => {
                            return (
                                <tr key={ele.username}>
                                    <td>{ele.username}</td>
                                    <td>{ele.password}</td>
                                    <td>{ele.roles}</td>
                                    <td>
                                        <Button>edit</Button>
                                        <Button>Delete</Button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </div>
    )
}

export default ExistingUsers
