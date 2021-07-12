const express = require('express')
const app = express()
const friends = require('./model/FriendList');

//using middleware
app.use(express.json());


//Read the friends list
app.get('/friends', (req, res, next) => {
  res.json(friends)
  next();
})



app.listen(8080, () => console.log('Server Running at http://localhost:8080/'))