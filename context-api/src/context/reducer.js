export const initialState = {
    todos: [],
};

//action objesi
/*{
    type: "ADD_TODO",
    payload: todo
}*/

const reducer = (state, action) => {
    console.log(action)

    switch(action.type)
    {
        case 'ADD_TODO':
           return {
             ...state, 
             //Array de en yukarıda gözükmesi için en başa yazıyorum.
             todos: [action.payload, ...state.todos]
           };

        case 'REMOVE_TODO':
           return {
             ...state,
             //Kullanıcı tarafından gönderdiğim todo id ile aynı olmayanları al
             //aynı olanı at. Todo.jsx deki payload kısmındaki todo id'ye sahip
             //olanı sil anlamındadır. Bunu filter metodu ile yapıyoruz.
             todos: [...state.todos].filter(todo => todo.id !== action.payload)
           };

        case 'COMPLETE_TODO':
           return {
             ...state,
             todos: state.todos.map((todo) => {
               if(todo.id !== action.payload) {
                 return todo;
               }

               return {
                 ...todo,
                 isCompleted: !todo.isCompleted,
               };
             }),
           };
        
           case 'UPDATE_TODO':
            return {
              ...state,
              todos: state.todos.map((todo) => {
                if(todo.id !== action.payload.todoId) {
                  return todo;
                }
 
                return {
                  ...todo,
                  content: action.payload.newValue,
                };
              }),
            };
        

        
        default:
           return {
              ...state,
           };
    } //end switch
};

export default reducer;