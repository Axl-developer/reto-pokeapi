import env from "../../domain/constants/env"

export const get = <T>(url: string, params?: Record<string, string>): Promise<T> => {
    const searchParamString = new URLSearchParams(params).toString();
    const addQueryParams = searchParamString && `?${searchParamString}`
    return fetch(`${env.BASE_URL}${url}${addQueryParams}`).then(response => {
        if (!response.ok) {
            throw new Error(response.statusText)
        }
        return response.json() as Promise<T>
    })
}