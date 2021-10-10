const initialState = {
    nickName: '匿名者',
    currentAllChats: [],
    weatherResultData: [],
};

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_NAME":
            return {
                ...state,
                nickName: action.payload.nickName
            }
        case "FETCH_WETHER_DATA":
            return {
                ...state,
                weatherResultData: action.payload.weatherResult
            };
        case "ADD_WEATHER_CHAT":
            if (state.currentAllChats.length === 0) {
                return {
                    ...state,
                    currentAllChats: [action.payload]
                };
            }
            return state;
        case "INIT_WEATHER_CHAT":
            return {
                ...state,
                currentAllChats: initialState.currentAllChats
            };
        default:
            return state;
    }
};