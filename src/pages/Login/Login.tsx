import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { zodResolver } from '@hookform/resolvers/zod'
import { type LoginSchema, loginSchema } from '../../utils/rules'
import Input from '../../components/Input'
import { useMutation } from '@tanstack/react-query'
import { loginAccount } from '../../apis/auth.api'
import type { ErrorResponse } from '../../types/utils.type'
import { isAxiosUnprocessableEntityError } from '../../utils/utils'
import { useContext } from 'react'
import { AppContext } from '../../contexts/app.context'

export default function Login() {
  const { setIsAuthenticated } = useContext(AppContext)
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors }
  } = useForm<LoginSchema>({ resolver: zodResolver(loginSchema) }) // return register, handleSubmit, formState: {errors}
  const loginAccountMutation = useMutation({
    //Tach confirm_password ra khoi data khi gui len server chi kiem tra no khi dang ki
    mutationFn: (body: LoginSchema) => loginAccount(body)
  })
  const onSubmit = handleSubmit((data) => {
    loginAccountMutation.mutate(data, {
      onSuccess: () => {
        setIsAuthenticated(true)
        navigate('/')
      },
      onError: (error) => {
        if (isAxiosUnprocessableEntityError<ErrorResponse<LoginSchema>>(error)) {
          const formError = error.response?.data.data
          if (formError) {
            Object.keys(formError).forEach((key) => {
              setError(key as keyof LoginSchema, {
                message: formError[key as keyof LoginSchema],
                type: 'Server'
              })
            })
          }
        }
      }
    })
  })
  return (
    <div className='bg-[#ee4d2d]'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='grid grid-cols-1 lg:grid-cols-5 py-12 lg:py-12 lg:pr-10'>
          <div className='lg:col-span-2 lg:col-start-4'>
            <form className='p-10 rounded bg-white shadow-sm' onSubmit={onSubmit} noValidate>
              <div className='text-xl'>Đăng Nhập</div>
              <div>
                <Input
                  type='email'
                  className='mt-8 w-full border border-gray-200 rounded px-3 py-2'
                  placeholder='Email'
                  name='email'
                  register={register}
                  errorMessage={errors.email?.message}
                />
                <Input
                  type='password'
                  className='mt-2 w-full border border-gray-200 rounded px-3 py-2'
                  placeholder='Password'
                  name='password'
                  register={register}
                  errorMessage={errors.password?.message}
                  autoComplete='on'
                />
                <div className='mt-3'>
                  <button
                    type='submit'
                    className='flex w-full items-center justify-center bg-red-500 py-4 px-2 text-sm uppercase text-white hover:bg-red-600'
                  >
                    Đăng nhập
                  </button>
                </div>
              </div>
              <div className='mt-8 flex items-center justify-center'>
                <span className='text-gray-400'>Bạn chưa có tài khoản?</span>
                <Link className='ml-1 text-red-400' to='/register'>
                  Đăng ký
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
