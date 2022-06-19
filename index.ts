import * as http from 'http';
import { getUserList, getUser, createUser } from './src/controllers/usersController';
import { v4 as uuidv4, validate } from 'uuid';

const server = http.createServer((req, res) => {
    const uuidRegExp = /[0-9a-f]{0}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/

    if (req.url === '/api/users' && req.method === 'GET') {
        getUserList(req, res);

    } else if (req.url!.match(/\api\/users\/(\w+)/) && req.method === 'GET') {
        const id = req.url?.split('/').pop() || '';
        
        if (validate(id)) {
            getUser(req, res, id);

        } else { 
            res.writeHead(400, 'Invalid User Id', {'content-type' : 'text/plain'});
            res.end('Invalid User Id');
        }

    } else if (req.url === '/api/users' && req.method === 'POST')  {
            createUser(req, res);
    } else {
        res.writeHead(404, {'Content-Type': 'application/json'})
        res.end(JSON.stringify({message: 'Route Not Found'}))
    }
})

const PORT = process.env.PORT || 3500;

server.listen(PORT, () => console.log(`Server running on PORT: ${PORT}`));1