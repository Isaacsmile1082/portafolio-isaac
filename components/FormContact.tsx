import { FormControl, FormHelperText, FormLabel } from '@chakra-ui/form-control'
import { Box, Heading } from '@chakra-ui/layout'
import { Button, Input, useToast } from '@chakra-ui/react'
import { Textarea } from '@chakra-ui/react'
import { FiSend } from '@react-icons/all-files/fi/FiSend'
import { useForm } from './hooks/useForm'
import React from 'react'
import { postMail } from '../api/helpers/contact'

interface FormProps {
  email: string
  name: string
  message: string
}

export const FormContact = () => {
  const { setForm, handleSubmit } = useForm({
    email: '',
    name: '',
    message: ''
  })

  const [loading, setLoading] = React.useState(false)

  const toast = useToast();

  const onSubmit = async (data: FormProps) => {
    try {
      setLoading(true)
      
      await postMail(data)
      toast({
        title: 'Message sended',
        status: 'success',
        duration: 9000,
        isClosable: true,
      })
    } catch (error) {
      toast({
        title: 'Error sending mail',
        
        status: 'error',
        duration: 9000,
        isClosable: true,
      })
    }
    setLoading(false)
  }

  return (
    <Box
      border="1px solid"
      borderRadius="lg"
      padding="1.5rem"
      borderColor="gray.600"
      fontFamily="Montserrat"
    >
      <Heading as="h4" paddingY="1rem">
        Contact me
      </Heading>
      <form onSubmit={e => handleSubmit(e, onSubmit)}>
        <FormControl id="name" marginY="1.2rem">
          <FormLabel>Your name:</FormLabel>
          <Input {...setForm('name')} type="text" />
          <FormHelperText>Your name</FormHelperText>
        </FormControl>
        <FormControl marginY="1.2rem">
          <FormLabel>Your Message:</FormLabel>
          <Textarea
            {...(setForm('message') as any)}
            placeholder="Tell me your necesity"
          />
        </FormControl>
        <Button
          type="submit"
          loadingText="Enviando"
          isLoading={loading}
          leftIcon={<FiSend />}
          marginY="1rem"
        >
          Send
        </Button>
      </form>
    </Box>
  )
}
