module.exports = {
    usernameCheck(user){
        let flag = true;
        if(user.length < 6){
            flag = false;
        }
        if(user.indexOf(' ') !== -1){
            flag = false;
        }
        return flag;
    },
    passwordCheck(pass){
        return true;
    },
}