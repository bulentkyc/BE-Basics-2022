const iphones = [
    {
        model: 'XXXXXX',
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

exports.getIphones = (req, res) => {
    const token = req.header('test');
    console.log(token);
    if (token == '12345abc') {
        res
            .status(200)
            .setHeader('Content-Type', 'application/json')
            .json(iphones)
    } else {
        res.send('Unauthorised request!')
    }
}

exports.home = (req, res) =>
    res
        .status(200)
        .setHeader('Content-Type', 'text/html')
        .send(`
        <html>
            <head>
            </head>
            <body>
                <h1>Welcome on Apis of E06-2!</h1>
                <img src = "https://images.unsplash.com/photo-1623282033815-40b05d96c903?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXBpfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60">
            </body>
        </html>
        `
        );
