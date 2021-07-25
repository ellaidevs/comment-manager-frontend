import './App.css';
import Header from "./components/Header";

function App() {
    return (
        <div className="App">
            <div id="content">
                <Header/>
                <aside>aside</aside>
                <main>main</main>
                <section>section</section>
                <footer>footer</footer>
            </div>
        </div>
    );
}

export default App;
