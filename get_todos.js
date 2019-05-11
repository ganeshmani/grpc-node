const client = require('./client')

client.list({},(error,todos) => {
    if(!error){
        console.log('successfullt fetched todo lists');
        console.log(todos);
    }
    else{
        console.error(error);
    }
});

