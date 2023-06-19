import Featured from '../../components/Featured/Featured';
import Navbar from '../../components/navbar/Navbar';
import './Home.scss'
import List from '../../components/list/List';

function Home (){
  return (
    <div className='home'>
      <Navbar />
      <Featured />
      <List />
      <List />
      <List />
      <List />
    </div>
  );
}

export default Home;
