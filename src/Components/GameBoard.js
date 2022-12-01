import { useState, useEffect } from 'react';
import './GameBoard.css'
import Confetti from 'react-confetti'



export const GameBoard = ({ tablero, setMov, mov, restMov, setRestMov, secs, setSeconds }) => {
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
      // mezclar las imagenes
      const shuffleImages = imagesWithId.sort(() => Math.random() - 0.5)
      setCards(shuffleImages)
    }
    duplicateImages()
  }, [reset])


  useEffect(() => {
    if (firstCard && secondCard) {
      if (firstCard.url === secondCard.url) {
        setCards(cards.map(card => {
          if (card.id === firstCard.id || card.id === secondCard.id) {
            return { ...card, adivinada: true }
          }
          return card
        }))
        setFirstCard(null)
        setSecondCard(null)
        setMov(mov + 1)
        setRestMov(restMov + 1)
        if (restMov === 7) {
          setWinner(true)
        }
      } else {
        setTimeout(() => {
          setCards(cards.map(card => {
            if (card.id === firstCard.id || card.id === secondCard.id) {
              return { ...card, visible: false }
            }
            return card
          }))
          setFirstCard(null)
          setSecondCard(null)
          setMov(mov + 1)
        }, 1000)
      }
    }
  }, [secondCard, firstCard, cards, mov, setMov, restMov, setRestMov])

  const handleCardClick = (card) => {
    if (card.adivinada) {
      return
    }
    if (card.visible) {
      return
    }
    if (counter === 2) {
      setFirstCard(card)
      setCards(cards.map(c => {
        if (c.id === card.id) {
          return { ...c, visible: true }
        }
        return c
      }))
      setCounter(1)
    } else {
      setSecondCard(card)
      setCards(cards.map(c => {
        if (c.id === card.id) {
          return { ...c, visible: true }
        }
        return c
      }))
      setCounter(2)
    }
  }

  const handleReset = () => {
    setCards([])
    setReset(!reset)
    setMov(0)
    setRestMov(0)
    setSeconds(60)
    setWinner(false)
  }

  

  return (
    <>
      {!winner && secs > 0 &&
        <div className="game-board">
          {cards.map((card, i) => {
            return (
              <div className="card" key={card.id} onClick={() => handleCardClick(card)}>
                <img src={card.visible || card.adivinada ? card.url : imgBack} alt="card" />
                  {!card.adivinada && !card.visible && <div class="numero" >{i + 1}</div>}
              </div>
            )
          })}
        </div>
      }
      <div className="game-board__info">
        {winner && <>
          <h3>¡Ganaste!</h3>
          <Confetti/>
        </>}
        {secs === 0 && !winner && <h3>¡Perdiste!</h3>}
        <button onClick={handleReset}>Reset</button>
      </div>
    </>
  )
}

