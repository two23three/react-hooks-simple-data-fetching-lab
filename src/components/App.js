import React,{useState,useEffect} from "react"

// create your App component here
function App (){
const [dogPicture,setDogPicture] = useState(null)
    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(response => response.json())
        .then((data)=>{
            setDogPicture(data.message)
        })
    },[])

    if (!dogPicture) {
        return <p>Loading...</p>}
    return <img src={dogPicture} alt="A Random Dog" />
}
export default App