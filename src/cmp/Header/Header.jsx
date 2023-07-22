import "./Header.css";
import { useState } from "react";
import{
NavDropdown,
Navbar,
Container,
Nav

} from "react-bootstrap";

import{ Link }from "react-router-dom";

import Menu from "./../Json-api/Menu";
import Brand from "./../Json-api/Brand";

const NormanMenu = (data)=>{
    const textColor={
      color:data.color
    }
    const design = (
        <>
         <Link style={  textColor } className={data.manuInfo.button ? "nav-link btn btn-primary text-white" : "nav-link"} to={data.manuInfo.url}>{data.manuInfo.label}</Link>
        </>
    );
    return design;
}

const DropdownMenu = (data)=>{
    const design = (
        <>
           <NavDropdown title={data.manuInfo.label} id="basic-nav-dropdown">
            <i className="fa fa-caret-up arrow-up"></i>
              {
                data.manuInfo.dropdownMenu.map((items)=>{
                 return <NormanMenu color="black" manuInfo={items} key={data.id} />
                })
              }
              
            </NavDropdown>
        </>
    );
    return design;
}


const Header = ()=>{
  const [sticky, changeSticky] = useState("py-3 border-bottom fixed-top");
  window.onscroll=()=>{
    let tmp = "";
    let top = window.scrollY;
    if(top>100)
    {
      tmp = " py-3 border-bottom fixed-top sticked";
    }
    else{
      tmp = " py-3 border-bottom fixed-top ";
    }
    return changeSticky(tmp); 
  }
   const design= (
   <>
      <Navbar expand="lg" className={sticky}>
      <Container>
        <Link className="navbar-brand" to="/">
          {/* <img src={Brand.logo} width="40" /> */}
          {Brand.name}
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-end w-100">
           {
            Menu.map((data)=>{
                if(data.dropdown){
                    return <DropdownMenu manuInfo={data} key={data.id} />
                }
                return <NormanMenu color="white" manuInfo={data} key={data.id} />
            })
           }
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   </>
   );
   return design
}

export default Header;