const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/ProductManager', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("We have Reached Product Manager Database!!"))
.catch(err => console.log('Something seems a bit wrong? I think we made a wrong turn.', err))