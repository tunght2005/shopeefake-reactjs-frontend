import { z } from 'zod'

export const schema = z
  .object({
    email: z
      .string()
      .nonempty('Nhập email là bắt buộc')
      .email('email không hợp lệ')
      .min(5, 'Độ dài tối thiểu phải 5 - 160 ký tự')
      .max(160, 'Độ dài tối thiểu phải 5 - 160 ký tự'),
    password: z
      .string()
      .nonempty('Nhập password là bắt buộc')
      .min(6, 'Độ dài tối thiểu phải 6 - 160 ký tự')
      .max(160, 'Độ dài tối thiểu phải 6 - 160 ký tự'),
    confirm_password: z
      .string()
      .nonempty('Vui lòng nhập confirm password')
      .min(6, 'Độ dài tối thiểu phải 6 - 160 ký tự')
      .max(160, 'Độ dài tối thiểu phải 6 - 160 ký tự')
  })
  .refine((data) => data.confirm_password === data.password, {
    message: 'Confirm không khớp',
    path: ['confirm_password']
  })

export const loginSchema = schema.omit({
  confirm_password: true
})
export type LoginSchema = z.infer<typeof loginSchema>
export type Schema = z.infer<typeof schema>

export const searchSchema = z.object({
  name: z.string().trim()
})

export type SearchSchema = z.infer<typeof searchSchema>

const priceInput = z
  .string()
  .trim()
  .refine((value) => value === '' || /^\d+$/.test(value), {
    message: 'Giá không hợp lệ'
  })

export const priceFilterSchema = z
  .object({
    price_min: priceInput,
    price_max: priceInput
  })
  .superRefine((data, ctx) => {
    if (data.price_min !== '' && data.price_max !== '' && Number(data.price_max) < Number(data.price_min)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Giá không phù hợp',
        path: ['price_max']
      })
    }
  })

export type PriceFilterSchema = z.infer<typeof priceFilterSchema>
