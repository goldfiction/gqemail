/**
 * Created by happy on 3/26/17.
 */
var email = require("emailjs");
var _subject=" ";
var _cc="";
var _to="";

var _from = {
    user: "notify553@gmail.com", // leave this account alone
    password: "23062306",            // don't change password
    host: "smtp.gmail.com",      // use your own gmail account for privacy
    port: 465,
    ssl: true
};
var delayTime = 10;

function emailit(o,cb) {


    var msg = {
        text: (o.text || " "),
        from: "notify <notify553@gmail.com>",// please leave this mailer account alone
        to: (o.to || _to),
        cc: (o.cc || _cc || ""),
        subject: (o.subject ||_subject|| "")
    };

    if(o.file){
        msg.attachment=[
            {path:process.cwd()+"/"+ o.file, type:"application/zip", name: o.file}
        ]
    }

    //console.log(msg);

    var server = email.server.connect(_from);

    setTimeout(function () {
        server.send(msg, function (err, message) {
            //if(!err)
            //    console.log("email sent!");
            try {
                cb(err, message);
            } catch (e) {
            }
        });
    }, delayTime);
}

exports.emailit=emailit;