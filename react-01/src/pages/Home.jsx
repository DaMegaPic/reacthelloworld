import './css/Home.css';
import Tree from '../components/Tree';
import Header from '../components/Header';
import Footer from '../components/Footer';

function App() {
  return (
    <>
      <section className="columns">
      <Tree 
        name="Live Oak"
        description="Doesn't lose it's leaves"
        images="images/oaktree.jfif"/>
      <Tree 
        name="Dogwood"
        description="Flowers in spring"
        image=""/>
      </section>
    </>
  );
}

export default App;
