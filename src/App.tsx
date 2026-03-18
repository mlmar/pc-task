import "./App.css";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Intro } from "./components/Intro";
import { VideoCover } from "./components/VideoCover";

function App() {
    return (
        <main>
            <Header />
            <Hero />
            <VideoCover />
            <Intro />
        </main>
    );
}

export default App;
