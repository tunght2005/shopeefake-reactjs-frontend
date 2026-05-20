import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { schema, type Schema } from '../../utils/rules'
import Input from '../../components/Input'

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Schema>({ resolver: zodResolver(schema) }) // return register, handleSubmit, formState: {errors}
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
                <Input
                  type='password'
                  className='mt-2 w-full border border-gray-200 rounded px-3 py-2'
                  placeholder='Confirm password'
                  name='confirm_password'
                  register={register}
                  autoComplete='on'
                  errorMessage={errors.confirm_password?.message}
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
