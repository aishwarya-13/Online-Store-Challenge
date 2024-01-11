import { fetchWithErrorHandling } from "../fetchWithErrorHandling/fetchWithErrorHandling"
import { fetchAllProducts, host } from "./productsApiClient"

jest.mock('../fetchWithErrorHandling/fetchWithErrorHandling')

const mockFetchWithErrorHandling = fetchWithErrorHandling as jest.MockedFunction<typeof fetchWithErrorHandling>

describe('fetch products api client', ()=>{
    describe('Query all products', ()=>{
        beforeEach(()=>{
            mockFetchWithErrorHandling.mockClear()
        })

        const productsUrl = `${host}/products/`
    
        test('it should call fetchWithErrorHandling with correct url', async ()=>{
            await fetchAllProducts()

            expect(mockFetchWithErrorHandling).toHaveBeenCalledTimes(1)
            expect(mockFetchWithErrorHandling).toHaveBeenCalledWith(productsUrl)
        })

        test('it shoudl return the response from fetchWithErrorHandling', async ()=>{
            const mockResponse = {data: 'Hello World'}
            mockFetchWithErrorHandling.mockResolvedValueOnce(mockResponse)

            const result = await fetchAllProducts()

            expect(result).toEqual(mockResponse)
        })
    })
})