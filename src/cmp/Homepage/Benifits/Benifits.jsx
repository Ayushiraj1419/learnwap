import "./Benifits.css";
import{
    Row,
    Col,
    Container

}from "react-bootstrap";


const data = [
    {
        id : "key-1",
        icon : "fa fa-check",
        title: "Interior Sketch",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        id : "key-2",
        icon : "fa fa-edit",
        title: "Interior Sketch",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur laborum vitae consequatur."
    },
    {
        id : "key-3",
        icon : "fa fa-share",
        title: "Interior Sketch",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. "
    }
]

const List = (allData)=>{
    const design =(
        <>
            <div className="d-flex mb-4">
                  <div>
                    <div className="icon-box d-flex justify-content-center align-items-center">
                            <i className= {allData.listData.icon}></i>
                        </div>
                  </div>
                    <div className="px-3">
                        <h5>{allData.listData.title}</h5>
                        <p>{allData.listData.desc}</p>
                    </div>
                </div>
        </>
    );
    return design;
}

const Benifits = ()=>{
    const design = (
        <>
           <Container>
            <Row>
                <Col md="5" className="px-4 d-flex flex-column justify-content-center">
                {
                    data.map((item)=>{
                         return < List listData={item} key={item.id}/>
                    })
                }
               
                </Col>

                <Col className="px-4" md="7">
                    <img src="man.jpg" alt="man" width="80%" className="rounded-circle man-pic" />
                </Col>
            </Row>
           </Container>
        </>
    );
    return design;
}

export default Benifits;