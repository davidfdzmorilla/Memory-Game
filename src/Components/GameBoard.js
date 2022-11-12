import { useState, useEffect } from 'react';
import './GameBoard.css'



export const GameBoard = ({ tablero }) => {
  const [cards, setCards] = useState([])
  const [imgBack, setImgBack] = useState('')
  const [counter, setCounter] = useState(2)
  const [firstCard, setFirstCard] = useState(null)
  const [secondCard, setSecondCard] = useState(null)

  /**TODO
   * 
   */
  const imagesFront = []
  useEffect(() => {
    const getImages = () => {
      setImgBack(`https://picsum.photos/200/300?random=${Math.floor(Math.random() * 100)}`)
      for (let i = 0; i < 8; i++) {
        imagesFront.push({ 'url': `https://picsum.photos/200/300?random=${i}`, 'visible': false, 'adivinada': false })
      }
    }
    getImages()
    const duplicateImages = () => {
      const images = imagesFront.concat(imagesFront)
      // dar id unico a cada imagen
      const imagesWithId = images.map((image, index) => {
        return { ...image, id: index }
      })
      setCards(imagesWithId)

    }
    duplicateImages()
  }, [])




  const handleCard = (id, url) => {
    // si hay dos cartas seleccionadas, no se puede seleccionar otra

    if (counter === 0) {
      return
    }
    console.log(cards)
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
      setFirstCard(id)
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
      setSecondCard(id)
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

  console.log(firstCard, secondCard, counter)





  return (
    <section className='game-board-container'>
      {/* pintar 8 parejas de cartas doble cara random que al hacer click se den la vuelta */}
      {cards.map(({ url, visible, id, adivinada }) => {
        return (
          <div key={id}>
            {visible || adivinada ?
              <img src={url} alt='front' /> :
              <img src={imgBack} alt='back' onClick={() => handleCard(id, url)} />
            }
          </div>)
      })}

    </section>
  );
};
