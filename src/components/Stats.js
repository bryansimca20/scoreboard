import React from 'react'

const Stats = (props) => {
  
  const totalPlayers = props.players.length
  
  const totalScore = props.players.reduce((acc, player) => (
      acc + player.score
  ), 0)
  
  return (
    <table className="stats">
      <tbody>
        <tr>
          <td>Players:</td>
          <td>{totalPlayers}</td>
        </tr>
        <tr>
          <td>Total Points:</td>
          <td>
            {totalScore}
          </td>
        </tr>
      </tbody>
    </table>
  )
}

export default Stats