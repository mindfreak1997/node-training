
import React, { useState } from 'react'


const UserForm = ({ formSubmission, name: username, authentication: password, position: roles }) => {
    const [username, setName] = useState(username ? username : '')
    const [password, setPassword] = useState(password ? password : '')
    const [roles, setRoles] = useState(roles ? roles : '')
    const [formError, setError] = useState({})

    const error = {}

    const runValidation = () => {
        if (username.length === 0) {
            error.name = 'name cannot be blank'
        }
        if (password.length === 0) {
            error.mobile = 'mobile cannot be blank'
        }
        if (roles.length === 0) {
            error.email = 'email cannot be blank'
        }
    }
    const handleChange = (e) => {
        if (e.target.name === 'name') {
            setName(e.target.value)
        } else if (e.target.name === 'mobile') {
            setPassword(e.target.value)
        }
        else if (e.target.name === 'email') {
            setRoles(e.target.value)
        }
    }
    const resetForm = () => {
        setName('')
        setPassword('')
        setRoles('')
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        setError({})
        runValidation()
        if (Object.keys(error).length === 0) {
            const formData = {
                name: name,
                mobile: mobile,
                email: email
            }
            formSubmission(formData, resetForm, _id)
        } else {
            setError(error)
        }
    }
    return (
        <div className='col-lg-4'>

            <form style={{ maxWidth: '300px', margin: 'auto' }} onSubmit={handleSubmit}>
                {
                    name ? <h3> Edit Customer</h3> : <h3>Add Customer</h3>
                }

                <input type='text' className='form-control' name='name' placeholder='Enter name' value={name} onChange={handleChange} />
                {
                    formError.name && <span style={{ color: 'red' }}>{formError.name}</span>
                }
                <br />
                <input type='text' className='form-control' name='mobile' placeholder='Enter Mobile No' value={mobile} onChange={handleChange} />
                {
                    formError.mobile && <span style={{ color: 'red' }}>{formError.mobile}</span>
                }
                <br />
                <input type='text' className='form-control' name='email' placeholder='Enter email ' value={email} onChange={handleChange} />
                {
                    formError.email && <span style={{ color: 'red' }}>{formError.email}</span>
                }
                <br />
                {
                    name ? (
                        <input className='btn btn-success' type='Submit' value='Save' />
                    ) : (
                        <input className='btn btn-success' type='Submit' value='Add customer' />
                    )
                }
                <button className='btn btn-secondary' onClick={resetForm}>Cancel</button>
            </form>
        </div>
    )
}
export default UserForm


