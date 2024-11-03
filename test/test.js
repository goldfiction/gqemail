/**
 * Created by happy on 3/26/17.
 */
import emailit from './../main.js'
import {_setServer} from './../main.js'

it("should be able to send email with attachment",function(done){
    emailit({to:"glidev5@gmail.com",file:"test/test.zip"},done);
});

it("should be able to send html email",function(done){
    emailit({to:"glidev5@gmail.com",html:"click <a href='http://google.com'>here</a> to go to google"},done)
});

it("should be able to set server setting",function(done){
    _setServer({port:433});
    done()
})