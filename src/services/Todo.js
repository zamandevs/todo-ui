import api from './Api'

export default {
    index(){
        return api().get('todo')
    },
    show(id){
      return api().get(`todo/${id}`)
    },
    post(todo){
        return api().post('todo',todo)
    },
    patch(todo){
        return api().patch(`todo/${todo.id}`,todo)
    },
    delete(id){
        return api().delete(`todo/${id}`)
    }

}