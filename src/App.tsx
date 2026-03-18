import "./App.css";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Intro } from "./components/Intro";
import { Performances } from "./components/Performances";
import { VideoCover } from "./components/VideoCover";

function App() {
    return (
        <main>
            <Header />
            <Hero />
            <VideoCover />
            <Intro />
            <Performances />
        </main>
    );
}

export default App;
