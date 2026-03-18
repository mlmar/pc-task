import { Header } from "./features/Header";
import { Hero } from "./features/Hero";
import { Intro } from "./features/Intro";
import { Lineup } from "./features/Lineup";
import { Performances } from "./features/Performances";
import { VideoCover } from "./features/VideoCover";

function App() {
    return (
        <main>
            <Header />
            <Hero />
            <VideoCover />
            <Intro />
            <Lineup />
            <Performances />
        </main>
    );
}

export default App;
