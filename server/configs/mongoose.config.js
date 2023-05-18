const mongoose = require("mongoose")

const dbName = process.env.ATLAS_DATABASE; //info comes from .env, sets up Mongo db name
const username = process.env.ATLAS_USERNAME; //info comes from .env
const password = process.env.ATLAS_PASSWORD; //info comes from .env

const uri = `mongodb+srv://${username}:${password}@marklcluster.eg2yamc.mongodb.net/${dbName}`

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log(`AI-COM/RESPOND:TRUE//STATUS:ACTIVE//SKYSHOCK-EVENT-IMMINENT: ${dbName}`))
    .catch((err) => console.log(`AI-COM/RESPOND:FALSE//STATUS:INACTIVE//MIDNIGHT-EXIGENT-INITIATED...`, err))