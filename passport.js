const passport = require("passport")
const google = require("passport-google-oauth20")
const keys = require("./keys")


passport.use(
    new google({
        callBackURL:"/google/redirect",
        clientID: keys.google.clientID,
        clientSecret:keys.google.clientSecret
    }, ()=>{

    })
) 