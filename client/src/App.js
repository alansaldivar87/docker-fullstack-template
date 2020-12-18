import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Fib from './Fib'
import OtherPage from './OtherPage'

import './App.css'

function App() {
    return (
        <Router>
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Hi</h1>
                    <Link to="/">Home</Link>
                    <Link to="/otherpage">Other page</Link>
                </header>
            </div>
            <>
                <Route exact path="/" component={Fib} />
                <Route exact path="/otherpage" component={OtherPage} />
            </>
        </Router>
    )
}

export default App
