import { Navbar, Brand, CTA } from './components'
import { Footer, Blog, Possibility, Feature, WhatGPT3, Header} from "./containers";
import Features from "./containers/features/Features";
import './App.css'
const App = () => {
    return(
        <div className="App">
            <div className="gradient__bg">
                <Navbar />
                <Header />
            </div>
            <Brand />
            <WhatGPT3 />
            <Features />
            <Possibility />
            <WhatGPT3 />
            <CTA />
            <Blog />
            <Footer />
        </div>)
}

export default App;