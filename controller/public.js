//Handle all public request here
const path = require('path');

const iphones = [
    {
        model: 'X',
        color: 'White',
        price: '700$',
        imgURL: 'https://images.unsplash.com/photo-1523206489230-c012c64b2b48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
    },
    {
        model: 'XS',
        color: 'White',
        price: '500$',
        imgURL: 'https://images.unsplash.com/photo-1512054502232-10a0a035d672?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80'
    },
    {
        model: '13 Pro',
        color: 'White',
        price: '1500$',
        imgURL: 'https://images.unsplash.com/photo-1530319067432-f2a729c03db5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=789&q=80'
    }
];


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

exports.getIphones = (req, res) => 
    res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json(iphones)

exports.contact = (req, res) => 
    res
        .status(200)
        .setHeader('Content-Type', 'text/html')
        .sendFile(path.join(__dirname, '../public/contact.html'))