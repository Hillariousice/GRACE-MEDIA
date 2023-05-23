import Link from 'next/link'
import { FaStar,FaCodeBranch,FaEye } from 'react-icons/fa'


async function getRepo(name) {
    const response = await fetch(`https://api.github.com/repos/hillariousice/${name}`,{  next:{
        revalidate:60
      }})
    const data = await response.json()
    return data
  }

const Repo = async({name}) => {
    const repo = await getRepo(name)
  return  <>
    <h2>{repo.name}</h2>
    <p>{repo.description}</p>
    <div className="card-stats">
        <div className="card-stats">

            <FaStar/>
            <span>{repo.stargazers_count}</span>
            </div>
        <div className="card-stats">
        <FaCodeBranch/>
        <span>
            {repo.forks_count}
        </span>
        </div>
        <div className="card-stats">
        <FaEye/>
        <span>
            {repo.watchers_count}
        </span>
        </div>
    </div>
  </>

}

export default Repo