import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '../../Components/navbar'
import Footer from '../../components/footer'
// import { Provider } from 'react-redux'; 
// import store from './Cart/store';  
import 'bootstrap/dist/css/bootstrap.css';

export default function App({ Component, pageProps }: AppProps) {
  return (

    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>


  )
}
