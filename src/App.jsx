import { useState } from 'react'
import './App.css'
import Carousel1 from "./Carousel1/Carousel1"
import { CarouselItem } from './Carousel1/Carousel1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
<Carousel1>
      <CarouselItem title='Map key KRs and stakeholders needs'
      buttonText="Learn More"
      text='With Miro’s infinite canvas, you get a space that removes the barriers et a space that removes the barriers.'
      buttonURL={"https://twitter.com/home"} />

      <CarouselItem
      title='Bring customer perspectives into technical discussions'
      text='Building journey maps helps you turn a good product experience into a great one. On Miros infinite canvas, you can lead discussions about user needs, brainstorm improvements, and improve the consistency of the experience.' />
      
      <CarouselItem
      imageURL="https://blog.bitsrc.io/simple-carousel-in-react-2aac73887243"
      title=' Build a customer journey map'
      text='Map the customer experience along touchpoints tracking their needs, emotions, and more.' />
</Carousel1>
    </div>
  )
}

export default App
