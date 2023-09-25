import Card from '../../components/Card'
import data from './data'
import './skills.css'

const Skills = () => {
  return (
    <section id="skills">
      <h2>Skills</h2>
      <p>I give you the best in all services below</p>
      <div classNane="container skill__container">
        {
            data.map(item => (
              <Card key={item.id} className ="skill light">
                <div className="skill__icon">{item.icon}</div>
                <div className="skill__details">
                  <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                </div>
              </Card>
            ))
        }
      </div>
    </section>
  )
}

export default Skills
