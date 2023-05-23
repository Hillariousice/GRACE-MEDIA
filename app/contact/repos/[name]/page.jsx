import Repo from "@/app/component/Repo"
import RepoDir from "@/app/component/RepoDir"
import Link from "next/link"
import { Suspense } from "react"




const RepoPage = ({params:{name}}) => {
  return <div className="card">
<Link href="/contact/repos" className="btn btn-back">Back To Repositories</Link>
<Suspense fallback={<div>Loading repo...</div>}>
<Repo name={name}/>
</Suspense>
<Suspense fallback={<div>Loading directories...</div>}>
<RepoDir name={name}/>
</Suspense>
  </div>

}

export default RepoPage