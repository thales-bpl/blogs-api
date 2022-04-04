const express = require('express');
require('dotenv').config();
const bodyParser = require('body-parser');

const userRouter = require('./routes/userRouter');
const loginRouter = require('./routes/loginRouter');
const categoryRouter = require('./routes/categoryRouter');

const app = express();

app.use(bodyParser.json());
app.use('/user', userRouter);
app.use('/login', loginRouter);
app.use('/categories', categoryRouter);

app.listen(process.env.PORT, () => console.log(`ouvindo porta ${process.env.PORT}!`));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});
