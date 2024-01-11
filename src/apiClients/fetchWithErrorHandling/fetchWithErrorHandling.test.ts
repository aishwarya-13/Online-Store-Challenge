

import { fetchWithErrorHandling } from "./fetchWithErrorHandling"

global.fetch = jest.fn()

const url = 'https://iamfake.com'

describe('fetchErrorHAndling', ()=>{
    afterEach(() => {
        jest.clearAllMocks();
        jest.resetModules();
      });
    
    test('it should fetch data successfully', async () => {
        const mockResponseData = { data: 'Hello world!' };
        const mockFetch = jest.fn().mockResolvedValue({
          json: jest.fn().mockResolvedValue(mockResponseData),
        });
        global.fetch = mockFetch;
    

        const result = await fetchWithErrorHandling(url);
    
        expect(mockFetch).toHaveBeenCalledWith(url);
        expect(result).toEqual(mockResponseData);
    })

    test('it should handle network error', async ()=>{
        const mockFetch = jest.fn().mockRejectedValue(new Error('Network error'))
        global.fetch = mockFetch

        let receivedError

        try{
            await fetchWithErrorHandling(url)
        }catch(e){
            receivedError = e as Error
        }

        expect(receivedError?.message).toBe('A network error occurred')
    })

    test('it should handle parsing error', async ()=>{
        const mockFetch = jest.fn().mockResolvedValue({
            json: jest.fn().mockRejectedValue(new Error('Parsing error')),
        });
        global.fetch = mockFetch;

        let receivedError

        try{
            await fetchWithErrorHandling(url)
        }catch(e){
            receivedError = e as Error
        }

        expect(receivedError?.message).toBe('Failure to parse api response')
    })
})