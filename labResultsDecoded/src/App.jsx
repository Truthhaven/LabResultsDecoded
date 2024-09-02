import Header from './Header.jsx'
import Footer from './footer.jsx'
import Card from './assets/cbcCard/card.jsx'
import Card2 from './assets/bloodTest2Card/card';
import Card3 from './assets/bloodTest3Card/card';

function App() {
  return(
    <>
    <Header></Header>
    <div className='card-container '>
    <Card></Card>
    <Card2></Card2>
    <Card3></Card3>
    </div>
    
    <Footer></Footer>
    </>
  );
}

export default App
