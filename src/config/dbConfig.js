const mongoose = require("mongoose")

const dbConfig = 'mongodb+srv://nicollyengenheira:admin@crudreact.umn0i1t.mongodb.net/?retryWrites=true&w=majority'

const connection = mongoose.connect(dbConfig, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

module.exports = connection

