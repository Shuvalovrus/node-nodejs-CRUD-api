import { validate } from 'uuid';

export const validateId = (req: any, res: any, callback: any) => {

    const id = req.url?.split('/').pop() || '';
    if (validate(id)) {
        callback(req, res, id);

    } else { 
        res.writeHead(400, 'Invalid User Id', {'content-type' : 'text/plain'});
        res.end('Invalid User Id');

    }
} 

export const getBodyData = (req:any, res:any) => {

    return new Promise( (resolve, reject) => {

        try {
            let body = '';

            req.on('data', (chunk: string) => {
                body += chunk.toString();
            })

            req.on('end', async () => {
                resolve(body);
            })

        } catch (err) {
            reject(err);
        }        
        
    })
}