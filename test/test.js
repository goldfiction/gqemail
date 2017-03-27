/**
 * Created by happy on 3/26/17.
 */
var emailit=require('./../main.js').emailit;

it("should be able to send email with attachment",function(done){
    emailit({to:"glidev5@gmail.com",file:"test/test.zip"},done);
})