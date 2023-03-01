import './styles/techstack.scss'
const TechStack = () => {
  return (
    <div className="tech-stack">
      <h1 className="tech-stack-header"> My Tech Stack</h1>
      <h4>Languages</h4>
       <p className="tech">Javascript, HTML, CSS, Ruby, SQL</p>
      <h4>Frameworks</h4>
        <p className="tech">Node.js, React.js, Express.js, Sinatra, Ruby on Rails,</p>
      <h4>Database, Libraries & API integration</h4>
        <p className="tech">Postgresql, Ajax & Axios Requests, JQuery, Lodash</p>
      <h4>Deployment</h4>
        <p className="tech">Github, Flyio, Surge</p>
      <h4>Some Experience</h4>
        <p className="tech">TDD, Redux, lodash, Bootstrap</p>
      <div className="tech-symbols">
        <img src={require('../images/jslogo1.png')} alt="JS" />
        <img src={require('../images/html.png')} alt="HTML" />
        <img src={require('../images/css.png')} alt="CSS" />
        <img src={require('../images/sql.png')} alt="sql" />
        <img src={require('../images/react.png')} alt="react" />
        <img src={require('../images/jquery.png')} alt="jquery" />
        <img src={require('../images/node.png')} alt="node" />
        <img src={require('../images/psql.png')} alt="psql" />
        <img src={require('../images/rubyonrails.png')} alt="ror" />
        <img src={require('../images/axios.png')} alt="axios" />
        <img src={require('../images/git.png')} alt="git" />
      </div>
    </div>
  )
}

export default TechStack