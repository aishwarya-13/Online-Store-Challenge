 export async function fetchWithErrorHandling<T>(url:string | RequestInfo, init?: RequestInit | undefined): Promise<any>{
    let response
    try{
        response = await fetch(url)
    }catch(e){
        throw new Error('A network error occurred', {cause: e})
    }
    let deserializedResponse:T
    try{
        deserializedResponse = await response.json()
    }catch(e){
        throw new Error('Failure to parse api response', {cause: e})
    }
    return deserializedResponse
 }