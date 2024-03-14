
import { useEffect, useState } from 'react'
import './style.css'
export default function TicTacToe () {

    const [squares, setSquares] = useState(Array(9).fill(''))
    const [isXTurn, setIsXTurn] = useState(true)
    const [status, setStatus] = useState("")

    function squareClicked(squareIndex) {
        let copyOfSquares = [...squares]
        if (whoIsTheWinner(copyOfSquares) || copyOfSquares[squareIndex]) return;
        copyOfSquares[squareIndex] = isXTurn ? 'X' : 'O'
        setIsXTurn(!isXTurn)
        setSquares(copyOfSquares)
    }

    function Square ({value, onClick}) {
    return <button className="square" onClick={onClick}>
        {value}
    </button>
    }

    useEffect(() => {
        if(!whoIsTheWinner(squares) && squares.every(item => item !== '')){
            setSquares('this is a draw')
        }
        else if(whoIsTheWinner(squares)) {
            setStatus(`winner is ${whoIsTheWinner()}`)
        }
        else {
            setStatus(`Next player is ${isXTurn ? "X" : "O"}`);
        }

    }, [squares, isXTurn])

    function whoIsTheWinner() {
        const winningPatterns = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ]
        for(let i = 0; i < winningPatterns.length; i++) {
            const [x,y,z] = winningPatterns[i];

            if (
                squares[x] &&
                squares[x] === squares[y] &&
                squares[x] === squares[z]
            ){
                return squares[x]
            }
        }
    }
    function handleRestart() {
        setIsXTurn(true);
        setSquares(Array(9).fill(""));
    }

    return (
        <div className="ticatactoe-container">
            <div className="row">
                <Square value={squares[0]} onClick={() => squareClicked(0)}/>
                <Square value={squares[1]} onClick={() => squareClicked(1)}/>
                <Square value={squares[2]} onClick={() => squareClicked(2)}/>
            </div>
            <div className="row">
                <Square value={squares[3]} onClick={() => squareClicked(3)}/>
                <Square value={squares[4]} onClick={() => squareClicked(4)}/>
                <Square value={squares[5]} onClick={() => squareClicked(5)}/>
            </div>
            <div className="row">
                <Square value={squares[6]} onClick={() => squareClicked(6)}/>
                <Square value={squares[7]} onClick={() => squareClicked(7)}/>
                <Square value={squares[8]} onClick={() => squareClicked(8)}/>
            </div>
            <h1>{status}</h1>
            <button onClick={handleRestart}>Restart</button>
        </div>
    )
}
