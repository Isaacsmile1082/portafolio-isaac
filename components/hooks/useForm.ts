import React from 'react'

export const useForm = (reset: any) => {
  const [data, setData] = React.useState(reset ? reset : null)

  const onChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setData((state: any) => ({
        ...state,
        [e.target.name]: e.target.value
      }))
    },
    []
  )

  const setForm = (name: any) => ({
    onChange,
    name
  })

  const resetForm = React.useCallback(() => {
    setData(reset)
  }, [reset])

  const handleSubmit = (e: any, callback: any) => {
    e.preventDefault()
    callback(data)
  }

  return {
    data,
    setForm,
    handleSubmit,
    resetForm
  }
}
