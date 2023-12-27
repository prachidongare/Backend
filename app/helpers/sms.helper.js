// Download the helper library from https://www.twilio.com/docs/node/install
// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure
const accountSid = 'ACa83bea10d505958b32f4a9555c0a6f94';
const authToken = "5aafd4679c2f9a2274d6fa09b344dbae";
const client = require('twilio')(accountSid, authToken);
 
module.exports = {
  sendSms: async (bod,numb) => {
    console.log('dasdasd',bod,numb)
   await client.messages
      .create({
        body: bod,
        from: "+16067660691",
        to: numb,
      })
      .then((message) => console.log(message.sid));
  },
};