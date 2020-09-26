const authFunction = {
    isAuthenticated: false,

    authenticate (callbackFn){
        authFunction.isAuthenticated = true
        setTimeout(callbackFn,3000);//fake asyn call
    },

    signout(callbackFn){
        authFunction.isAuthenticated = false
        setTimeout(callbackFn,3000);//fake asyn call
    }
}

export default authFunction