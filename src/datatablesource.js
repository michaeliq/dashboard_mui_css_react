export const GetFakeData = async() =>{
    const raw = await fetch('https://jsonplaceholder.typicode.com/posts')
    const json = await raw.json()
    return json
}