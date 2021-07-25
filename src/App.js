import './App.css';
import Header from "./components/Header";
import Aside from "./components/Aside";
import Footer from "./components/Footer";
import Section from "./components/Section";
function App() {
    return (
        <div className="App">
            <div id="content">
                <Header/>
                <Aside/>
                <main>main</main>
                <Section/>
                <Footer/>
            </div>
        </div>
    );
}

export default App;
