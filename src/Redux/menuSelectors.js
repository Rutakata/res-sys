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
export const getCurrentOrderPrice = (state) => {
    return state.menuPage.currentOrderPrice
}
export const getCurrentUser = (state) => {
    return state.authPage.username
}
export const getSearchedDishes = (state) => {
    return state.menuPage.searchedDishes
}