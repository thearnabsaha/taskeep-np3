import Head from 'next/head';
import Header from './Components/Header';
import Footer from './Components/Footer';
import CreateNote from './Components/CreateNote';
const index = () => {
  return (
    <>
      <Head>
        <title>TAS Keep</title>
      </Head>
      <Header/>
      <CreateNote/>
      <Footer/>
    </>
  );
}

export default index;