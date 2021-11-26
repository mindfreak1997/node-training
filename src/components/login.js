import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import { Card, Button } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { startAdminLogin } from '../Actions/adminAction'


const SignUp = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [formError, setError] = useState({})
    const handleChange = (e) => {
        if (e.target.name === 'userName') {
            setUserName(e.target.value)
        } else if (e.target.name === 'password') {
            setPassword(e.target.value)
        }
    }
    const error = {}
    const runValidation = () => {
        if (userName.length === 0) {
            error.userName = 'userName cannot not be blank'
        }
        if (password.length === 0) {
            error.password = 'password cannot be blank'
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        setError({})
        runValidation()
        if (Object.keys(error).length === 0) {
            const formData = {
                username: userName,
                password: password
            }
            const redirectAdmin = () => {
                navigate('/dashboard', { replace: true })
            }
            dispatch(startAdminLogin(formData, redirectAdmin))
        } else {
            setError(error)
        }
    }
    const handleReset = () => {
        setUserName('')
        setPassword('')
    }
    return (
        <div className='col-md-6 '>
            <Card className='mu-6' style={{ width: '18rem', marginTop: '170px' }}>
                <Card.Body>
                    <form style={{ marginTop: '70px', maxWidth: '400px' }} onSubmit={handleSubmit}>
                        <h1 className='my-8 font-weight-bold-display-4 pb-5 text-centre'>Login</h1>
                        <input type='text' className='form-control' name='userName' value={userName} placeholder='USERNAME' onChange={handleChange} />
                        {
                            formError.userName && <span style={{ color: 'red' }}>{formError.userName}</span>
                        } <br />

                        <input type='password' className='form-control' name='password' value={password} placeholder='Enter password' onChange={handleChange} />


                        {
                            formError.password && <span style={{ color: 'red' }}>{formError.password}</span>
                        }
                        <br />

                        <input type='submit' className='btn btn-primary mt-3' value='login' />
                        <Button className='btn btn-danger ' onClick={handleReset}>Reset</Button>
                    </form>

                </Card.Body>
            </Card>


        </div>
    )
}

export default SignUp

