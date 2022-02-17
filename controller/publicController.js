//Handle all public request here
const path = require('path');

exports.main = (req, res) => 
    res
        .status(202)
        .setHeader('Content-Type', 'text/plain')
        .send('Life is easier with Express & MVC :)');

exports.about = (req, res) => 
    res
        .status(200)
        .setHeader('Content-Type', 'text/html')
        .send(`
        <html>
            <head>
            </head>
            <script>
                console.log('Welcome on our shop');
            </script>
            <body>
                <h1>Hello World!</h1>
                <img src = "https://images.unsplash.com/photo-1560209617-059c0bd661ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80">
            </body>
        </html>
        `
);

exports.contact = (req, res) => 
    res
        .status(200)
        .setHeader('Content-Type', 'text/html')
        .sendFile(path.join(__dirname, '../public/contact.html'))
        
