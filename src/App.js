import './app.css';
import Container from './components/Container/Container';
import PersonCard from './components/PersonCard/PersonCard';
import Skills from './components/Skills';

function App() {
  return (
    <div className="App">
      <Container cls={'main-container'}>
        <PersonCard />
        <Skills />
      </Container>
    </div>
  );
}

export default App;
