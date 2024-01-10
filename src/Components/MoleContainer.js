import { useState } from 'react'
import Mole from './Mole'
import EmptySlot from './EmptySlot'

const MoleContainer = (props) => {
    let [showMoles, setShowMoles] = useState(false)

    const handleClick = (e) => {
        props.setScore(props.score +1)
        setShowMoles(false)
    }

    let displayMole = showMoles ? <Mole setScore={props.setScore} toggle={setShowMoles} handleClick={handleClick} /> : <EmptySlot toggle={setShowMoles} />

    return (
        <div style={{'display': 'inline-block', 'width': '30vw'}}>
        {displayMole}    
        </div>
    )
}

export default MoleContainer