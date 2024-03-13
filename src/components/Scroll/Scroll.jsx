import { useEffect, useState } from "react"
import './scroll.css'
export default function ScrollIndicator({url}) {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [scrollPrecentage, setScrollPrecentage] = useState(0)
    async function fetchData(getUrl){
        try {
            setLoading(true)
            const response = await fetch(getUrl)
            const responseProducts = await response.json()
            if (responseProducts && Array.isArray(responseProducts.products) && responseProducts.products.length > 0) {
                setData(responseProducts.products)
                setLoading(false)
            }
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=> {
        fetchData(url)
    },[url])

    function handleScrollPercentage() {
        // console.log(document.body.scrollTop, document.documentElement.scrollTop, document.documentElement.scrollHeight, document.documentElement.clientHeight)
        const howMuchToScroll = document.body.scrollTop ||  document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.clientHeight
        setScrollPrecentage((howMuchToScroll/scrollHeight) * 100);
    }
    useEffect(() => {
        window.addEventListener('scroll',handleScrollPercentage)
        return () => {
            window.removeEventListener('scroll', ()=> {})
        }
    }, [])
    console.log(scrollPrecentage)
    if (loading) {
        return <div className="loader">Loading...</div>
    }
    return (
        <div>
            <div className="top-container">
                <h1>Custom Scroll Indicator</h1>
                <div className="scroll-progress">
                    <div className="current-progress-bar" style={{width: `${scrollPrecentage}%`}}>

                    </div>
                </div>
            </div>
            <div className="data-container">
                {
                    data && data.length > 0 ?
                    data.map((dataitem) =>
                        <p>{dataitem.title}</p>
                    )
                    : null
                }
            </div>
        </div>
    )
}