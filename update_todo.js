const client = require('./client');

let todo = {
    id : '1',
    title : 'Hello gRPC',
    iscompleted : true
}

client.update(todo,(error,todo) => {
    if(!error){
        console.log('Note is updated successfully',todo)
    }
    else{
        
        console.error(error)
    }
})