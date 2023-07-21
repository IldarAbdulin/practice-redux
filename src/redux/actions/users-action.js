import axios from 'axios';
import { API } from '../../api';
import { Types } from '../types';

const isLoading = () => ({
  type: Types.ISLOADING,
});

const getUsers = (users) => ({
  type: Types.GET_USERS,
  payload: users,
});

const getUser = (user) => ({
  type: Types.GET_USER,
  payload: user,
});

const getError = (error) => ({
  type: Types.ERROR,
  payload: error,
});

export const fetchUsers = () => (dispath) => {
  dispath(isLoading());
  axios
    .get(API.GETUSERS)
    .then(({ data }) => dispath(getUsers(data)))
    .catch((error) => dispath(getError(error.message)));
};

export const fetchSingleUser = (id) => (dispatch) => {
  dispatch(isLoading());
  axios
    .get(API.GETUSER(id))
    .then(({ data }) => dispatch(getUser(data)))
    .catch((err) => dispatch(getError(err)));
};
