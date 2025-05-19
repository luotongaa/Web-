// 1. introduce express
const express = require('express');

// 2. Creat an application object
const app = express();

// 3. Creat routing rules
// request : Encapsulation of the request message
// response : Encapsulation of response messages
app.get('/', (request, response) => {
    // Set the response
    response.send('Hell Express');
});

// 4. Listen to the port to start the service
app.listen(8000, () => {
    console.log("The service has been initiated, 8000 port listening in progress");
});




