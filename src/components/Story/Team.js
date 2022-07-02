import React from 'react'
import './Team.css'

function Team() {
  return (
    <section className='panel Team'>

        <div className="Team-container">
            <div className="Team-text-container">
                <h1>Few of our Lazist Members..</h1>
                <ul>
                    <li>
                        <h2>Bredda</h2>
                        <p>Lazist Member of the Team, Known for Frontend and Solidity Smart contracts (Also he is the guy who made this site)</p>
                     </li>
                    <li>
                        <h2>Alex</h2>
                        <p>The monkey of the Team, Known for Frontend and Solidity Smart contracts</p>
                    </li>
                    <li>
                        <h2>Notorious</h2>
                        <p>The prettiest Member of the Team, Known for Solana, Rust and many more stuff. He also made the discord!</p>
                    </li>
                </ul>
                
            </div>
        </div>

    </section>
  )
}

export default Team