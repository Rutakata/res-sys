export const getSoups = (state) => {
    return state.menuPage.soups
}
export const getDrinks = (state) => {
    return state.menuPage.drinks
}
export const getCurrentOrder = (state) => {
    return state.menuPage.currentOrder
}
export const getFetchingState = (state) => {
    return state.menuPage.isFetching
}