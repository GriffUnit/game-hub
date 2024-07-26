import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '6d916ab05e7043f580769a399a795c30'
    }
});