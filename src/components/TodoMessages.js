function TodoMessages({ textList }) {

    return(
        <div>
            {textList.map((text, index) => (
                    <p>{text}</p>
            ))}
        </div>
    )
}
export default TodoMessages