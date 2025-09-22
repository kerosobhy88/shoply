import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './index.css';
import './App.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown, faStar, faTrash, faXmark } from "@fortawesome/free-solid-svg-icons";
import Navbar from "./Combonandes/Navbar";
import React from "react";

function Proudcts({darkmode,darklight,setdarklight}) {
  const [selectProduct, setSelectProduct] = useState(null);
  const [visible, setVisible] = useState(false);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const [count, setCount] = useState(1);

  // الكارت محمل من LocalStorage
  const [cart, setCart] = useState(() => {
    return JSON.parse(localStorage.getItem("cart") || "[]");
  });
  const [count2, setCount2] = useState(cart.length);

  const products = [
    { id: 1, name: "T-shirt", price:100, Image: "https://i.postimg.cc/rmF1QWyr/robert-richman-vcTKFYNZop4-unsplash.jpg", Image2: "https://i.postimg.cc/cJ5RkCvk/pexels-lazarus-ziridis-2154851868-33448908.jpg", Image3: "https://i.postimg.cc/HsQtWTNj/pexels-j-sarkar-368375-991509.jpg" },
    { id: 2, name: "pants", price: 200, Image: "https://i.postimg.cc/PrG4kC2B/pexels-eyimofe-odunusi-116747863-33041362.jpg", Image2: "https://i.postimg.cc/3r0B6XCX/tuananh-blue-gtV6JxKPJ-o-unsplash.jpg", Image3: "https://i.postimg.cc/DzzQcLwb/pexels-lazarus-ziridis-2154851868-33448912.jpg" },
    { id: 3, name: "shoes", price: 300, Image: "https://i.postimg.cc/436h99DL/martin-katler-Y4f-KN-Rl-MV4-unsplash.jpg", Image2: "https://i.postimg.cc/6qVGKpQX/pexels-emmanuel-abiodun-2149348795-30985638.jpg", Image3: "https://i.postimg.cc/Bbf1RK4p/pexels-alokkd1-19577862.jpg" },
    { id: 4, name: "jacket", price: 400, Image: "https://i.postimg.cc/XJJ5wbxK/mohamad-khosravi-P8Gva6BhAXI-unsplash.jpg", Image2: "https://i.postimg.cc/gctDtMZk/zakaria-issaad-iZL0Cis7Ye4-unsplash.jpg", Image3: "https://i.postimg.cc/d1xy6xSb/kyle-loftus-6TIoPIpMvLc-unsplash.jpg" },
    { id: 5, name: "bag", price: 150, Image: "https://i.postimg.cc/R08SDx4L/dmitriy-frantsev-b5PJXsiAw9o-unsplash.jpg", Image2: "https://i.postimg.cc/hGJgxZTz/peter-chirkov-usLZXRRP7wg-unsplash.jpg", Image3: "https://i.postimg.cc/fW1d01dX/richard-stachmann-lCeuv-I9GzM-unsplash.jpg" },
    { id: 6, name: "watch", price: 250, Image: "https://i.postimg.cc/rpXSmZwZ/choce-watch1.png", Image2: "https://i.postimg.cc/cL8RdG08/choce-watch2.png", Image3: "https://i.postimg.cc/FK4LmfT2/popular2.png" },
    { id: 7, name: "jacket", price: 350, Image: "https://i.postimg.cc/HnM9ymsZ/caio-coelho-QRN47la37gw-unsplash.jpg", Image2: "https://i.postimg.cc/brCnvf7q/dmitry-spravko-2cm-LR-I-hn0-unsplash.jpg", Image3: "https://i.postimg.cc/DwbG7DBK/lea-ochel-ns-RBb-E6-YLs-unsplash.jpg" },
    { id: 8, name: "shoes", price: 450, Image: "https://i.postimg.cc/GpNDJffZ/pexels-perfect-lens-11209837.jpg", Image2: "https://i.postimg.cc/QtHRvF0F/pexels-bellazhong-3447387.jpg", Image3: "https://i.postimg.cc/tCyx5WrC/pexels-rohit-sharma-1230131-26587837.jpg" },
  ];

  const colors = ["أحمر", "أزرق", "أخضر", "أسود", "أبيض"];
  const sizes = ["S", "M", "L", "XL", "XXL"];

  const Number1 = () => setCount(count + 1);

  // كل مرة الكارت يتغير نخزن في LocalStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    setCount2(cart.length);
  }, [cart]);

  const addcart = () => {
    if (!selectProduct) return;

    const item = {
      Image: selectProduct.Image,
      id: selectProduct.id,
      name: selectProduct.name,
      price: selectProduct.price,
      color: color,
      size: size,
      count: count,
    };

    setCart([...cart, item]);
    setVisible(false);
    setSelectProduct(null);
    setColor("");
    setSize("");
    setCount(1);
  };

  const removeFromCart = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
  };

  const handleAddToCart = (product) => {
    setSelectProduct(product);
    setVisible(true);
    setColor("أحمر");
    setSize("S");
  };

  return (
    <>
       <Navbar count2={count2} cart={cart} setCart={setCart} removeFromCart={removeFromCart} darkmode={darkmode} darklight={darklight} setdarklight={setdarklight}/>
       <h3 className="mb-3 fw-bold" style={!darklight?{ color: "rgba(120, 120, 255, 0.993)", textAlign: "center", marginTop: "20px",fontSize:40,fontWeight:700 }:{ color: "rgba(0, 0, 0, 0.884)", textAlign: "center", marginTop: "20px",fontSize:40,fontWeight:700 }}>
Men's products
        </h3>

      <div className="row justify-content-center g-4">
        {products.map((product) => {
          const carouselId = `carousel-${product.id}`;
          return (
            <div className="col-12 col-sm-8 col-md-6 col-lg-3 card3" key={product.id} >
              <div className="card shadow-sm border-0 mx-auto"  style={darklight?{backgroundColor:"black",color:"white",boxShadow:"0px 1px 14px 2px white"}:{}}>
                <div id={carouselId} className="carousel slide" data-bs-ride="carousel">
                  <div className="carousel-inner rounded-top">
                    <div className="carousel-item active">
                      <img src={product.Image} className="d-block w-100" alt="Slide 1" />
                    </div>
                    <div className="carousel-item">
                      <img src={product.Image2} className="d-block w-100" alt="Slide 2" />
                    </div>
                    <div className="carousel-item">
                      <img src={product.Image3} className="d-block w-100" alt="Slide 3" />
                    </div>
                  </div>
                  <button className="carousel-control-prev" type="button" data-bs-target={`#${carouselId}`} data-bs-slide="prev">
                    <span className="carousel-control-prev-icon"></span>
                  </button>
                  <button className="carousel-control-next" type="button" data-bs-target={`#${carouselId}`} data-bs-slide="next">
                    <span className="carousel-control-next-icon"></span>
                  </button>
                </div>

                <div className="card-body text-center">
                  <h5 className="card-title fw-bold">{product.name}</h5>
                  <p className="card-text  mb-2" style={darklight?{color:"white"}:{}}>Price: {product.price} $</p>
                  <div style={{ color: `gold` }}>
                    {Array(5).fill(0).map((_, i) => <FontAwesomeIcon key={i} icon={faStar} />)}
                  </div>
                  <button className="btn btn-primary mt-2" onClick={() => handleAddToCart(product)} style={darklight?{backgroundColor:"white",color:"black",border:"none"}:{}}>
                    <FontAwesomeIcon icon={faCartArrowDown} />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {visible && selectProduct && (
        <div className="overlay">
          <div className="popup-card text-center position-relative" style={darklight?{backgroundColor:"black",color:"white",boxShadow:"0px 1px 14px 2px white"}:{}}>
            <button className="btn-close-left" onClick={() => setVisible(false)} style={{backgroundColor:"red",borderRadius:"50%", color:"white"}}>
              <FontAwesomeIcon icon={faXmark} />
            </button>

            <div id={`popup-carousel-${selectProduct.id}`} className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner rounded-top">
                <div className="carousel-item active">
                  <img src={selectProduct.Image} className="d-block w-100" alt="Slide 1" />
                </div>
                <div className="carousel-item">
                  <img src={selectProduct.Image2} className="d-block w-100" alt="Slide 2" />
                </div>
                <div className="carousel-item">
                  <img src={selectProduct.Image3} className="d-block w-100" alt="Slide 3" />
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target={`#popup-carousel-${selectProduct.id}`} data-bs-slide="prev">
                <span className="carousel-control-prev-icon"></span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target={`#popup-carousel-${selectProduct.id}`} data-bs-slide="next">
                <span className="carousel-control-next-icon"></span>
              </button>
            </div>

            <div className="card-body" style={{color:`black`}}>
              <h5 className="card-title" style={darklight?{color:"white",fontSize:25,fontWeight:600}:{fontSize:25,fontWeight:600}}>{selectProduct.name}</h5>
              <p className="card-text"  style={darklight?{color:"white"}:{}}>price: {selectProduct.price} $</p>

              <label className="form-label" style={darklight?{color:"white"}:{}}>color:</label>
              <select className="form-select mb-2" style={darklight?{backgroundColor:"black",color:"white"}:{}} value={color} onChange={(e) => setColor(e.target.value)}>
                {colors.map((c) => <option key={c} value={c}>{c}</option>)}
              </select>

              <label className="form-label" style={darklight?{color:"white"}:{}}>size:</label>
              <select className="form-select mb-2" style={darklight?{backgroundColor:"black",color:"white"}:{}} value={size} onChange={(e)=>setSize(e.target.value)}>
                {sizes.map((s) => <option key={s} value={s}>{s}</option>)}
              </select>

              <label className="form-label" style={darklight?{color:"white"}:{}}>count:</label>
              <div className="input-group mb-2">
                <button className="btn btn-secondary" style={darklight?{backgroundColor:"black",color:"white"}:{}} onClick={() => setCount(count > 1 ? count - 1 : 1)}>-</button>
                <input type="number" className="form-control text-center"style={darklight?{backgroundColor:"black",color:"white"}:{}} value={count} readOnly />
                <button className="btn btn-secondary" style={darklight?{backgroundColor:"black",color:"white"}:{}} onClick={Number1}>+</button>
              </div>

              <button className="btn btn-success mt-2" onClick={addcart} style={darklight?{backgroundColor:"white",color:"black",border:"none"}:{}}>
                Add to cart <FontAwesomeIcon icon={faCartArrowDown} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Proudcts;
