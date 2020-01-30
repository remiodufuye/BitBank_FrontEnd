
const initialState = {
    allcryptocurrencies: [],
    searchText: "" ,
    watchlistIds: [],
    portfolioIds:[] 
}


function reducer (oldState =initialState, action) {
    switch (action.type) {
        case "SEARCH": 
        return {
            ...oldState,
            searchText: action.payload 
        }
    }
    return oldState
}

export default reducer 