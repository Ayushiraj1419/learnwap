import Benifits from "./Benifits/Benifits";
import Bigadd from "./Bigadd/Bigadd";
import Category from "./Category/Category";
import Users from "../Users/Users";

const Homepage = ()=>{
    const design =(
    <>
       
       <Bigadd />
       <Category />
       <Benifits />
       <Users />
      
    </>
    );
    return design;
}
export default Homepage;