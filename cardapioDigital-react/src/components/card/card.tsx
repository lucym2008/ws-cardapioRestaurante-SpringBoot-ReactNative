import "./card.css";

interface CardProps {
    price: number,
    title: string,
    url: string
}

export function Card({ price, url, title } : CardProps){
    return(
        <div className="card">
            <img src={url}/>
            <h2>{title}</h2>
            <p><b>Valor:</b>{price}</p>
        </div>
    )
}