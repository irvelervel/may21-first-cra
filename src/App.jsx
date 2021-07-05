import logo from './logo.svg'
import './App.css'

// STATE

import HomeMade from './HomeMade'

// this is a React Component
// it's a reusable piece of interface
// that is usually exported from a file
// it's then imported back in another one

// usually it's a good practise to name your component as the file you're creating
// usually in PascalCase

// SomethingWrittenLikeThis --> PascalCase
// thisIsInsteadCamelCase --> camelCase

// a React Component can be as easy as a function returning some JSX
// the full fat version of a component requires the Class syntax

// two ways of writing React Components:
// 1) as a function (somewhat limited)
// 2) as a class (full fat components with more superpowers!)

const name = 'Bimal'

const App = () => {
  return (
    // JSX
    // class -> className
    <div className="App">
      <HomeMade
        title="Strive School"
        subTitle="A place for learning"
        color="red"
        topMargin={3}
        objectAsAProp={{
          name: 'Bimal'
        }}
      />
      <HomeMade title="Elementary School" subTitle="A place for learning" />
      {/* title is a PROP in react */}
      <header className="App-header">
        <div>{name}</div>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Hello Strive!!
        </a>
      </header>
      <HomeMade nameOfTheClass="a-lot-of-margin" objectAsAProp={{
        name: 'Bimal'
      }} />
    </div>
  )
}

export default App


// npx create-react-app PUT-HERE-THE-NAME
// it's taking the latest version of create-react-app out from the internet
// and executing it
// it's for making sure we use the LATEST version of the toolchain

// npm start
// npm install