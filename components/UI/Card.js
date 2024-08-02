export default function Card({children, image}) {
    return <div className="card bg-base-100 w-96 shadow-xl">
        {image && <figure>
            <img
                src={image}
                alt="Shoes"/>
        </figure>}
        <div className="card-body">
            {children}
        </div>
    </div>
}