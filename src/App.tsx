import "./App.css";
import { Header } from "./features/Header";
import { Hero } from "./features/Hero";
import { Intro } from "./features/Intro";
import { Performances } from "./features/Performances";
import { VideoCover } from "./features/VideoCover";

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
