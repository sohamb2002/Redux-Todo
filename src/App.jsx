import React from 'react'
import './App.css';
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'
import { Routes,Route } from 'react-router-dom';
import EditTodo from './components/EditTodo'
function App() {
  return (
    <>
<Routes>
  <Route path="/edit/:id" element={<EditTodo />} />
</Routes>
    <AddTodo />
    <Todos />
    </>
  )
}

export default App