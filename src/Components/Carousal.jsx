import Carousel from 'react-bootstrap/Carousel';

function UncontrolledExample({title,data}) {
  return (
    <>
        <h3>{title}</h3>
    
    <Carousel>

      {
        data?.map((obj)=>{
            return(
                <Carousel.Item>
        <img
          className="d-block w-100"
          src={obj.image}
          alt="First slide"
          height={"500vh"}
        />
        <Carousel.Caption>
          <h3>{obj.place}</h3>
          <p>{obj.description}</p>
        </Carousel.Caption>
      </Carousel.Item>
            )
        })
      }
      
      
    </Carousel>
    </>

  );
}

export default UncontrolledExample;