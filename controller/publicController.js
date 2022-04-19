const nodemailer = require("nodemailer");

//Handle all public request here
const path = require('path');
const { getMaxListeners } = require("process");

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
        

exports.contactus = async (req, res) => {
    console.log(req.body);

    try {
        let transporter = nodemailer.createTransport({
           /*  host: "smtp.ethereal.email",
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
              user: testAccount.user, // generated ethereal user
              pass: testAccount.pass, // generated ethereal password
            }, */
            service: 'Gmail',
            auth : {
                user: 'bulentkyc@gmail.com',
                pass: process.env.GMAIL
            }
        });

        // send mail with defined transport object
        let info = await transporter.sendMail({
            from: '"Web United" <info@webunited.com>', // sender address
            to: "bulent.kayici@icloud.com, " + req.body.email, // list of receivers
            subject: "Contact Request by " + req.body.fullName, // Subject line
            text: req.body.msg, // plain text body
        });

        console.log("Message sent: %s", info.messageId);
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

        // Preview only available when sending through an Ethereal account
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    } catch (error) {
        console.log(error);
    }
}
