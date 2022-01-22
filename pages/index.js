import Head from 'next/head';
import Header from './Components/Header';
import Footer from './Components/Footer';
const index = () => {
  return (
    <>
      <Head>
        <title>TAS Keep</title>
      </Head>
      <Header/>
      <Footer/>
    </>
  );
}

export default index;