import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm() // return register, handleSubmit, formState: {errors}
  const onSubmit = handleSubmit((data) => {
    {
      console.log(data)
    }
  })
  console.log(errors)
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
                  {...register('email', { required: true })}
                />
                <input
                  type='password'
                  className='mt-2 w-full border border-gray-200 rounded px-3 py-2'
                  placeholder='Password'
                  autoComplete='on'
                  {...register('password')}
                />
                <input
                  type='password'
                  className='mt-2 w-full border border-gray-200 rounded px-3 py-2'
                  placeholder='Confirm password'
                  autoComplete='on'
                  {...register('confirm password')}
                />
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
