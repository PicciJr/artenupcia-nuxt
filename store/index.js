export const state = () => ({
  // post seleccionado por el usuario
  postSelectedId: ''
})

export const mutations = {
  setPostSelectedByUser(state, postId) {
    state.postSelectedId = postId
  }
}

export const actions = {
  /** Actualizar post seleccionado por el usuario */
  setPostSelectedByUser(vuexContext, postId) {
    vuexContext.commit('setPostSelectedByUser', postId)
  },
  /** Obtener post seleccionado por usuario */
  getPostSelectedByUser(state) {
    return state.postSelectedId
  }
}
