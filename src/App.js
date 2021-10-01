import './App.css';
import BgCard from './components/Bg-card';
import CardImg from './components/Card-img';
import Card1 from './components/Card1';
import CardIcon from './components/CardIcon';
import Header from './components/Header';
import Navbar from './components/Navbar';
import SecondCard from './components/SecondCard';
import WatchBox from './components/WatchBox';
import WatchBox1 from './components/WatchBox1';
import WatchCard from './components/WatchCard';

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Card1 />
      <CardImg />
      <WatchCard />
      <BgCard />
      <WatchBox />
      <WatchBox1 />
      <CardIcon />
      <SecondCard />
    </div>
  );
}

export default App;
