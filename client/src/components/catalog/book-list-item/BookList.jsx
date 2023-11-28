
export default function BookList({
    title,
    type,
    img
}) {
    return (
        <div className='bookLi'>
            <h3>{title} </h3>
            <p>Type: {type}</p>
            <p className='img'><img className="bookLiImg" src={img} alt={title} /></p>
            <a className='button' href="/details">Details</a>
        </div>
    )
}