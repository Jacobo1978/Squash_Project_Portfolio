import Card from "../../components/Card"
import {AiOutlinePlus, AiOutlineMinus} from 'react-icons/ai'
import { useState } from "react"


const Educ = ({edu}) => {
    const [showAnswer, setShowAnswer] = useState(false);



  return (
    <Card className="edu" onClick={() => setShowAnswer(prev => !prev)}>
        <div>
            <h5 className="edu__degree_title">{edu.degree_title}</h5>
            <button className="edu__icon">
                {showAnswer ? <AiOutlineMinus/> : <AiOutlinePlus/>}
            </button>
        </div>
        {showAnswer && <p className="edu__degree">{edu.degree}</p>}
    </Card>
  )
}

export default Educ