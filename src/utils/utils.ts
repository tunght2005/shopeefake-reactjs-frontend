import axios, { AxiosError } from 'axios'
import HttpStatusCode from '../constants/httpStatusCode.enum'
import { isUndefined, omitBy } from 'lodash'

export function isAxiosError<T>(error: unknown): error is AxiosError<T> {
  // eslint-disable-next-line import/no-named-as-default-member
  return axios.isAxiosError(error)
}

export function isAxiosUnprocessableEntityError<FormError>(error: unknown): error is AxiosError<FormError> {
  return isAxiosError(error) && error.response?.status === HttpStatusCode.UnprocessableEntity
}

export function isAxiosUnauthorizedError<UnauthorizedError>(error: unknown): error is AxiosError<UnauthorizedError> {
  return isAxiosError(error) && error.response?.status === HttpStatusCode.Unauthorized
}

export function formatCurrency(currency: number) {
  return new Intl.NumberFormat('de-DE').format(currency)
}

export function formatNumberToSocialStyle(value: number) {
  return new Intl.NumberFormat('en', {
    notation: 'compact',
    maximumFractionDigits: 1
  })
    .format(value)
    .replace('.', ',')
    .toLowerCase()
}

export function removeUndefined<T extends Record<string, unknown>>(obj: T) {
  return omitBy(obj, isUndefined) as {
    [K in keyof T as T[K] extends undefined ? never : K]: Exclude<T[K], undefined>
  }
}

export const rateSale = (original: number, sale: number) => Math.round(((original - sale) / original) * 100) + '%'
