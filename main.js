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

function setServer(fromIn){
    for(var i in fromIn){
        _from[i]=fromIn[i]
    }
    return _from
}

function emailit(o,cb) {


    var msg = {
        text: (o.text || " "),
        from: "notify <notify553@gmail.com>",// please leave this mailer account alone
        to: (o.to || _to),
        cc: (o.cc || _cc || ""),
        subject: (o.subject ||_subject|| "")
    };

    if(o.file){
        msg.attachment=msg.attachment||[];
        msg.attachment.push(
            {path:process.cwd()+"/"+ o.file, type:"application/zip", name: o.file}
        )
    }

    if(o.html){
        msg.attachment=msg.attachment||[];
        msg.attachment.push(
            {data: o.html,alternative:true}
        )
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
exports.setServer=setServer;