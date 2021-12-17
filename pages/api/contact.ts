import sgMail from '@sendgrid/mail'
import { NextApiRequest, NextApiResponse } from 'next'

sgMail.setApiKey(process.env.INGRID as any)

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { message, name } = req.body

  const msg = {
    to: 'angeliss1082@gmail.com',
    from: 'angeliss1082@gmail.com',
    subject: 'hello',
    name,
    text: message
  }

  try {
    await sgMail.send(msg)
    res.json({ message: `Email has been sent` })
  } catch (error: any) {
    if (error.response) {
      console.log(error.response.body as any)
    }
    res.status(500).json({ error: 'Error sending email', message: error })
  }
}
