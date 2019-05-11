const grpc = require('grpc');
const uuid = require('uuid/v1');
const todoproto = grpc.load('todo.proto')
const server = new grpc.Server()

let todos = [
    { id : '1',title : 'Todo 1',iscompleted : false }
]

server.addService(todoproto.TodoService.service,{
    list : (_,callback) =>{
        callback(null,todos)
    },
    insert : (call,callback) => {
        let todo = call.request;
        todo.id = uuid()
        todos.push(todo)

        callback(null,todo)
    },
    update : (call,callback) => {
        let todo = todos.find((t) => t.id === call.request.id);
        if(todo){

            todo.title = call.request.title
            todo.iscompleted = call.request.iscompleted

            callback(null,todo)
        }
        else{

            callback({
                code : grpc.status.NOT_FOUND,
                details : "Not Found"
            })

        }
    },
    delete : (call,callback) => {
        let todoDelete = todos.find((n) => n.id === call.request.id);
        if(todoDelete != -1){

            todos.splice(todoDelete,1)
            callback(null,{})

        }
        else{

            callback({
                code : grpc.status.NOT_FOUND,
                details : "Not Found"
            })
            
        }
    }

})

server.bind('127.0.0.1:50051',
grpc.ServerCredentials.createInsecure())
console.log('server is running at http://127.0.0.1:50051')
server.start()

