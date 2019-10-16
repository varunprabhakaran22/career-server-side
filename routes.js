require("./config/passport");
const passport = require("passport")
module.exports = (app, col) => {
    app.get("/api", (req, res) => {
        col.findOne({}, function(err, document) {
            console.log(document);
            let loca=JSON.stringify(document)
             loca=JSON.parse(loca)
            res.send(document);
            console.log(loca)
            
          });
    });

    app.get("/login",(req,res) => {
        res.send("login");
    })

    app.get("/logout",(req,res) => {
        res.send("logout");
    })
        
    app.get("/google",passport.authenticate('google',{
        scope:['profile']
    }))
 }


 

