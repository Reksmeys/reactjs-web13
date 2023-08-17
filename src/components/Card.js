function Card({imageURL, title}){
    return(
        <>
            <div className="card h-100 shadow-sm border-0">
                <img 
                    src={imageURL ?? "https://picsum.photos/640/640?r=5369"} 
                    className="card-img-top" alt="card image" 
                />
                <div className="card-body">
                    <h2 className="card-text">{title}</h2>
                </div>
            </div>
        </>
    )
}
export default Card