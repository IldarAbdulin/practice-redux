import axios from "axios";
import { API } from "../../api";
import { Types } from "../types";

const isLoading = () => ({
    type: Types.ISLOADING,
})

const getPhotos = (photos) => ({
    type: Types.GET_PHOTOS,
    payload: photos
})

const getError = (err) => ({
    type: Types.ERROR,
    payload: err
})

export const fetchPhotos = () => (dispatch) => {
    dispatch(isLoading())
    axios
        .get(API.GETPHOTOS)
        .then(({ data }) => dispatch(getPhotos(data)))
        .catch((err) => dispatch(getError(err.message)))
}