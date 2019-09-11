import request from "superagent";

const baseUrl = "http://localhost:4000";

export const ALL_ADVS = "ALL_ADVS";

const getAdvs = payload => ({
  type: ALL_ADVS,
  payload
});

export const fetchAdvs = () => (dispatch, getState) => {
  const state = getState();
  const { advs } = state;
  if (!advs.length) {
    request(`${baseUrl}/advs`)
      .then(response => {
        console.log(response.body);
        dispatch(getAdvs(response.body));
      })
      .catch(console.error);
  }
};
