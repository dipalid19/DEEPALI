
const Cart =()=>{
    return <> 
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
           <h5>Your Cart</h5>
       </div>

       <div className="row">
         <div className="col-md-8">
             <div className="d-non">

           <div className="card mb-3">
               <div className="card-body">
                   <div className="d-flex">

                   <div className="px-4">
           <img src="./img/productimg/productdetails.webp" className="cartpImg"  alt=""/>
                   </div>
                   <div className="">
                       <p className="card-title">JUARI BE A GENTLEMAN Printed Men Round Neck White</p>
                       <div className="text-secondary">
                           <p className="mb-0">Size: S</p>
                           <p>Seller:JUARI</p>
                       </div>
                      
                       <p className="card-text">₹94,800</p>
                       <a href="#" className="btn ">Save for Later</a>
                       <a href="#" className="btn ">Remove</a>
                   </div>

               </div>

               
               </div>
             </div>
             </div>
             </div>
             </div>
             </div>

             <div className="card mb-3">
              <div className="card-body d-flex  justify-content-end">
                <a href="#" className="btn btn-danger btn btn-danger px-5 py-2 brnone" style={{backgroundcolor:"#fb641b"}}>PLACE ORDER</a>
              </div>
            </div>
        

        <div className="d-none">

            <div className="card mb-3">
                <div className="card-body">
                    <div className="mb-2">
                                <div>
                                   1. Login or SigUp
                                </div>
                                <div className="w-50">
                                    <input type="text" className="form-control mt-3 mb-3" placeholder="Enter Email/Mobile Number"/>
                                    
                                 <a href="#" className="btn btn-danger btn btn-danger px-5 py-2 brnone" style={{backgroundcolor:"#fb641b"}}>CONTINUE</a>
                                </div>
                     </div>
                </div>
              </div>
              <div className="card mb-3">
                <div className="card-body">
                    <div className="mb-2">
                                <div>
                                   2. DELIVERY ADDRESS
                                </div>
                               <div className="bg-light py-2 px-3 mt-3" >Add new Address</div>
                     </div>
                </div>
              </div>
              <div className="card mb-3">
                <div className="card-body">
                    <div className="mb-2">
                                <div>
                                   3. ORDER SUMMARY
                                </div>
                     </div>
                </div>
              </div>
              <div className="card mb-3">
                <div className="card-body">
                    <div className="mb-2">
                                <div>
                                   3. PAYMENT OPTION
                                </div>
                     </div>
                </div>
              </div>
            <div className="card mb-3">
              <div className="card-body d-flex  justify-content-end">
                <a href="#" className="btn btn-danger btn btn-danger px-5 py-2 brnone" style={{backgroundcolor:"#fb641b"}}>PLACE ORDER</a>
              </div>
            </div>
        </div>

        <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h6 className="card-title border-bottom pb-3">PRICE DETAILS </h6>
                <table className="table">
                  <tbody>
                    <tr className="border-white"> 
                      <td>Price (1 item) </td>
                      <td>₹94,598  </td>
                    </tr>
                    <tr className="border-white">
                        <td>Discount </td>
                        <td> <span className="text-success">- ₹3000</span>  </td>
                      </tr>
                   
                        <tr className="">
                            <td>Delivery Charges   </td>
                            <td> <span className="text-success">FREE</span>  </td>
                          </tr>
                          <tr className="border-white ">
                      <td> <span className="font-weight-bold">Total Amount </span>  </td>
                      <td><span className="font-weight-bold">₹94,598</span>  </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
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




    </>
}
export default Cart;