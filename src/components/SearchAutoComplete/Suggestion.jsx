

export default function Suggestion({data, handleClick}) {
    return (
        <ul>
            {
                data && data.length ?
                data.map((item, index) =>
                    <li key={index} onClick={handleClick}>
                        {item}
                    </li>
                    ) : 'No suggestions'
            }
        </ul>
    )
}