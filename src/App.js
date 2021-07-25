import './App.css';
import Header from "./components/Header";
import Aside from "./components/Aside";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="App">
            <div id="content">
                <Header/>
                <Aside/>
                <main>main</main>
                <section>section</section>
                <Footer/>
            </div>
        </div>
    );
}

export default App;
