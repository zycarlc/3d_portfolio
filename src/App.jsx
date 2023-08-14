import { BrowserRouter } from "react-router-dom"
import {
    About,
    Contact,
    Experience,
    Feedbacks,
    Hero,
    Navbar,
    Tech,
    Works,
    StarsCanvas,
} from "./components"

import { useEffect, useRef, useState } from "react"
import axios from "axios"

let PROJECT_ID = import.meta.env.VITE_SANITY
let DATASET = import.meta.env.VITE_DATASET
let QUERY = encodeURIComponent(`*[_type == "${import.meta.env.VITE_QUERY}"]`)
// Compose the URL for your project's endpoint and add the query
let PROJECT_URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`

const App = () => {
    const [result, setResult] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        axios(PROJECT_URL)
            .then(res => {
                setResult(res.data.result[0])
                setIsLoading(false)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <BrowserRouter>
            <div className="relative z-0 bg-primary">
                <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
                    <Navbar />
                    <Hero />
                </div>
                <About />
                <Experience />
                <Tech result={result} isLoading={isLoading} />
                <Works />
                <Feedbacks />
                <div className="relative z-0">
                    <Contact />
                    <StarsCanvas />
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App
