interface PropsPostMail {
  name: string
  email: string
  message: string
}

export const postMail = async (data: PropsPostMail) => {
  try {
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(data)
    })

    console.log(res)
  } catch (error) {
    console.log(error)
  }
}
