import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './index.css';
import './App.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown, faStar, faTrash, faXmark } from "@fortawesome/free-solid-svg-icons";
import Navbar from "./Combonandes/Navbar";
import React from "react";

function Womensproducts({darkmode,darklight,setdarklight}) {
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
    { id: 1, name: "dress", price:100, Image: "https://i.postimg.cc/mr04S3yd/muhammad-nadir-cHLW0E2PrAc-unsplash.jpg", Image2: "https://i.postimg.cc/xjLftZ7L/muhammad-nadir-ELWa9KCiQMY-unsplash.jpg", Image3: "https://i.postimg.cc/SsMS01KF/muhammad-nadir-HVHIVKAd0R0-unsplash.jpg" },
    { id: 2, name: "pants", price: 200, Image: "https://i.postimg.cc/3r0B6XCX/tuananh-blue-gtV6JxKPJ-o-unsplash.jpg", Image2: "https://i.postimg.cc/sxDSyg0n/engin-akyurt-5ra-Pr-Ohb-KQo-unsplash.jpg", Image3: "https://i.postimg.cc/jj8wq1KD/napat-saeng-Nt0hNFMGbxM-unsplash.jpg" },
    { id: 3, name: "shoes", price: 600, Image: "https://i.postimg.cc/Wzgh7Hv1/emily-pottiger-Zx76sb-Andc0-unsplash.jpg", Image2: "https://i.postimg.cc/x8w1JyNV/photostock-editor-4-L8q-Qh-tvs-unsplash.jpg", Image3: "https://i.postimg.cc/hP0GPx46/lauren-rund-q-Qc-Rz-Ik18-KU-unsplash.jpg" },
    { id: 4, name: "dress", price:300, Image: "https://i.postimg.cc/vmFVTzNx/mariabeatrice-alonzi-Vy-I0-GBHSs-J8-unsplash.jpg", Image2: "https://i.postimg.cc/wTcBTrQ9/declan-sun-LyUKn5wr0RE-unsplash.jpg", Image3: "https://i.postimg.cc/SNps448Z/evita-tomsevica-utqfDiyaTA0-unsplash.jpg" },
    { id: 5, name: "bag", price:100, Image: "https://i.postimg.cc/RhX22M9s/ivan-kazlouskij-KBS4-Ktx1m3k-unsplash.jpg", Image2: "https://i.postimg.cc/m2VbGs8G/ivan-kazlouskij-AB7-Wa-WI4-RY-unsplash.jpg", Image3: "https://i.postimg.cc/1zRVQSxx/arif-ubayy-c9s-Ku81to-Kk-unsplash.jpg" },
    { id: 6, name: "shoes", price: 500, Image: "https://i.postimg.cc/d033f1YX/kier-in-sight-archives-b4-Xk6bzg-QWU-unsplash.jpg", Image2: "https://i.postimg.cc/cH8Hsb6B/apostolos-vamvouras-Ic-Kwz2-E4xp8-unsplash.jpg", Image3: "https://i.postimg.cc/zG1fq71n/jerry-finta-4-CHIQj91s-Mc-unsplash.jpg" },
    { id: 7, name: "pants", price: 250, Image: "https://i.postimg.cc/nhpC4xhs/sono-bono-mohOkzFcYIk-unsplash.jpg", Image2: "https://i.postimg.cc/Z5Syw3V5/thom-milkovic-l1Fzc8bxGcY-unsplash.jpg", Image3: "https://i.postimg.cc/50bsLW53/clotheswoman1.webp" },
    { id: 8, name: "bag", price:300, Image: "https://i.postimg.cc/Z5xv2RMF/amein-shareef77-g-Ngt126-K-g-I-unsplash.jpg", Image2: "https://i.postimg.cc/1zRVQSxx/arif-ubayy-c9s-Ku81to-Kk-unsplash.jpg", Image3: "https://i.postimg.cc/G2PWJFf1/tamara-bellis-np-Fh-MBCs-Me-M-unsplash.jpg" },
    { id: 9, name: "shoes", price: 400, Image: "https://i.postimg.cc/ZYvGcyWg/pexels-alexandra-maria-58259-336372.jpg", Image2: "https://i.postimg.cc/Y9h4vxqb/pesce-huang-RWCyUDnSg5Y-unsplash.jpg", Image3: "https://i.postimg.cc/zG1fq71n/jerry-finta-4-CHIQj91s-Mc-unsplash.jpg" },
    { id: 10, name: "shoes", price: 200, Image: "https://i.postimg.cc/MZdV51vg/mohammad-metri-E-0-ON3-VGr-Bc-unsplash.jpg", Image2: "https://i.postimg.cc/Vsxtbj8N/rydale-clothing-HYmw-Hwsk1-Bk-unsplash.jpg", Image3: "https://i.postimg.cc/zG1fq71n/jerry-finta-4-CHIQj91s-Mc-unsplash.jpg" },

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
Women's products
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

export default Womensproducts;
