import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"

const App = () => {
  const [marvel, setMarvel] = useState([])
  const [backDatos, setBackDatos] = useState([])

  const getAPIMarvel = async() =>{
    // Obten tu api en https://developer.marvel.com/ 
   const url = import.meta.env.DB_MARVEL
   const {data: {data:{results}}} = await axios.get(url)
    setMarvel(results)
   console.log(results)
  }

 const handleSubmit = async(element) =>{
  if(element){
    
    const dataToSend = {
      name: element.name,
      id: element.id,
      series: element.series.collectionURI
      }

      const url ="http://localhost:5006/marvel"
      const response = await axios.post(url, dataToSend)
      console.log("envio de datos", response)
      setBackDatos(response)
  }
 }

  useEffect(()=>{
 getAPIMarvel();
 handleSubmit();
  },[])

  return (
    <div>
      {marvel.map(element =>
        <Col md={4} key={element.id}>
          <Card style={{width:"18rem"}}>
          <Card.Img variant="top" src={`${element.thumbnail.path}.${element.thumbnail.extension}`} />
          </Card>
          <Card.Title>
            <button onClick={()=> handleSubmit(element)}>★</button></Card.Title>
        </Col>)}
    </div>
  )
}

export default App
