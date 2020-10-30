const Email = require('../models/Email');
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: "smtp-mail.outlook.com",
    port: 587,
    secure: false,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
    }
});

module.exports = {
    async index (req, res) {
        const emails = await Email.findAll();
        return res.json(emails);
    },
    async create (req, res) {
        const { email, name } = req.body;

        if (name == undefined || name == '' || name == ' ')
            return res.status(400).json({err: 'Nome inválido'});

        if (email == undefined || email == '' || email == ' ')
            return res.status(400).json({err: 'E-mail inválido'});

        const result = await Email.new(email, name);

        const emailContent = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'Seu e-book chegou',
            text: 'Seu Ebook está no link abaixo!',
            html: 
            `
            <h1>Olá, ${name}. Seu Ebook está no link abaixo!</h1>
            <p>Faça uma boa leitura! E se tiver alguma dúvida pode perguntar.</p>
            <a href="https://www.udemy.com/">Baixar agora!</a>
            `
        }

        if (result) {
            transporter.sendMail(emailContent, error => {
                if (error) {
                    console.log(error);
                } else {
                    console.log('Email enviado com sucesso');
                }
            });

            return res.status(201).json({message: 'Dados cadastrados com sucesso'});
        } else {
            return res.status(406).json({err: 'Não foi possível cadastrar os dados'});
        }        
    }
}