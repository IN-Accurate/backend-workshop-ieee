const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());
//Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources
const db = require('./models');

//Routers - endpoints

const usersRouter = require('./routes/Users');
app.use('/auth', usersRouter);

db.sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log('Server running on port 3001');
  });
});
