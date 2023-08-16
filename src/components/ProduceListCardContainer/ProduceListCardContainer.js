import defaultImg from '../../assets/defaultImg.png';
import Card from '../Card/Card';

function ProduceListCardContainer({ produceList }) {
  return (
    <div className="produce-list">
      {produceList.length > 0 ? (
        produceList.map((produce) => {
          return (
            <Card key={produce.name} name={produce.name} type={produce.type} />
          );
        })
      ) : (
        <div className="defaultImg">
          <h3>Please Select a month</h3>
          <img src={defaultImg} alt="defaultPic" />
        </div>
      )}
    </div>
  );
}
export default ProduceListCardContainer;
