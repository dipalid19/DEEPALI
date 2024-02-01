import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { get } from "../service/product.service";
import { saveproduct, savetocart } from "../redux/product.slice";
import { useEffect } from "react";

const Allproducts=()=>{
    let [searchParams]=useSearchParams();
    //console.log(searchParams.get("c_id"));
    //console.log(searchParams.get("cat_name"));
    let dispatch=useDispatch();
    let {productlist}=useSelector((state)=>{
        return state.product;
    });
    let getproductlist=async()=>{
        let id=searchParams.get("c_id");
        let url="http://localhost:3001/products?c_id=" + id;
        let result=await get(url);
        if(result){
            dispatch(saveproduct(result));
        }

    };
    useEffect(()=>{
        getproductlist();
        return()=>{
            dispatch(saveproduct([])); 
        }
    },[]);

    return<>  
    <div className="container-fluid bg_blue fixed-top">
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light ">
                <a className="navbar-brand" href="#"><img src="./img/flipkartlogo.png" width="75px" alt=""/></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon text-white" style={{color:"#fff"}}></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <form className="d-flex col-md-7">
                        <input className="form-control me-2" type="search" placeholder="Search for product brands and more"
                            aria-label="Search"/>
                        <button className="btn btn-primary" type="submit"><i className="bi bi-search"></i>
                        </button>
                    </form>
                    <ul className="navbar-nav  mb-2 mr-auto mb-lg-0 ms-3">
                       

                        <li className="nav-item">
                            <a className="nav-link  bg-white text-dark px-3 rounded" href="#"  data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Login</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link " href="#">Become a Seller</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                More
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#">Notification Preprensences</a></li>
                                <li><a className="dropdown-item" href="#">27/7 Customer Care </a></li>
                                <li>
                                    <hr className="dropdown-divider"/>
                                </li>
                                <li><a className="dropdown-item" href="#">Download App</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"> <i className="bi bi-cart-fill"></i>
                                Cart</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </div>

   

    <div className="container" style={{marginTop: "60px"}}>
       
        <div className="py-3">
            <h5 className="text-capitalize">All Products of {searchParams.get("cat_name")}</h5>
        </div>

        <div  className="row mb-3">
            {
                productlist.map((product)=>{
                    return <div className="col-md-3 mb-3" key={product.id} title={product.title + '-' + product.description}>
                        <div  className="card size">
                <img src= {product.image}
                    className="card-img-top-img" alt="..." style={{height:"40vh"}}/>
                <div className="card-body text-center">
                    <h6 className="product-style">{product.title.substring(0,20)}</h6>
                    
                <div className="">
                        <span className="pe-2">₹{product.price}</span>
                        <span className="text-secondary pe-2"><del>₹{product.price*2}</del></span>
                        <span className="text-success">50% off</span>
                </div>
               <button className="btn btn-warning" onClick={()=>dispatch(savetocart({...product, qty:1}))}>Add To Cart</button>
          </div>
        </div>
         </div>
            
                    
                })
            }


         
          </div>





          <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">Login
                    </h5>
                   
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <p className="p-3 p-3 pb-0">Get access to your Orders, Wishlist and Recommendations</p>
                <div className="modal-body">
                  <form>
                    <div className="mb-3">
                      <input type="text" className="form-control" placeholder="Enter Your Name"/>
                    </div>
                    <div className="mb-3">
                        <input type="text" className="form-control" placeholder="Enter Email/Mobile no"/>
                      </div>
                      <div className="mb-3">
                        <input type="text" className="form-control" placeholder="Enter Password"/>
                      </div>
    
                   
                   
                  </form>
                </div>
                <div className="modal-footer  justify-content-center">
                    
                    
                    <button type="button" className="btn btn-primary">Sign Up</button>
                  
                </div>
              </div>
            </div>
          </div>
</div>

    </>
}
export default Allproducts;