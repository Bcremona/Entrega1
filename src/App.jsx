import { useState } from 'react'
import './App.css'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar/NavBar'



function App() {
    // ItemListContainer( { greeting: 'Hello World', titulo: 'xxxxx' } )
    console.log('App')
    

    return (
        <div className="App">
            <NavBar fixed="top"/>
            
            <ItemListContainer greeting={'Hello World'} titulo='ItemListContainer de app' />
        </div>
    )
}

export default App