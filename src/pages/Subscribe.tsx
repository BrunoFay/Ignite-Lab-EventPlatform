import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Logo } from '../components/Logo'
import { useCreateSubscriberMutation } from '../graphql/generated'

export default function Subscribe() {
  const [subscriber, setSubscriber] = useState({ name: '', email: '' })
  const [createSubscribe, { loading }] = useCreateSubscriberMutation()
  const navegate = useNavigate()
  function handleFormData(e: any) {
    const name = e?.target.name
    const value = e?.target.value
    setSubscriber({ ...subscriber, [name]: value })
  }
  async function handleFormSubmite(e: FormEvent) {
    e.preventDefault()
    await createSubscribe({
      variables: {
        name: subscriber.name,
        email: subscriber.email
      }
    })
    navegate('/event')
  }
  return (
    <div className='min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center'>
      <div className='w-full max-w-[1100px] flex items-center justify-between mt-28 mx-auto'>
        <div className='max-w-[640px]'>
          <Logo />
          <h1 className='mt-8 text-[2.5rem] leading-tight'>
            Construa uma <strong className='text-blue-500'>aplicação completa</strong>, do zero, com <strong className='text-blue-500'>React</strong>
          </h1>
          <p className='mt-4 leading-relaxed text-gray-200'>
            Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas e com alta demanda para acessar as melhores oportunidades do mercado.
          </p>
        </div>
        <div className='p-8 rounded border-gray-500 border'>
          <strong className='text-2xl mb-6 block'>
            Inscreva-se gratuitamente
          </strong>
          <form
            action=""
            className='flex flex-col gap-2 w-full'
            onSubmit={handleFormSubmite}
          >
            <input
              name='name'
              type="text"
              className='bg-gray-900 rounded px-5 h-14'
              placeholder='Seu nome completo'
              onChange={handleFormData}
            />
            <input
              name='email'
              type="email"
              className='bg-gray-900 rounded px-5 h-14'
              placeholder='Digite seu email'
              onChange={handleFormData}
            />
            <button
              type='submit'
              disabled={loading}
              className='mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 disabled:opacity-50'
            >
              garantir minha vaga
            </button>
          </form>
        </div>
      </div>
      <div className='bg-secondaryBlur h-[650px] w-[1216px]'  />
    </div>
  )
}
