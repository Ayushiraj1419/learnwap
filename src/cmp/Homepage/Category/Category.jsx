import catogeryData from "../../Json-api/Category.json";
import "./Category.css";
import{
     Container,
     Row,
     Col,
     Card
}from "react-bootstrap";
 

const Column = (data)=>{
   const design =(
    <>
    <Col md className="px-4 mt-4 mt-md-0">
        <Card>
        <Card.Body className="text-center py-4">
            <div className="icon d-flex justify-content-center align-items-center">
                <i className={data.catData.icon}style={{fontSize : "50px"}}></i>
            </div>
            <Card.Title>{data.catData.title}</Card.Title>
            <Card.Text>
            {data.catData.desc}
            </Card.Text>
        </Card.Body>
        </Card>
    </Col>
    </>
   );
   return design;
}

const Category =()=>{
    const design =(
        <>
          <Container className="cat-box">
            <Row>
                {
                    catogeryData.map((item)=>{
                        return <Column catData={item} key={item.id}/>
                    })
                }
            </Row>
          </Container>
        </>
    );
    return design;
}

export default Category;