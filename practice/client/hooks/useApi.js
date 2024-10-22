//customhooks
import API from '../services/api'

const useApi = (urlObject)=> {
    const[response,setResponse] = useState(null)
    const [error, setError] = useState("")
    const [isLoading, setIsloading] = useState(null)

    const call = async(payload)=> {
        setResponse(null)
        setError("")
        setIsloading(true)

        try {
            let res = await API(urlObject,payload)
            setResponse(res.data)
        } catch (error) {
            setError(error.message)
        } finally {
            setIsloading(false)
        }
    }
    return{call,response,error,isLoading}
}
export default useApi;