const app = require('express')()
const http = require('http').Server(app)
const io = require('socket.io')(http)


app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html')
})

io.on('connection',(socket)=>{
    console.log('a user')
    socket.on('chat message',(msg)=>{
        io.emit('chat message', msg);
    })
    socket.broadcast.emit('hi');
    socket.on('disconnect',()=>{
        console.log('user disconnect')
    })
})

io.emit('some event', { someProperty: 'some value', otherProperty: 'other value' });

http.listen(3000,()=>{
    console.log('listening on 3000')
})