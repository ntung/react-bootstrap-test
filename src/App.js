import './App.css';
import AppHeader from "./components/header";
import AppHero from "./components/hero";

function App() {
    return (
        <div className="App">
            <header id="header">
                <AppHeader/>
            </header>
            <main>
                <AppHero/>
            </main>
        </div>
    );
}

export default App;
