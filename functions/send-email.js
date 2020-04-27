// eslint-disable-next-line @typescript-eslint/no-var-requires
const mail = require('@sendgrid/mail')

const { SENDGRID_API_KEY, REPLY_TO_EMAIL } = process.env
// For more info, check https://www.netlify.com/docs/functions/#javascript-lambda-functions
module.exports.handler = async function (event) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method not Allowed' }
  }

  const params = JSON.parse(event.body)

  const { name, email, message } = params

  mail.setApiKey(SENDGRID_API_KEY)
  const msg = {
    to: REPLY_TO_EMAIL,
    from: 'sunny@glvn.co',
    subject: 'glvn.co - New Message',
    text: `
      Message from ${name}<${email}>

      ${message}
    `,
  }

  try {
    await mail.send(msg)
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'there was an error' }),
    }
  } finally {
    return { statusCode: 204, body: JSON.stringify({ message: 'success' }) }
  }
}
