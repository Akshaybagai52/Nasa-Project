const PORT = 8000;
const app = require('./src/app')

const http = require('http')

const server = http.createServer(app);

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
