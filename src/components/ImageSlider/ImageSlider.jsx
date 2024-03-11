import { useEffect, useState } from "react"
import {BsArrowLeftCircleFill, BsArrowRightCircleFill} from 'react-icons/bs'
import './style.css'
export default function ImageSlider({url, limit = 5, page = 1}) {
    const [images, setImages] = useState([])
    const [currentSlide, setCurrentSlide] = useState(0)
    const [errorMessage, setErrorMessage] = useState(null)
    const [loading, setLoading] = useState(false)

    async function fetchImages(getUrl) {
        try {
            setLoading(true)
            const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
            console.log(response)
            const data = await response.json()

            if (data){
                setImages(data)
                setLoading(false)
            }
        } catch (error) {
            setErrorMessage(error.message)
            setLoading(false)
        }
    }
    useEffect(() => {
        if (url !== '') fetchImages(url)
    }, [url])

    if (loading) {
        return <p>Loading...</p>
    }
    if (errorMessage !== null) {
        return <div>Error occured ! {errorMessage}</div>;
    }

    function showPriviousImage () {
        setCurrentSlide(currentSlide === 0 ? images.length -1 : currentSlide -1 )
    }
    function showNextImage () {
        setCurrentSlide(currentSlide === images.length -1 ? 0 : currentSlide + 1)
    }

    return (
        <div className="container">
            <BsArrowLeftCircleFill
            onClick={() => showPriviousImage()}
            className=" arrow arrow-left"/>
            {
                images && images.length ?
                images.map((imageItem, index) => (
                    <img
                        key={imageItem.id}
                        alt={imageItem.download_url}
                        src={imageItem.download_url}
                        className={currentSlide === index ? "current-Image" : "hide-current-image"}
                    />
                )) : null
            }
            <BsArrowRightCircleFill
            onClick={() => showNextImage()}
            className="arrow arrow-right"/>
            <span className="circle-Indicator">
                {
                images && images.length ?
                images.map((_,index) => (
                    <button
                        key={index}
                        className={currentSlide === index ? "current-Indicator" : "current-Indicator hide-current-Indicator"}
                        onClick={() => setCurrentSlide(index)}
                    />
                )) : null
            }
            </span>
        </div>
    )
}