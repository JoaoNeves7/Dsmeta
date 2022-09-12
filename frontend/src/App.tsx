import SalesCard from "./componets/SalesCard"
import Header from "./componets/Header"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <ToastContainer />
      <Header />
      <main>
      <section id="s">
        <div className="dsmeta-container">
          <SalesCard />

          </div>
          </section>
          </main>
    </>
   
  )  
}

export default App
