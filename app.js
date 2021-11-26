const express = require('express')
const bodyParser = require('body-parser')
const mysql = require('mysql')

const app = express()
const router = express.Router()
const port = process.env.PORT || 3000;
// Parsing middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // New

const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'admin_nodejs'
})
//to get all the users
app.get('/api/users', (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) throw err
        connection.query('SELECT * from users', (err, rows) => {
            connection.release()
            if (!err) {
                res.send(rows)
            } else {
                console.log(err)
            }
        })
    })
})
//to add a user
app.post('/api/user', (req, res) => {

    pool.getConnection((err, connection) => {
        if (err) throw err

        const params = req.body
        connection.query('INSERT INTO users SET ?', params, (err, rows) => {
            connection.release() // return the connection to pool
            if (!err) {
                res.send(`user  has been added.`)
            } else {
                console.log(err)
            }

            console.log('The data from user table are:11 \n', rows)

        })
    })
});




// to login
app.post('/api/login', (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) throw err
        // console.log(`connected as id ${connection.threadId}`)

        const { username, password } = req.body

        connection.query('SELECT username,password from users WHERE username=?', [username], (err, rows) => {
            connection.release()
            console.log('rows', rows)
            if (rows.length > 0) {
                const result = rows.find(c => c.password == password)
                if (!result) {
                    res.send('invalid password')
                } else {
                    res.send('login succesfull')
                }
            } else {
                res.send('invalid username')
            }
            console.log('rows', rows)
        })


    })

})
// to update users
app.put('/api/user/:username', (req, res) => {

    pool.getConnection((err, connection) => {
        if (err) throw err
        console.log(`connected as id ${connection.threadId}`)

        const { username, password, roles } = req.body

        connection.query('UPDATE users SET password = ?, roles = ?  WHERE username = ?', [password, roles, username], (err, data) => {
            connection.release() // return the connection to pool

            if (!err) {
                res.send(data)
            } else {
                console.log(err)
            }

        })

        console.log(req.body)
    })
})
//to delete user
app.delete('/api/user/:username', (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) throw err
        // console.log(`connected as id ${connection.threadId}`)


        connection.query('DELETE from users WHERE username = ? ', [req.params.username], (err, data) => {
            connection.release()
            if (!err) {
                res.send('user is deleted')
            } else {
                console.log(err)
            }
        })

        console.log(req.params.username)
    })

})
// Listen on enviroment port or 3000
app.listen(port, () => console.log(`Listening on port ${port}`))