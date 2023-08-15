import React from 'react';
import Header from './/components/Header/Header';
import Post from './components/Post/Post';
import Footer from './components/Footer/Footer';
import SubPost from './components/SubPost/SubPost'



const App = () => {
  return (
    <div>
      <Header />
      <Post/>
      <Footer/>
      <SubPost/>
      <SubPost/>

    </div>
  );
};

export default App;
