import './Card.css';

const Card = (props) => {
  const vegetableImg =
    'https://plus.unsplash.com/premium_photo-1668673865275-ddb8bb80230c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZHVjZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=900&q=60';

  const fruitImage =
    'https://images.unsplash.com/photo-1610832958506-aa56368176cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJlc2glMjBmcnVpdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60';

  return (
    <div className="card">
      <h2 className="card-header">{props.name}</h2>
      <img
        className="image"
        src={props.type === 'vegetable' ? vegetableImg : fruitImage}
        alt="fruit or veg"
      />
    </div>
  );
};

export default Card;

// src="https://plus.unsplash.com/premium_photo-1668673865275-ddb8bb80230c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZHVjZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=900&q=60
// " alt="veg"
