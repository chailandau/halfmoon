import Head from "next/head";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

const Layout = ( { children } ) => {
  return (
    <>
      <Head>
        <title>Half Moon Tavern of Kingston</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </>
  );
};
  
export default Layout;
