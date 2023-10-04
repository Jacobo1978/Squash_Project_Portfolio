import education from './data'
import Educ from './Educ'
import './education.css'

const Education = () => {
  return (
    <section id="educs">
      <h2>Education</h2>
      <p>
      Click on each degree or certification for more information.
      </p>
      <div className="container educs__container">
        {
          education.map(edu => (
            <Educ key={edu.id} edu={edu}/>
          ))
        }
      </div>
    </section>
  )
}

export default Education