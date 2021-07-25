import './App.css';
import Header from "./components/Header";
import Aside from "./components/Aside";
import Footer from "./components/Footer";
import Section from "./components/Section";
import Main from "./components/Main";

function App() {
    return (
        <div className="App">
            <div id="content">
                <Header/>
                <Aside/>
                <Main/>
                <Section/>
                <Footer/>
            </div>
        </div>
    );
}

export default App;
