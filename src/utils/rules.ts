import type { RegisterOptions, UseFormGetValues } from 'react-hook-form'

type Rules = { [key in 'email' | 'password' | 'confirm_password']?: RegisterOptions }
export const getRules = (getValues?: UseFormGetValues<any>): Rules => ({
  email: {
    required: {
      value: true,
      message: 'Email là bắt buộc phải điền'
    },
    pattern: {
      value:
        /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
      message: 'Email không đúng định dạng'
    },
    maxLength: {
      value: 160,
      message: 'Độ dài phải từ 5 - 160 ký tự'
    },
    minLength: {
      value: 5,
      message: 'Độ dài tối thiểu phải 5 - 160 ký tự'
    }
  },
  password: {
    required: {
      value: true,
      message: 'Password là bắt buộc phải điền'
    },
    maxLength: {
      value: 160,
      message: 'Độ dài phải từ 6 - 160 ký tự'
    },
    minLength: {
      value: 6,
      message: 'Độ dài tối thiểu phải 6 - 160 ký tự'
    }
  },
  confirm_password: {
    required: {
      value: true,
      message: 'Nhập lại password'
    },
    maxLength: {
      value: 160,
      message: 'Độ dài phải từ 6 - 160 ký tự'
    },
    minLength: {
      value: 6,
      message: 'Độ dài tối thiểu phải 6 - 160 ký tự'
    },
    validate:
      typeof getValues === 'function'
        ? (value) => value === getValues('password') || 'Nhập lại password không đúng'
        : undefined
  }
})
