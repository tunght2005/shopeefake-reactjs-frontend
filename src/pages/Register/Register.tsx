import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import type { RegisterOptions } from 'react-hook-form'
import { getRules } from '../../utils/rules'

interface FormData {
  email: string
  password: string
  confirm_password: string
}

export default function Register() {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors }
  } = useForm<FormData>() // return register, handleSubmit, formState: {errors}
  const rules = getRules(getValues)
  const onSubmit = handleSubmit((data) => {
    {
      console.log('Dữ liệu truyền vào:', data)
    }
  })
  // console.log(errors)
  return (
    <div className='bg-[#ee4d2d]'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='grid grid-cols-1 lg:grid-cols-5 py-12 lg:py-12 lg:pr-10'>
          <div className='lg:col-span-2 lg:col-start-4'>
            <form action='' className='p-10 rounded bg-white shadow-sm' onSubmit={onSubmit} noValidate>
              {' '}
              {/*noValidate thuộc tính này ngăn cho type email validate*/}
              <div className='text-xl'>Đăng Nhập</div>
              <div className='mt-8'>
                <input
                  type='email'
                  className='mt-8 w-full border border-gray-200 rounded px-3 py-2'
                  placeholder='Email'
                  {...register('email', rules.email as RegisterOptions<FormData, 'email'>)}
                />
                <div className='mt-1 text-red-600 min-h-4 text-sm'>{errors.email?.message}</div>
                <input
                  type='password'
                  className='mt-2 w-full border border-gray-200 rounded px-3 py-2'
                  placeholder='Password'
                  autoComplete='on'
                  {...register('password', rules.password as RegisterOptions<FormData, 'password'>)}
                />
                <div className='mt-1 text-red-600 min-h-4 text-sm'>{errors.password?.message}</div>
                <input
                  type='password'
                  className='mt-2 w-full border border-gray-200 rounded px-3 py-2'
                  placeholder='Confirm password'
                  autoComplete='on'
                  {...register('confirm_password', {
                    ...(rules.confirm_password as RegisterOptions<FormData, 'confirm_password'>)
                  })}
                />
                <div className='mt-1 text-red-600 min-h-4 text-sm'>{errors.confirm_password?.message}</div>
                <div className='mt-3'>
                  <button
                    type='submit'
                    className='flex w-full items-center justify-center bg-red-500 py-4 px-2 text-sm uppercase text-white hover:bg-red-600'
                  >
                    Đăng ký
                  </button>
                </div>
              </div>
              <div className='mt-8 flex items-center justify-center'>
                <span className='text-gray-400'>Bạn đã có tài khoản?</span>
                <Link className='ml-1 text-red-400' to='/login'>
                  Đăng Nhập
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
