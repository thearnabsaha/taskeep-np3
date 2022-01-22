import Head from 'next/head';
import Header from './Components/Header';
import Footer from './Components/Footer';
import CreateNote from './Components/CreateNote';
import Notes from './Components/Notes';
const index = () => {
  const notes = [{title:"arnab",content:"saha"}]
  return (
    <>
      <Head>
        <title>TAS Keep</title>
      </Head>
      <Header/>
      <CreateNote/>
      {
        notes.map((e)=>{
          return(
            <Notes title={e.title} content={e.content} />
          )
        })
      }
      <Footer/>
    </>
  );
}

export default index;