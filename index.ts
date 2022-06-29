import * as http from 'http';
import 'dotenv/config';
import { getUserList, getUser, createUser, updateUser, deleteUser } from './src/controllers/usersController';
import { validateId } from './helpers';

const server = http.createServer((req, res) => {
    
    const uuidRegExp = /[0-9a-f]{0}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/;

    if (req.url === '/api/users' && req.method === 'GET') {
        getUserList(req, res);

    } else if (req.url!.match(/\api\/users\/(\w+)/) && req.method === 'GET') {
        validateId(req, res, getUser);

    } else if (req.url === '/api/users' && req.method === 'POST')  {
        createUser(req, res);

    } else if (req.url!.match(/\api\/users\/(\w+)/) && req.method === 'PUT') {
        validateId(req, res, updateUser);
    
    } else if (req.url!.match(/\api\/users\/(\w+)/) && req.method === 'DELETE') {
        validateId(req, res, deleteUser);
    
    } else {
        res.writeHead(404, {'Content-Type': 'application/json'});
        res.end(JSON.stringify({message: 'Route Not Found'}));
    }
})

const PORT = process.env.PORT || 3500;

server.listen(PORT, () => console.log(`Server running on PORT: ${PORT}`));