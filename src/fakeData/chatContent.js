import { getCurrentTime } from '../utils/changeTime'
export const initNormalChat = [
    {
        type: 'remote',
        contentType: 'text',
        message: '你好',
        time: getCurrentTime()
    }, {
        type: 'remote',
        contentType: 'text',
        message: '嗨！五倍券你打算怎麼使用',
        time: getCurrentTime()
    }
]