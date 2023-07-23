const PORT = 8000;
const app = require('./app')
const mongoose = require('mongoose')
const {loadPlanetData} = require('./models/planets.model')

const http = require('http')

const server = http.createServer(app);
const MONGO_URL = "mongodb+srv://akshaybagai52:eIekFr04IGno9ImZ@cluster1.7xj9ib6.mongodb.net/"

mongoose.connection.once('open', () => {
    console.log('mongo connection ready');
});

mongoose.connection.on('error', (err) => {
    console.error(err)
})

async function startServer() {
    await mongoose.connect(MONGO_URL)
    await loadPlanetData()

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

}
startServer()

 