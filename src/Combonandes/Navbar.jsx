import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../App.css';
import React from "react";

import {
  faArrowAltCircleUp,
  faArrowRightFromBracket,
  faCartArrowDown,
  faTrash,
  faXmark,
  faEdit,
  faTruckFast,
  faMoon,
  faSun
} from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { faShopify } from '@fortawesome/free-brands-svg-icons';

function Navbar({  
  count2 = 0, 
  cart = [], 
  setCart = () => {}, 
  setCount2 = () => {}, 
  addcart = () => {}, 
  removeFromCart = () => {} ,
   darklight,        // جاي من App
  darkmode ,
  setdarklight   // الفانكشن جاي من App
 }) {
  const [visible, setVisible] = useState(false);
  const [selectProduct, setSelectProduct] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const [name, setname] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [comment, setComment] = useState("");

  const [datalist, setDatalist] = useState([]);
  const [count4, setCount4]= useState(0);

  // تحميل البيانات من LocalStorage عند أول مرة
  useEffect(() => {
    const storedOrders = localStorage.getItem("orders");
    const storedCount = localStorage.getItem("ordersCount");
    if (storedOrders) setDatalist(JSON.parse(storedOrders));
    if (storedCount) setCount4(parseInt(storedCount, 10));
  }, []);

  // حفظ البيانات في LocalStorage عند أي تغيير
  useEffect(() => {
    localStorage.setItem("orders", JSON.stringify(datalist));
    localStorage.setItem("ordersCount", count4);
  }, [datalist, count4]);

  const Handelee = () => {
    if (!name || !address || !phone) {
      alert("Please complete the data");
      return;
    }

    const productDetails = selectProduct
      ? {
          name: selectProduct.name,
          color: selectProduct.color,
          count: selectProduct.count,
          price: selectProduct.price,
          Image: selectProduct.Image,
          total: selectProduct.price * selectProduct.count
        }
      : null;

    const newOrder = { name, address, phone, comment, product: productDetails };
    setDatalist(prev => [...prev, newOrder]);

    if (selectedIndex !== null && selectedIndex !== undefined) {
      removeFromCart(selectedIndex);
    } else if (selectProduct) {
      const idx = cart.findIndex(it => it === selectProduct);
      if (idx !== -1) removeFromCart(idx);
    }

    setname("");
    setAddress("");
    setPhone("");
    setComment("");
    setVisible(false);
    setSelectProduct(null);
    setSelectedIndex(null);
  };

  const Name = (item, idx) => {
    setSelectProduct(item);
    setSelectedIndex(idx);
    setVisible(true);
    setCount4(prev => prev + 1);
  };

  const handleDelete = (index) => {
    setDatalist(prev => prev.filter((_, i) => i !== index));
    setCount4(prev => prev - 1);
  };

  const handleEdit = (index) => {
    const order = datalist[index];
    setname(order.name);
    setAddress(order.address);
    setPhone(order.phone);
    setComment(order.comment || "");
    setSelectProduct(order.product || null);
    setSelectedIndex(null);
    setDatalist(prev => prev.filter((_, i) => i !== index));
    setVisible(true);
  };

 function darkmode() {
  setdarklight(!darklight)
}

  return (
    <>
      {/* Navbar */}
      <nav className={`navbar navbar-expand-lg  ${!darklight?"bg-body-tertiary":"bg-black text-white"}`} >
        <div className="container-fluid">
          <a className="navbar-brand" href="#" style={{ color: `blue`, fontSize: 25, fontWeight: 900 }}>SHOPLY</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
            aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"  style={darklight?{color:"white"}:{}}></span>
          </button>
          <div className="collapse navbar-collapse navbar1" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 hover1 ">


 <li className="nav-item dropdown" style={!darklight?{color:"white"}:{}}>
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                  aria-expanded="false" style={darklight?{color:"white"}:{}}>
                 <FontAwesomeIcon icon={faShopify} />products
                </a>
                <div className="dropdown-menu" style={darklight?{backgroundColor:"black"}:{}}> 
              <li className="nav-item"><Link className="nav-link active" to="/products" style={darklight?{color:"white"}:{}}>Men's product</Link></li>
                 <li className="nav-item"><Link className="nav-link active" to="/Womensproducts" style={darklight?{color:"white"}:{}}>Women's product</Link></li>
                  </div></li>





              <li className="nav-item dropdown" >
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                  aria-expanded="false"  style={darklight?{color:"white", margin: "-5px 10px"}:{ margin: "-5px 10px"}}>
                 <FontAwesomeIcon icon={faTruckFast} /> Orders 
                  <span style={{ color: "blue", fontSize: 20, fontWeight: 900 }}>{count4}</span>
                </a>
                <div className="dropdown-menu"   style={darklight?{backgroundColor:"rgba(0, 0, 0, 0.658)", width: "360px",
                  maxHeight: "300px",
                  overflowY: "auto",
                  right: 0,
                  left: "auto"}:{width: "360px",
                  maxHeight: "300px",
                  overflowY: "auto",
                  right: 0,
                  left: "auto"}}>
                  {datalist.length > 0 && <h4 className="text-center mb-4" style={darklight?{color:"white"}:{}}>Orders List</h4>}
                  {datalist.length > 0 ? (
                    datalist.map((item, index) => (
                      <div key={index} className="card p-2 mb-3 shadow-sm"  style={darklight?{color:"white",backgroundColor:"rgba(0, 0, 0, 0.658)", borderRadius: 16, width: "100%"}:{ borderRadius: 16, width: "100%"}}>
                        <div className="row g-3 align-items-center"  style={darklight?{color:"white",backgroundColor:"rgba(0, 0, 0, 0.658)"}:{}}>
                          {item.product && (
                            <div className="col-md-5 w-100"  style={darklight?{color:"white",backgroundColor:"rgba(0, 0, 0, 0.658)"}:{}}>
                              <div className="d-flex align-items-center border rounded">
                                <img
                                  src={item.product.Image}
                                  alt={item.product.name}
                                  style={{ width: 56, height: 56, objectFit: "cover", borderRadius: "50%", marginRight: 12 }}
                                />
                                <div className="small">
                                  <div className="fw-semibold" style={darklight?{color:"white"}:{}}>{item.product.name}</div>
                                  <div   style={darklight?{color:"white"}:{}}>Color: {item.product.color}</div>
                                  <div  style={darklight?{color:"white"}:{}}>Qty: {item.product.count}</div>
                                  <div   style={darklight?{color:"white"}:{}}>Total: {item.product.total} $</div>
                                </div>
                              </div>
                            </div>
                          )}
                          <div className="col" >
                            <h6 className="mb-1"  style={darklight?{color:"white"}:{}}>Name:{item.name}</h6>
                            <div className="text-muted">
                              <div  style={darklight?{color:"white"}:{}}><strong  style={darklight?{color:"white"}:{}}>Address:</strong> {item.address}</div>
                              <div  style={darklight?{color:"white"}:{}}><strong  style={darklight?{color:"white"}:{}}>Phone:</strong> {item.phone}</div>
                            </div>
                            {item.comment && <p className="mb-0 mt-2">{item.comment}</p>}
                          </div>
                          <div className="col-12 d-flex justify-content-end mt-2">
                            <button className="btn btn-danger btn-sm me-2" onClick={() => handleDelete(index)}>
                              <FontAwesomeIcon icon={faTrash} />
                            </button>
                            <button className="btn btn-warning btn-sm" onClick={() => handleEdit(index)}>
                              <FontAwesomeIcon icon={faEdit} />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="text-center m-0" style={darklight?{color:"white"}:{}}>no order yet</p>
                  )}
                </div>
              </li>

              {/* Cart Dropdown */}
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                  aria-expanded="false"  style={darklight?{color:"white",margin: `-5px 10px`}:{margin: `-5px 10px`}}>
                  <FontAwesomeIcon icon={faCartArrowDown} />
                  <span style={{ color: `blue`, fontSize: 20, fontWeight: 900 }}>{count2}</span>
                </a>

                <div className="dropdown-menu"  style={darklight?{backgroundColor:"rgba(0, 0, 0, 0.664)",color:"white",width: "300px", maxHeight: "300px", overflowY: "auto", right: 0, left: "auto"}:{width: "300px", maxHeight: "300px", overflowY: "auto", right: 0, left: "auto"}}>
                  {cart.length > 0 ? (
                    cart.map((item, index) => (
                      <div key={index} className="d-flex align-items-center mb-2 p-2 border rounded"style={darklight?{backgroundColor:"rgba(0, 0, 0, 0.664)",color:"white"}:{}}>
                        <img src={item.Image} alt={item.name} style={{ width: "50px", height: "50px", objectFit: "cover", borderRadius: "50%", marginRight: "10px" }} />
                        <div style={{ flex: 1 }}>
                          <h6 className="mb-1">{item.name}</h6>
                          <small  style={darklight?{color:"white"}:{}}>Color: {item.color}</small><br />
                          <small  style={darklight?{color:"white"}:{}}>Qty: {item.count}</small><br />
                          <small style={darklight?{color:"white"}:{}}>Total: {item.price * item.count} $</small>
                        </div>
                        <button style={{ color: "wheat", backgroundColor: "red", borderRadius: "50%", border: "none" }} onClick={() => removeFromCart(index)}>
                          <FontAwesomeIcon icon={faTrash} />
                        </button>
                        <button className="btn btn-green btn-sm ms-2" style={{ color: "wheat", backgroundColor: "green", borderRadius: "50%", border: "none" }} onClick={() => Name(item, index)}>
                          <FontAwesomeIcon icon={faArrowAltCircleUp} />
                        </button>
                      </div>
                    ))
                  ) : (
                    <p className="text-center m-0" style={darklight?{color:"white"}:{}}>🛒 السلة فارغة</p>
                  )}
                </div>
              </li>

              <li className="nav-item">
                <a className="nav-link active" aria-disabled="true"  onClick={darkmode} style={darklight?{color:"white"}:{}}>
                {darklight? <FontAwesomeIcon icon={faSun} />:<FontAwesomeIcon icon={faMoon}></FontAwesomeIcon> }
                </a>
              </li>

               <li className="nav-item">
                <Link className="nav-link active" aria-disabled="true" to="/Homesite" style={darklight?{color:"white"}:{}}>
                  <FontAwesomeIcon icon={faArrowRightFromBracket} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Overlay Form */}
      <div className={visible ? "overlay" : "hidden"} style={darklight?{backgroundColor:"rgba(0, 0, 0, 0.664)",color:"white",width: "100%", height: "100%", position: "fixed", top: 0, left: 0, zIndex: 1000 }:{width: "100%", height: "100%", position: "fixed", top: 0, left: 0, backgroundColor: "rgba(0,0,0,0.5)", zIndex: 1000 }}>
        <div className="container mt-5" style={{ maxWidth: "700px", margin: "auto" }}>
          <div className="card shadow-lg p-4" style={darklight?{backgroundColor:"darkgray",color:"white"}:{}}>
            <button className="btn-close-left" onClick={() => {setVisible(false); setCount4(prev => prev - 1)}} style={{ backgroundColor: "red", borderRadius: "50%", color: "white" }}>
              <FontAwesomeIcon icon={faXmark} />
            </button>
            <h4 className="mb-4 text-center">Complete order</h4>

            {selectProduct && (
              <div className="d-flex align-items-center mb-3 p-2 border rounded" style={darklight?{backgroundColor:"black",color:"white"}:{}} >
                <img src={selectProduct.Image} alt={selectProduct.name} style={{ width: "60px", height: "60px", objectFit: "cover", borderRadius: "50%", marginRight: "12px" }} />
                <div style={{ flex: 1 }}>
                  <h6 className="mb-1">{selectProduct.name}</h6>
                  <small style={darklight?{color:"white"}:{}}>Color: {selectProduct.color}</small><br />
                  <small style={darklight?{color:"white"}:{}}>Qty: {selectProduct.count}</small><br />
                  <small style={darklight?{color:"white"}:{}}>Total: {selectProduct.price * selectProduct.count} $</small>
                </div>
              </div>
            )}

            <div className="input-group mb-3" style={darklight?{backgroundColor:"black",color:"white"}:{}}>
              <span className="input-group-text"  style={darklight?{backgroundColor:"black",color:"white"}:{}}>Name</span>
              <input type="text" className="form-control" value={name} onChange={(e) => setname(e.target.value)}  style={darklight?{backgroundColor:"black",color:"white"}:{}}/>
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text"  style={darklight?{backgroundColor:"black",color:"white"}:{}}>Address</span>
              <input type="text" className="form-control" value={address} onChange={(e) => setAddress(e.target.value)}  style={darklight?{backgroundColor:"black",color:"white"}:{}}/>
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text"  style={darklight?{backgroundColor:"black",color:"white"}:{}}>Phone</span>
              <input type="text" className="form-control" value={phone} onChange={(e) => setPhone(e.target.value)}  style={darklight?{backgroundColor:"black",color:"white"}:{}} />
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text"  style={darklight?{backgroundColor:"black",color:"white"}:{}}>Comments</span>
              <textarea className="form-control" value={comment} onChange={(e) => setComment(e.target.value)}  style={darklight?{backgroundColor:"black",color:"white"}:{}}></textarea>
            </div>

            <button className="btn btn-primary m-2" onClick={Handelee}  style={darklight?{backgroundColor:"white",color:"black",border:"none"}:{}}>
              Complete order
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
