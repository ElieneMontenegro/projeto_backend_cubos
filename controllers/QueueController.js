const fs = require('fs');
const {join} = require('path');
const _ = require('underscore')

const filePath = 'database/users.json';
const filePathQueue = 'database/queue.json';

const saveOnQueue = (queue) => fs.writeFileSync(filePathQueue, JSON.stringify(queue, null, '\t'));

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

const getQueue = () => {
    const data = fs.existsSync(filePathQueue)
        ? fs.readFileSync(filePathQueue)
        : []

        try {
            return JSON.parse(data)
        } catch (error){
            return[]
        }
}


module.exports = {

//addToLine
async queuePush(req,res) {
    const users = await getUsers();
    const queue = await getQueue();

    const pos = Object.keys(queue).length  + 1;
    const id = req.body.id;
    
    let user = users[id - 1] 

    user.pos = pos;

    queue.push(user);


    saveOnQueue(queue);

    res.status(201).json({
        message: "User included on line",
        status: true,
        pos: pos
    });
},

async findPosition(req,res){
    const queue = await getQueue();
    const endemail = req.body.email;
    const userFound = _.findWhere(queue, {email: endemail});

    res.status(201).json({
        message: "User encountered",
        status: true,
        posição: userFound.pos
    });
    
},

async showLine(req, res) {
    const queue = await getQueue();

    res.status(201).json({
        message: "Here's the line of users",
        status: true,
        queue: queue
    });
    
},

async filterLine(req, res){
    const queue = await getQueue();
    const genero = req.body.genero;
    const generoLine = _.filter(queue, {genero})

    console.log(generoLine);

    res.status(201).json({
        message: "Filtering...",
        status: true,
        queue: queue
    });
    

},

async popLine(req, res){
    const queue = await getQueue();

    queue.shift();

    console.log(queue);


    saveOnQueue(queue);

    res.status(201).json({
        message: "First on line deleted",
        status: true,
        queue: queue
    });
}




}


