import express from 'express';

const server = express();

server.get('*', (req, res) => {
    res.send(req.url);
});

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});
