import { useState, useEffect } from 'react';
import './GameBoard.css'



export const GameBoard = ({ tablero, setMov, mov, restMov, setRestMov, secs = 1, setSeconds }) => {
  const [cards, setCards] = useState([])
  const [imgBack, setImgBack] = useState('')
  const [counter, setCounter] = useState(2)
  const [firstCard, setFirstCard] = useState(null)
  const [secondCard, setSecondCard] = useState(null)
  const [reset, setReset] = useState(false)
  const [winner, setWinner] = useState(false)

  /**TODO
   * 
   */
  useEffect(() => {
    const imagesFrontArray = []
    const getImages = () => {
      setImgBack(`https://picsum.photos/200/300?random=${Math.floor(Math.random() * 100)}`)
      for (let i = 0; i < 8; i++) {
        imagesFrontArray.push({ 'url': `https://picsum.photos/200/300?random=${i}`, 'visible': false, 'adivinada': false })
      }
    }
    getImages()
    // duplicar las imagenes y darles un id unico
    const duplicateImages = () => {
      const images = imagesFrontArray.concat(imagesFrontArray)
      const imagesWithId = images.map((image, index) => {
        return { ...image, id: index }
      })
      setCards(imagesWithId)
    }
    duplicateImages()
    console.log('useeffect')
  }, [reset])




  const handleCard = (id, url) => {

    if (secs === 0) {
      return
    }

    if (counter === 0) {
      setMov(mov + 1)
      // si las cartas no coinciden, se vuelven a ocultar
      if (firstCard.url !== secondCard.url) {
        setCards(cards.map(card => {
          if (card.id === firstCard.id || card.id === secondCard.id) {
            return { ...card, visible: false }
          }
          return card
        }))
        setCounter(2)
      }
      // si las cartas coinciden, se quedan visibles
      else {
        setCards(cards.map(card => {
          if (card.id === firstCard.id || card.id === secondCard.id) {
            setRestMov(restMov + 1)
            setCounter(2)
            setFirstCard(null)
            setSecondCard(null)
            return { ...card, visible: true, adivinada: true }
          }
          return card
        }))
      }
    }
    // si la carta ya esta adivinada, no se puede seleccionar
    if (cards[id].adivinada) {
      return
    }
    // si la carta ya esta visible, no se puede seleccionar
    if (cards[id].visible) {
      return
    }
    // si es la primera carta seleccionada
    if (counter === 2) {
      setFirstCard({ id, url })
      setCounter(counter - 1)
      // poner visible la carta
      const newCards = cards.map((card) => {
        if (card.id === id) {
          return { ...card, visible: true }
        }
        return card
      }
      )
      setCards(newCards)
    }
    // si es la segunda carta seleccionada
    if (counter === 1) {
      setSecondCard({ id, url })
      setCounter(counter - 1)
      // poner visible la carta
      const newCards = cards.map((card) => {
        if (card.id === id) {
          return { ...card, visible: true }
        }
        return card
      }
      )
      setCards(newCards)
    }
  }
  console.log(winner)

  return (
    <section className='game-board-container'>
      {/* pintar 8 parejas de cartas doble cara random que al hacer click se den la vuelta */}
      {winner &&
        <div>
          <h1>HAS GANADO</h1>
        </div>
      }
      {secs > 0 && restMov < 8 ? cards.map(({ url, visible, id, adivinada }) => {
        return (
          <div key={id}>
            {visible || adivinada ?
              <img src={url} alt='front' /> :
              <img src={imgBack} alt='back' onClick={() => handleCard(id, url)} />
            }
          </div>
        )
      }) : restMov < 8 &&
      <div>
        <h3>Se ha acabado el tiempo</h3>
        <button onClick={() => {
          setSeconds(60)
          setCards([])
          setReset(!reset)
        }
        }>Reiniciar</button>
      </div>
      }
    </section>
  );
};
