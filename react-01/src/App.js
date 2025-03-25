import './App.css';
import Tree from './components/Tree';

function App() {
  return (
    <>
      <section className="columns">
      <Tree 
        name="Live Oak"
        description="Doesn't lose it's leaves"
        images="oaktree.jfif"/>
      <Tree 
        name="Dogwood"
        description="Flowers in spring"
        image="images/dogwood.jfif"/>
      </section>
    </>
  );
}

export default App;
