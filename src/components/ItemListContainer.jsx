import {  useState, useEffect } from 'react'
 
const ItemListContainer = ( {greeting, titulo} ) => {
    
    console.log('ItemListContainer -  4')
    return (
        <div>
            <div>{ titulo }</div>
            <div>{ greeting }</div>
        </div>
    )
}

export default ItemListContainer