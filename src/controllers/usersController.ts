import * as User from '../model/userModel';

export const getUserList = async (req: any, res: any) => {
    try {
        const users = await User.findAllUsers();
        console.log(users);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(users))

    } catch (err) {
        console.log(err);
    }

} 

export const getUser = async (req: any, res: any, id: string) => {
    try {
        const user = await User.findUser(id);
        if (user) {
            res.writeHead(200, {'Content-Type': 'application/json' });
            res.end(JSON.stringify(user));
        } else {
            res.writeHead(404, 'User doesn`t exist', {'content-type' : 'text/plain'});
            res.end('User doesn`t exist');
        }
    } catch (err) {
        console.log(err);
    }
    
} 


export const createUser = async (req: any, res: any) => {
    try {
        let body = '';

        req.on('data', (chunk: string) => {
            body += chunk.toString();
        })

        req.on('end', async () => {
            const {username, age, hobbies} = JSON.parse(body);
            const user = {
                username,
                age,
                hobbies
            };
            if (username && age && hobbies ){
                const newUser = await User.create(user)

                res.writeHead(201, {'Content-Type' : 'application/json'});
                res.end(JSON.stringify(newUser));  
            }  else {
                res.writeHead(404, 'Required fields are not in', {'content-type' : 'text/plain'});
                res.end('Required fields are not in');
            }
        })
    } catch (err) {
        console.log(err);
    }
} 

export const updateUser = async () => {
    
} 

export const deleteUser = async () => {
    
} 

