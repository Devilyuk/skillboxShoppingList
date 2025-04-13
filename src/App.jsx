import { useState } from 'react'
import { CardList } from './CardList'
import './App.css'


function App() {
  const initShoppingList = () => {
    return localStorage.getItem('shoppingList') ? JSON.parse(localStorage.getItem('shoppingList')) : []
  }
  const [shoppingList, setShoppingList] = useState(initShoppingList()) 
  const syncShoppingList = (newList) => {
    setShoppingList(newList)
    localStorage.setItem('shoppingList', JSON.stringify(newList))
  }

  const handleAddElement = () => {
    syncShoppingList([
      {
        id: Date.now(),
        title: '',
        done: false
      },
      ...shoppingList
    ])
  }

  const handleFocusout = (e) => {
    if (e.target.value) {
      syncShoppingList(
        shoppingList.map((item) => {
          if (item.id != e.target.id) {
            return item
          } else {
            item.title = e.target.value
            return item
          }
        })
      )
    } else {
      syncShoppingList(shoppingList.filter((item) => item.id != e.target.id))
    }
    
  }
  const handleCheckedChange = (id, status) => {
    syncShoppingList(shoppingList.map((item) => {
      if (item.id != id) {
        return item
      } else {
        item.done = status
        return item
      }
    }))
  }

  const handleClear = () => {
    syncShoppingList([])
  }

  return (
    <div id='shopping-list'>
      <h1>Список покупок</h1>
      <button onClick={handleClear} className='shopping-list__add-new-element' type="button">Очистить список</button>
      <button onClick={handleAddElement} className='shopping-list__add-new-element' type="button">Новый элемент</button>
      <CardList
        shoppingList={shoppingList} 
        handleFocusout={handleFocusout}
        handleCheckedChange={handleCheckedChange}
      />
    </div>
  )
}

export default App
