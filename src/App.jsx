import logo from './logo.svg';
import './App.css';

function App() {

  // var name = "Ryan";
  // let lastName = "Lima Ferreira";
  // const middleName = "São Paulo";
  // let fatia_texto = middleName.split(" ");
  //   console.log(fatia_texto);
  //       console.table(fatia_texto);

  let full_name = "Ryan Lima Ferreira";
  let array_string = full_name.split(" ");
  let name = array_string[0];
  console.log(name);
  let lastName = array_string[array_string.length - 1];
  console.log(lastName);
  



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p>
        {`Olá, ${name} ${lastName} de ${middleName}!`}
        </p>
        <p>{fatia_texto}</p>
    
         */}
         <p>{`Olá, ${name} ${lastName}`}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
