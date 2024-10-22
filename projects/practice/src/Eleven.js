import React from 'react'

const Eleven = () => {
    let quotes = [
        "The greatest glory in living lies not in never falling, but in rising every time we fall.","The future belongs to those who believe in the beauty of their dreams.","If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.","Do one thing every day that scares you.","It is during our darkest moments that we must focus to see the light.","Well done is better than well said.","Do not go where the path may lead, go instead where there is no path and leave a trail","Never let the fear of striking out keep you from playing the game.","You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.","Life is really simple, but we insist on making it complicated."
    ]

    const randomIndex = Math.floor(Math.random()*quotes.length)
    const quote = quotes[randomIndex]

  return (
    <div>
      {quote}
    </div>
  )
}

export default Eleven
