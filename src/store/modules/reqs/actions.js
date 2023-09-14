export default {
  async contactCoach(context, payload) {
    const newReqs = {
      userEmail: payload.email,
      msg: payload.msg,
    };

    const response = await fetch(
      `https://coachfinder-657ca-default-rtdb.asia-southeast1.firebasedatabase.app/requests/${payload.coachId}.json`,
      {
        method: "POST",
        body: JSON.stringify(newReqs),
      }
    );

    const responseData = await response.json();

    console.log(responseData);

    if (!response.ok) {
      const error = new Error(responseData.message || "failed to send request");
      throw error;
    }

    newReqs.id = responseData.name;
    newReqs.coachId = payload.coachId;

    context.commit("addReqs", newReqs);
  },
  async fetchReqs(context) {
    const coachId = context.rootGetters.userId;
    const response = await fetch(
      `https://coachfinder-657ca-default-rtdb.asia-southeast1.firebasedatabase.app/requests/${coachId}.json`
    );
    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(
        responseData.message || "failed to fetch requests"
      );
      throw error;
    }

    const reqs = [];

    for (const key in responseData) {
      const req = {
        id: key,
        coachId: coachId,
        userEmail: responseData[key].userEmail,
        msg: responseData[key].msg
      };
      reqs.push(req)
    }

    context.commit('setReqs', reqs)
  },
};
