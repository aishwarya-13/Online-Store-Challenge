import { fetchWithErrorHandling } from "../fetchWithErrorHandling/fetchWithErrorHandling"

export const host = `https://fakestoreapi.com`

export const fetchAllProducts = async ()=>{
    const productsUrl = `${host}/products/`

    const queryResponse = await fetchWithErrorHandling(productsUrl)
    return queryResponse
}