export let getUsername = (state) => {
    return state.authPage.username
}
export let getErrorMessage = (state) => {
    return state.authPage.errorMessage
}
export let getIsAuth = (state) => {
    return state.authPage.isAuth
}