import './App.css';
import restaurant from './restaurant.jpg';

function Header(props){
  return(

  <header>
    <h1>{props.name}'s Kitchen</h1>
  </header>

  )
}
function Main(props){
  return (
    <section>
      <p>We Serve the Most {props.adjective} Food Around</p>
      <img src={restaurant} height ={300} alt="appetizer setup with beer and coffee"/>
      <ul style={{textAlign: 'left'}}>
        {props.dishes.map((dish) => (
          <li key={dish.id}>{dish.title}</li>
        ))}
      </ul>
      
    </section>
  )
}
function Footer(props){
  return (
    <footer>
      <p>Copyright {props.year} </p>
    </footer>
  )
}

const dishes = [
  "Githeri and Cheese",
  "Loaded Fries",
  "Samosa",
  "Pilau",
  "Chapati Madondo",
  "Smocha"
];

const dishObjects = dishes.map((dish, i) => ({ id: i, title: dish }));

function App() {
  return (
    <div className="App">
      <Header name="Ndinda" />
      <Main adjective="amazing" dishes={dishObjects} />
      <Footer year={new Date().getFullYear()} />
    </div>
  );
}

export default App;
