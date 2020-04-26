import axios from 'axios'

type ContactArgs = {
  name: string
  email: string
  message: string
}

const BASE_URL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:9000'
    : 'https://dev.glvn.co'

const URL = `${BASE_URL}/.netlify/functions/send-email`

export async function postContactForm(args: ContactArgs) {
  await axios.post(URL, JSON.stringify({ ...args }))
}
