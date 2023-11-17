import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import axios from 'axios';
import useFetch from "./hooks/useFetch";

// notifications
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProductService from "./services/ProductService";


axios.defaults.baseURL = 'https://dummyjson.com';

function App() {
  const [singleProduct, setSingleProduct] = useState({});

  const { data, isLoading } = useFetch();


  useEffect(() => {
    ProductService.getSignleProduct(1)
      .then(res => setSingleProduct(res.data))
      .catch(err => {
        console.log(err)
        toast.error(err.message);
      })
  }, [])

  return (
    <div className="">
      <Navbar />
      <div className="container mx-auto">


      </div>

      {/* prikazi sve proizvode! */}
      {/* {isLoading ? <h1>Nisu stigli podaci...</h1> : <h1>Podaci su stigli!</h1>} */}

      <ToastContainer />
    </div>
  );
}

export default App;
