import React from 'react';
import './App.css'
import Row from './Row';
import requests from './requests'
import Navbar from './Navbar'
import Banner from './Banner'
import Fotter from './Fotter'
import Download from './Download'

const App = () => {
  return (
    <>
        {/* navbar */}
        <Navbar />
        {/* banner */}
        <Banner />
      <Download/>
      <Row title="Netflix Originals" 
      fetchUrl={requests.fetchNetflixOriginals} 
      isLarge/>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
      <Row title="Action" fetchUrl={requests.fetchActionMovies}/>
      <Row title="Romantic" fetchUrl={requests.fetchRomanticMovies}/>
      <Row title="Horror" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="Comedy" fetchUrl={requests.fetchComedyMovies}/>
      {/* <Row title="DOCUMENTARIES" fetchUrl={requests.fetchDocumentaries}/> */}
      <Fotter/>
    </>
  )
}
export default App;
