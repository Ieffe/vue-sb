export default {
    reqs(state, _, _2, rootGetters){
        const coachId = rootGetters.userId
        return state.reqs.filter(req => req.coachId === coachId)
    },
    hasReqs(_, getters){
        return getters.reqs && getters.reqs.length > 0
    }
}