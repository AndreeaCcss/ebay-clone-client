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
        dispatch(getAdvs(response.body));
      })
      .catch(console.error);
  }
};

export const CREATE_ADV = "CREATE_ADV";

const newAdv = payload => ({
  type: CREATE_ADV,
  payload
});

export const createAdv = data => dispatch => {
  request
    .post(`${baseUrl}/advs`)
    .send(data)
    .then(response => {
      const action = newAdv(response.body);
      dispatch(action);
    })
    .catch(console.error);
};

export const ADV_FETCHED = "ADV_FETCHED";
const advFetch = payload => ({
  type: ADV_FETCHED,
  payload
});

export const loadAdv = id => dispatch => {
  request(`${baseUrl}/advs/${id}`)
    .then(response => {
      dispatch(advFetch(response.body));
    })
    .catch(console.error);
};

export const ADV_DELETE_SUCCESS = "ADV_DELETE_SUCCESS";
const advDelete = advId => ({
  type: ADV_DELETE_SUCCESS,
  advId
});

export const deleteAdv = id => dispatch => {
  request
    .delete(`${baseUrl}/advs/${id}`)
    .then(() => dispatch(advDelete(id)))
    .catch(console.error);
};

export const editAdv = (id, formData) => dispatch => {
  request
    .put(`${baseUrl}/advs/${id}`, formData)
    .then(response => {
      dispatch(advFetch(response.body));
    })
    .catch(console.error);
};
