import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

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
  return (
    <div className='bg-[#ee4d2d]'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='grid grid-cols-1 lg:grid-cols-5 py-12 lg:py-12 lg:pr-10'>
          <div className='lg:col-span-2 lg:col-start-4'>
            <form className='p-10 rounded bg-white shadow-sm' onSubmit={onSubmit}>
              <div className='text-xl'>Đăng Nhập</div>
              <div className='mt-8'>
                <input
                  name='email'
                  type='email'
                  className='mt-8 w-full border border-gray-200 rounded px-3 py-2'
                  placeholder='Email'
                />
                <input
                  name='password'
                  type='password'
                  className='mt-2 w-full border border-gray-200 rounded px-3 py-2'
                  placeholder='Password'
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
