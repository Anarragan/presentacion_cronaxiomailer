import axios from 'axios';
import cron from 'node-cron';
import nodemailer from 'nodemailer';
import 'dotenv/config'

const Transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
    }
});

async function getRandomDog(){
    try {
        const res = await axios.get(process.env.API_URL as string)
        return res.data.message;
    }catch(err){
        console.error('No sirve la API ',err)
    }
}

export function startCron(){
    cron.schedule('*/1 * * * *', async () => {
        const dogImage = await getRandomDog();

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: 'anmabaar2002@gmail.com',
            subject: 'Perritos',
            html: dogImage ? `<h1>Fotos de perritos</h1><img src="${dogImage}">`: `<h1>No hay fotos de perritos</h1>`
        }

        Transporter.sendMail(mailOptions, (err)=>{
            if(err){
                console.error('Error')
            }else {
                console.log('Correo enviado')
            }
        })
    })
}