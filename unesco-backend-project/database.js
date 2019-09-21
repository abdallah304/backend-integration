// database
const mongoose = require('mongoose');

// db config
const server = '127.0.0.1';
const port = '27017'; 
const database = 'UnescoDb';
const connectionSuccess = `database connected @ ${server}:${port} database: ${database}`;
const connectionFail = `database faild to connect ${server}:${port}`;

// db connection
class Data_base{
    constructor(){
        this._connect();
    }
    _connect(){
        mongoose.connect(
            `mongodb://${server}:${port}/${database}`,
            {   useNewUrlParser: true,
                useUnifiedTopology: true,
                useFindAndModify: false}).
            then(()=>{
                console.log(connectionSuccess);
            }).
            catch(()=>{
                console.log(connectionFail);
            })
    }
}

module.exports = new Data_base();