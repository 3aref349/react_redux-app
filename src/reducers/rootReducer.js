
const initState ={
    posts :[
{id:'1',title:'Title 1',body:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta rerum, nobis iste ea doloremque ab. Placeat, distinctio nobis quos molestiae similique nostrum adipisci dignissimos doloribus nihil, nemo aspernatur dolores. Nulla'},
{id:'2',title:'Title 2 ',body:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta rerum, nobis iste ea doloremque ab. Placeat, distinctio nobis quos molestiae similique nostrum adipisci dignissimos doloribus nihil, nemo aspernatur dolores. Nulla'},
{id:'23',title:'Title 3 ',body:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta rerum, nobis iste ea doloremque ab. Placeat, distinctio nobis quos molestiae similique nostrum adipisci dignissimos doloribus nihil, nemo aspernatur dolores. Nulla'},
{id:'23',title:'Title 4 ',body:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta rerum, nobis iste ea doloremque ab. Placeat, distinctio nobis quos molestiae similique nostrum adipisci dignissimos doloribus nihil, nemo aspernatur dolores. Nulla'},

    ]
}

const rootReducer = (state = initState , action) => {
  if(action.type === 'DELETE_POST'){
      let  newPosts = state.posts.filter(post => {
          return action.id !== post.id 
      });
      return {
          ...state,
          posts:newPosts
      }
  }
    return state ;
}

export default rootReducer 