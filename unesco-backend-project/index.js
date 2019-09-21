// import { Server } from "https";

// app config
const express = require('express');
const port = '3000';
const serverMessageSuccess = `server runs on port ${port}`;

// routes
const DepartmentRouter= require('./routes/Department')
const NewsRouter= require('./routes/News')
const PublicationRouter= require('./routes/Publication')
const SubDepartmentRouter= require('./routes/SubDepartment')
const UsersRouter= require('./routes/Users')
const PhotoAlbumRouter= require('./routes/PhotoAlbum')


const app = express(); // app init
const dataBaseConnct = require('./database'); // database connect

// middlewares
app.use('/department', DepartmentRouter)
app.use('/news', NewsRouter)
app.use('/publication', PublicationRouter)
app.use('/SubDepartment', SubDepartmentRouter)
app.use('/users', UsersRouter)
app.use('/photoalbum', PhotoAlbumRouter)

app.listen(port,(err)=>{
    if(!err) console.log(serverMessageSuccess);
    else console.log(err)
})

