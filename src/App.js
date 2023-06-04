

import Navbar  from './components/Navbar';
import Hero  from './components/Hero';
import Card from './components/Card';
function App() {
  return (
    //<Hero/>
    <div className="App">
      <Navbar/>
      <Card 
        img="katie.png"
        rating="5.0"
        next="6"
        country="USA"
        para1="Life lessons from Katie"
        para2="100$/person"
      />
    </div>
  );
}

export default App;
