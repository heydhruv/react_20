import { useState } from "react"

export default function RandomColor() {
    const [typeOfColor, setTypeOfColor] = useState('hex')
    const [color, setColor] = useState('#000000')

    const generateRandomHEX = () => {
        setTypeOfColor('hex')
        let hexColor = '#' + Math.ceil((Math.random() * 1000000))
        console.log(hexColor)
        setColor(hexColor)
    }
    const generateRandomRGB = () => {
        setTypeOfColor('rgb')
        let rgbColor = 'rgb(' + Math.floor((Math.random())*256) + ',' + Math.floor((Math.random())*256) +','+ Math.floor((Math.random())*256)+')'
        setColor(rgbColor)
    }
    return(
        <div className="container" style={{
            width : '100vw',
            height: '100vw',
            background: color,
        }}>
            <button onClick={typeOfColor === 'hex'? () => generateRandomHEX() : ()=> generateRandomRGB()}>RANDOM</button>
            <button onClick={()=> generateRandomHEX()}>RANDOM HEX COLOR</button>
            <button onClick={()=> generateRandomRGB()}>RANDOM RGB COLOR</button>
        </div>
    )
}