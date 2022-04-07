const Koa = require('koa');
const cors = require('@koa/cors');
const bodyparser = require('koa-bodyparser');
require('dotenv').config()
const sequelize = require('./models/index.model')

const router = require('./router.js')

const app = new Koa();

app.use(cors());
app.use(bodyparser());
app.use(router.routes())

const PORT = process.env.PORT || 3000;


(async () => {
  try {
    await sequelize.authenticate();
    app.listen(PORT, ()=> {
      console.log(`Server is running on http://localhost:${PORT}`);
    })
  } catch (err) {
    console.error(err.stack);
  }
})()
