const nodemailer = require("nodemailer")

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, message } = req.body

    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    })

    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: "clovis20@gmail.com",
      subject: "Mensagem do formulário de contato",
      text: message,
    }

    try {
      await transporter.sendMail(mailOptions)
      res.status(200).send("E-mail enviado com sucesso!")
    } catch (error) {
      console.error("Erro ao enviar e-mail:", error)
      res.status(500).send("Erro ao enviar e-mail. Tente novamente mais tarde.")
    }
  } else {
    res.status(405).send("Método não permitido")
  }
}
