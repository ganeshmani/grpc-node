const client =require('./client')

client.delete({ id : 'd544a8f0-7352-11e9-98b4-d9f50be459c8' },(error,_) => {
    if(!error){
        console.log('Todo is deleted Successfully')
    }
    else{
        console.error(error)
    }

})
