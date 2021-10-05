import moment from "moment"

export const changeTime = (timestamp) => {
    return moment(timestamp*1000).format("HH:mm")
}

export const getCurrentTime = () => {
    return moment().unix();
}