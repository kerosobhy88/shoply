import { Link } from "react-router-dom";
import "./index.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowUp, faBagShopping, faEnvelope, faHouse, faMobileRetro, faShop,faStar } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";


function Homesite() {
 const Personally = [
    { id: 1, name: "Brandek Alpha", post:"I bought this chic shoe, it's amazing from Shoply.", Image: "https://i.postimg.cc/nhpC4xhs/sono-bono-mohOkzFcYIk-unsplash.jpg", Image2: "https://i.postimg.cc/x8w1JyNV/photostock-editor-4-L8q-Qh-tvs-unsplash.jpg" },
     { id: 2, name: "Bucharest Sjo", post:"I bought a jacket from Shoply at an amazing price.", Image: "https://i.postimg.cc/NFK1wcHG/mira-kireeva-kl5Ybzrr4MY-unsplash.jpg", Image2: "https://i.postimg.cc/HnM9ymsZ/caio-coelho-QRN47la37gw-unsplash.jpg" },
    { id: 3, name: "Sofia Lora", post:"I bought a dress from Shoply, it's very beautiful.", Image: "https://i.postimg.cc/Z5Syw3V5/thom-milkovic-l1Fzc8bxGcY-unsplash.jpg", Image2: "https://i.postimg.cc/Vsxtbj8N/rydale-clothing-HYmw-Hwsk1-Bk-unsplash.jpg" },
    { id: 4, name: "Liam Johnson", post:"I bought a watch from Shoply, it's very stylish.", Image: "https://i.postimg.cc/Fzw0rByy/shravan-suthar-85jU7Dq46r8-unsplash.jpg", Image2: "https://i.postimg.cc/hGJgxZTz/peter-chirkov-usLZXRRP7wg-unsplash.jpg" },
    { id: 5, name: "Emma Smith", post:"I bought a bag from Shoply, it's very practical.", Image: "https://i.postimg.cc/9fKtRr5q/image66666.jpg", Image2: "https://i.postimg.cc/RhX22M9s/ivan-kazlouskij-KBS4-Ktx1m3k-unsplash.jpg" },
    { id: 6, name: "Olivia Brown", post:"I bought a hat from Shoply, it's very stylish.", Image: "https://i.postimg.cc/GpzY82Ph/monica-dahiya-caPZQg42c54-unsplash.jpg", Image2: "https://i.postimg.cc/j5wzpTNx/benjamin-r-P0-F-la-NEkg-M-unsplash.jpg" }
    
  ];

const scrollToId = (id) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
};

  return (
    <>
   <body className="bg-light">
     <header className="header">
      <div className="div1" id="Home">

       <div className="">
         <h1  className="h1"><FontAwesomeIcon icon={faBagShopping} style={{textshadow:"8px 6px 1px white",margin:"0 0 0 0px"}}/>SHOPLY</h1>
          <div className="d-flex"><span  style={{margin:"0 20px 0 0px"}}> <FontAwesomeIcon icon={faMobileRetro} /> +1205 86 859</span>
          <span> <FontAwesomeIcon icon={faEnvelope} /> shobliy@gmail.com</span></div>
           
       </div>
       <hr />

        <div className="div5" >
          <h2>Welcome to Shoply</h2>
          <p >your one-stop destination for all your shopping needs!</p>
         
          
          <Link to="/products" className="text-white link1 link4444 ">
            <span ><FontAwesomeIcon icon={faShop} />Shop now</span>
          </Link>
          <span className=" text-white"></span>
          <button  onClick={() => scrollToId("About")} className="text-white link1">
             <span >Reviews</span>
          </button>
           <button onClick={() => scrollToId("Contact")} className="text-white link1">
             <span >Contact Us</span>
          </button>
        </div>
        <button onClick={() => scrollToId("footer")}  className="text-white link2">
             <span ><FontAwesomeIcon icon={faArrowDown} /></span>
          </button>
          
      </div>
       <button onClick={() => scrollToId("Home")} className="text-white link2 link3">
             <span ><FontAwesomeIcon icon={faArrowUp} /></span>
          </button>
      
    </header>


   <div className="d-flex justify-content-center my-4">
  <div 
    id="carouselExampleIndicators" 
    className="carousel slide" 
    style={{ width: "90%", maxWidth: "800px" }}  // هنا العرض
  >
    <div className="carousel-indicators">
      <button 
        type="button" 
        data-bs-target="#carouselExampleIndicators" 
        data-bs-slide-to="0" 
        className="active" 
        aria-current="true" 
        aria-label="Slide 1">
      </button>
      <button 
        type="button" 
        data-bs-target="#carouselExampleIndicators" 
        data-bs-slide-to="1" 
        aria-label="Slide 2">
      </button>
      <button 
        type="button" 
        data-bs-target="#carouselExampleIndicators" 
        data-bs-slide-to="2" 
        aria-label="Slide 3">
      </button>
    </div>

    <div className="carousel-inner rounded shadow">
      <div className="carousel-item active">
        <img 
          src="https://i.postimg.cc/j5mGTRFZ/pexels-melvin-buezo-1253763-18946640.jpg" 
          className="d-block w-100" 
          alt="..." 
        />
      </div>
      <div className="carousel-item">
        <img 
          src="https://i.postimg.cc/ZYvGcyWg/pexels-alexandra-maria-58259-336372.jpg" 
          className="d-block w-100" 
          alt="..." 
        />
      </div>
      <div className="carousel-item">
        <img 
          src="https://i.postimg.cc/Qxb0kXJw/pexels-asphotograpy-230544.jpg" 
          className="d-block w-100" 
          alt="..." 
        />
      </div>
    </div>

    <button 
      className="carousel-control-prev" 
      type="button" 
      data-bs-target="#carouselExampleIndicators" 
      data-bs-slide="prev"
    >
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button 
      className="carousel-control-next" 
      type="button" 
      data-bs-target="#carouselExampleIndicators" 
      data-bs-slide="next"
    >
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
</div>
<div>
</div>



<div>
  <h2 
    className="text-center mb-4" 
    style={{ color:"rgba(120, 120, 255, 0.993)", fontWeight:900 }}
  >
    What Our Customers Say
  </h2>

  <div className="container" id="About">
    <div className="row  justify-content-center">
      {Personally.map((item) => (
        <div 
          key={item.id} 
          className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center m-3"
        >
          <div className="card p-4 shadow-sm h-100" style={{ maxWidth: "320px" }}>
            
            {/* Profile */}
            <div className="d-flex align-items-center mb-3">
              <img 
                src={item.Image} 
                alt={item.name} 
                className="rounded-circle me-3" 
                style={{ width: "60px", height: "60px", objectFit: "cover" }} 
              />
              <div>
                <h5 className="mb-0">{item.name}</h5>
                <small className="text-muted">Verified Buyer</small>
              </div>
            </div>
            
            {/* Review */}
            <p className="mb-1 fst-italic text-center">"{item.post}"</p>

            {/* Stars */}
            <div style={{ color: "gold", margin:"0 auto" }}>
              {Array(5).fill(0).map((_, i) => (
                <FontAwesomeIcon key={i} icon={faStar} />
              ))}
            </div>

            {/* Experience Image */}
            <img 
              src={item.Image2} 
              alt="Customer Experience" 
              className="img-fluid rounded mt-3" 
              style={{ width: "250px", height: "110px", objectFit: "cover" }}
            />
          </div>
        </div>
      ))}
    </div>
  </div>
</div>


    <div className="container my-3">
  <div className="row g-4">
    
    {/* About Shoply */}
    <div className="col-12 col-lg-6" >
      <div className="shadow-lg p-4 rounded-4 border-0 text-center h-5 " style={{ backgroundColor: " #0000002f",height:"90%" }}>
        <h3 className="mb-3 fw-bold" style={{ color: "rgba(120, 120, 255, 0.993)" }}>
          About Shoply
        </h3>
        <p className="text-muted" style={{ lineHeight: "1.8", fontSize: "1.05rem" }}>
          Shoply is your one-stop destination for all your shopping needs. 
          We offer a wide range of products, from fashion and electronics 
          to home goods and more. Our mission is to provide our customers 
          with high-quality products at competitive prices, along with 
          exceptional customer service.
        </p>
      </div>
    </div>

    {/* Contact Form */}
    <div className="col-12 col-lg-6">
      <div className="shadow-lg p-4 rounded-4 border-0" style={{backgroundColor: " #0000002f"  }}>
        <h3 className="mb-3 fw-bold text-center" style={{ color: "rgba(120, 120, 255, 0.993)" }}>
          Contact Us
        </h3>
        <form id="Contact" >
          <div className="">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" id="name" className="form-control" placeholder="Your Name" />
          </div>
          <div className="">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" id="email" className="form-control" placeholder="Your Email" />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea id="message" rows="4" className="form-control" placeholder="Your Message"></textarea>
          </div>
          <button type="submit" className="btn btn-primary w-100">Contact</button>
        </form>
      </div>
    </div>

  </div>
</div>
<div>
  <div>
    <h2
      className="text-center mb-4"
      style={{ color: "rgba(120, 120, 255, 0.993)", fontWeight: 900 }}
    >
      Find Us On Social Media
    </h2>

    {/* هنا الظبط */}
    <div
      className="d-flex flex-column flex-md-row justify-content-between align-items-center "
      style={{
        padding: "15px",
        borderTopLeftRadius: "40px",
        borderTopRightRadius: "40px",
      }}
    >
      {/* Logo */}
      <div className="mb-3 mb-md-0">
        <h1  className="h1"><FontAwesomeIcon icon={faBagShopping} style={{textshadow:"8px 6px 1px white"}}/>SHOPLY</h1>
      </div>

      {/* Social icons */}
      <div className="mb-3 mb-md-0">
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-3 icon"
        >
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a
          href="https://www.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-3 icon"
        >
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-3 icon"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-3 icon"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>

      {/* Menu */}
      <div className="divulli">
        <ul className="list-unstyled d-flex flex-column flex-md-row m-0 p-0">
          <li className="mx-md-3 my-2 my-md-0">
            <a href="#Home">Home</a>
          </li>
          <li className="mx-md-3 my-2 my-md-0">
            <a href="#About">Reviews</a>
          </li>
          <li className="mx-md-3 my-2 my-md-0">
            <a href="#Contact">Contact Us</a>
          </li>
          <li className="mx-md-3 my-2 my-md-0">
            <a href="/products">Products</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>

 
<footer className="bg-dark text-center py-3 " style={{color:"rgba(255, 255, 255, 0.411)"}}>
      <p id="footer" className="mb-0">&copy; 2025 Shoply. All rights reserved. by kyrillos sobhy</p>
    </footer>
   </body>
    </>
  );
}

export default Homesite;
