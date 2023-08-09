import './Card.css';

 const Card = (props) => {    

    return (
        <div className="card">
          <h1>{props.name}</h1>
          <img className="image" src="https://plus.unsplash.com/premium_photo-1668673865275-ddb8bb80230c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZHVjZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=900&q=60 " alt="veg" />

        </div>
    )
}

export default Card;