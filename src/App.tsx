import "./App.css";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { VideoCover } from "./components/VideoCover";

function App() {
    return (
        <main>
            <Header />
            <Hero />
            <VideoCover />
        </main>
    );
}

export default App;
