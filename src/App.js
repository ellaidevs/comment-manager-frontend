import './App.css';
import Header from "./components/Header";
import Aside from "./components/Aside";
import Events from "./components/materialui/Events";

function App() {
    return (
        <div className="App">
            <div id="content">
                <Header/>
                <Aside/>
                <main>main</main>
                <section>
                    section
                </section>
                <footer>footer</footer>
            </div>
        </div>
    );
}

export default App;
