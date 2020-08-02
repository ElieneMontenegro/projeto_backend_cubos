const fs = require('fs');
const {join} = require('path');

const filePath = join(__dirname, 'users.json');

const getUsers = () => {
    const data = fs.existsSync(filePath)
        ? fs.readFileSync(filePath)
        : []

        try {
            return JSON.parse(data)
        } catch (error){
            return[]
        }
}

const saveUser = (users) => fs.writeFileSync(filePath, JSON.stringify(users, null, '\t'));

module.exports = app => {

    //showLine of users
    app.get('/showLine', async(req,res) => {
        const users = await getUsers();
        res.send({users})
    })

    //create user
    app.post('/createUser', async(req,res) => {
        const users = await getUsers()
        const newUser = { name: "John", id: 2 }

        users.push(newUser)

        saveUser(users)

        res.status(201).send('OK')
    })
}

// const userRoute = (app) => {
//     app.route('/users/:id?')
//     .get((req, res) => {
//         const users = getUsers()

//         res.send({users})
//     })
//     .post((req,res) => {
//         const users = getUsers()

//         users.push(req.body)

//         saveUser(users)

//         res.status(201).send('OK')
//     })
//     .put((req,res) => {
//         const users = getUsers()

//         saveUser(users.map(user => {
//             if(user.id == req.params.id){
//                 return {
//                     ...user,
//                     ...req.body
//                 }
//             }
//             return user
//         }))

//         res.status(200).send('OK')

//     })
//     .delete((req,res) => {
//         const users = getUsers()

//         saveUser(users.filter(user => user.id != req.params.id))

//         res.status(200).send('OK')
//     })
// }

module.exports = userRoute;