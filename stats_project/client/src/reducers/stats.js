import { FETCH_ALL, CREATE, UPDATE, DELETE } from "../constants/actionTypes";

export default (stats = [], action) => {
    switch (action.type) {
        case FETCH_ALL:
            return action.payload;
        case CREATE:
            return [...stats, action.payload];
        case UPDATE:
            return stats.map((stat) => stat._id == action.payload._id ? action.payload : stat);
        case DELETE:
            return stats.filter((stat) => stat._id != action.payload);
        default:
            return stats;
    }
}