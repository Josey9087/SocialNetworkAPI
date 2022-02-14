const { connect, connection } = require('mongoose');

connect("mongodb://localhost/socialnetapi", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

module.exports = connection;