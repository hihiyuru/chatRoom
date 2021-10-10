import axios from "axios"

export const Authorization = 'CWB-CB840577-3B39-4B28-816C-CBDB487D93A1'

const config = {
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
    },
    timeout: 1000,
    baseURL: `https://opendata.cwb.gov.tw/api`
}

const get = (url, params) => {
    return axios.get(url, {...config, params: params})
        .then((res) => res.data )
        .catch((error) => { console.error(error) })
        .finally(() => { /* 不論失敗成功皆會執行 */ })
}

export const getWeather = params => get('/v1/rest/datastore/F-C0032-001', params)