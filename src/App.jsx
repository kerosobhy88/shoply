import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate, HashRouter } from "react-router-dom";
import Navbar from "./Combonandes/Navbar";
import Proudcts from "./Proudcts";
import Homesite from "./Homesite";
import React from "react";
import Womensproducts from "./Womensproducts";


function App() {
  const [datalist, setDatalist] = useState([]);
    const [darklight,setdarklight]=useState(false)


  // حذف عنصر من قائمة الطلبات
  const handleDelete = (index) => {
    const updatedList = datalist.filter((_, i) => i !== index);
    setDatalist(updatedList);
  };

  // تعديل عنصر من قائمة الطلبات
  const handleEdit = (index) => {
    const productToEdit = datalist[index];
    console.log("Edit product:", productToEdit);
    // هنا ممكن تفتح فورم للتعديل
  };
  function darkmode() {
  setdarklight(!darklight)
}

  return (
      <Routes>
        <Route path="/Homesite" element={<Homesite/>} />
        {/* التحويل من الصفحة الرئيسية مباشرة لصفحة المنتجات */}
        <Route path="/" element={<Navigate to="/Homesite" />} />
        {/* صفحة المنتجات */}
        <Route
          path="/products"
          element={
            <Proudcts
              datalist={datalist}
              setDatalist={setDatalist}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
              darklight={darklight}
              setdarklight={setdarklight}
              darkmode={darkmode}
            />
          }
        />
        <Route
          path="/Womensproducts"
          element={
            <Womensproducts
              datalist={datalist}
              setDatalist={setDatalist}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
              darklight={darklight}
              setdarklight={setdarklight}
              darkmode={darkmode}
            />
          }
        />
      </Routes>
  );
}

export default App;
