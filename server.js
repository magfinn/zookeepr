const fs = require('fs');
const path = require('path');
const express = require('express');
const { animals } = require('./data/animals');
const htmlRoutes = require('./routes/htmlRoutes');
const apiRoutes = require('./routes/apiRoutes');

const PORT = process.env.PORT || 3001;
const app = express();

//middleware that instructs the server to make certain files readily available and to not gate it behind a server endpoint.
app.use(express.static('public'));
// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());
//anytime a client navigates to <outhost>/api, the app will use the router we set up in apiRoutes. If / is the endpoint, then the router will serve back our HTML routes.
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);



app.listen(PORT,() => {
    console.log(`API server now on port ${PORT}!`);
});
