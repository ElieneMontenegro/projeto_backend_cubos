const fs = require('fs');
const {join} = require('path');

const filePath = 'database/users.json';

const saveUser = (users) => fs.writeFileSync(filePath, JSON.stringify(users, null, '\t'));
const SaveOnQueue = (users) => fs.writeFileSync(filePathFila, JSON.stringify(users, null, '\t'));

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

module.exports = {

    //create user
    async createUser(req,res) {
        
        const users = await getUsers();
        const id = Object.keys(users).length + 1
        const user = req.body
        
        user.id = id

        users.push(user)
        
        saveUser(users)
        
        res.status(201).json({
            message: "User successfully created.",
            status: true,
            user: user
        });
    },

}