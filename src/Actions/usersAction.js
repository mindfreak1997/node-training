import axios from "axios";
import swal from "sweetalert";

export const startUserAction = (formData, redirectLogin, userName) => {
    return (dispatch) => {
        axios.post('http://localhost:3000/api/login', formData)
            .then((res) => {
                const result = res.data
                console.log(result)
                if (result == 'login succesfull') {
                    swal("sucessfully loged in", {
                        icon: 'success'
                    })
                    redirectLogin()
                    adminAction(formData.username)
                } else {
                    alert(result)
                }
            })
            .catch((res) => {
                alert(res.message)
            })
    }
}

const adminAction = (data) => {
    return {
        type: 'USERNAME',
        payload: data
    }
}

export const getAllUsers = () => {
    return (dispatch) => {
        axios.get('http://localhost:3000/api/users')
            .then((res) => {
                getUsers(res.data)
            })
            .catch((err) => {
                alert(err.me)
            })
    }
}
const getUsers = (data) => {
    return {
        type: 'GET_USERS',
        payload: data
    }
}