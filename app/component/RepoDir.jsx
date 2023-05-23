import Link from "next/link"


async function getRepoContents(name){
    await new Promise(resolve => setTimeout(resolve, 3000))
    const response = await fetch(`https://api.github.com/repos/hillariousice/${name}/contents`,
    {next:{
        revalidate:60
      }})
    const data = await response.json()
    return data
}

const RepoDir = async({name}) => {
    const contents = await getRepoContents(name)
  const dirs = contents.filter(content => content.type === 'dir')
    return (
    <>
      <h3>Directories</h3>
        <ul className="repo-dir">
            {dirs.map(dir => {
                return <li key={dir.path}>
                    <Link href={`/contact/repos/${name}/${dir.path}`}>
                        <span>{dir.path}</span>

                    </Link>
                </li>
            })}
        </ul>
    </>
  )
}

export default RepoDir
