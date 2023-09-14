export default {
   addReqs(state, payload){
    state.reqs.push(payload)
   },
   setReqs(state, payload){
    state.reqs = payload
   }
};