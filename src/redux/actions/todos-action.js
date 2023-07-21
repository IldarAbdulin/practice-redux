import axios from 'axios';
import { API } from '../../api';
import { Types } from '../types';

const isLoading = () => ({
  type: Types.ISLOADING,
});

const getTodos = (todos) => ({
  type: Types.GET_TODOS,
  payload: todos,
});

const getTodo = (todo) => ({
  type: Types.GET_TODO,
  payload: todo,
});

const getError = (error) => ({
  type: Types.ERROR,
  payload: error,
});

export const fetchTodos = () => (dispatch) => {
  dispatch(isLoading());
  axios
    .get(`${API.GETODOS}`)
    .then(({ data }) => dispatch(getTodos(data)))
    .catch((error) => dispatch(getError(error.message)));
};

export const fetchSingleTodo = (id) => (dispatch) => {
  dispatch(isLoading());
  axios
    .get(API.GETTODO(id))
    .then(({ data }) => dispatch(getTodo(data)))
    .catch((err) => dispatch(getError(err)));
};
