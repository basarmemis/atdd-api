const app = require('express')();
const cors = require('cors');
const routes = require('./todo/todo.routes');
//const authMiddleware = require('./middleware/auth.middleware');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const port = 8080;

const init = () => {
    app.use(morgan('combined'));
    app.use(bodyparser.json());
    app.use(bodyparser.urlencoded({ extended: false }));
    app.use(cors());
    app.use(routes);
    //app.use(authMiddleware);
    return app.listen(port, () => console.log(`atdd-api listening on port ${port}...`));
};

init();