const PORT = 8000;
const app = require('./app')
const {loadPlanetData} = require('./models/planets.model')

const http = require('http')

const server = http.createServer(app);
const MONGO_URL = "mongodb+srv://Akshaybagai:<password>@cluster0.wgwmgay.mongodb.net/"
async function startServer() {
    await loadPlanetData()

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

}
startServer()

