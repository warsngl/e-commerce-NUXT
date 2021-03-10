export const state=()=>({
  allProducts:[]
})

export const actions={
  async nuxtServerInit({commit}){
    let posts=await this.$axios.$get('https://jsonplaceholder.typicode.com/posts').then(r=>
    r.slice(0,19))
    let comments=await this.$axios.$get('https://jsonplaceholder.typicode.com/comments').then(r=>
    r.slice(0,9))
    let photos=await this.$axios.$get('https://jsonplaceholder.typicode.com/photos').then(r=>
    r.slice(0,9))
    const products = posts.map(p => {
      return {shopId:p.userId,title:p.title,description:p.body,comments,img:photos[0].url}
    })
    console.log(products);
    commit('uploadStore',products)
  },
  async fetchComments({commit},id){
    await this.$axios.$get('https://jsonplaceholder.typicode.com/posts/'+id+'/comments').then(r=>
    commit('fetchComments',r))
  },
  async getUser({commit},id){
    await this.$axios.$get('https://jsonplaceholder.typicode.com/users/'+id).then(r=>
    commit('getUser',r))
  }
}
export const mutations={
  uploadStore(state,p){
    state.allProducts=p
  },
  fetchComments(state,p){
    state.comments=p
  },
  getUser(state,p){
    state.user=p
  }
}