import Head from 'next/head';
import Header from './Components/Header';
import Footer from './Components/Footer';
import CreateNote from './Components/CreateNote';
import Notes from './Components/Notes';
const index = () => {
  return (
    <>
      <Head>
        <title>TAS Keep</title>
      </Head>
      <Header/>
      <CreateNote/>
      <Notes/>
      <Footer/>
    </>
  );
}

export default index;