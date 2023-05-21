declare namespace global {
    type Maybe<T> = T | null
    type Optional<T> = T | undefined
    type BrandedType<T, U = 'BrandedType'> = T & { __tag?: U }
}

export * from './app/providers/device'

export type Maybe<T> = T | null
export type Optional<T> = T | undefined
export type BrandedType<T, U = 'BrandedType'> = T & { __tag?: U }
