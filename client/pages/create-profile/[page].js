import {useRouter} from "next/router"
import React from 'react'
import Experience from "./pages/Experience"
import Goal from "./pages/Goal"
import Welcome from "./pages/Welcome"

const pageName = () => {

    const router = useRouter()
    const {query} = router
    const {page} = query

  return (
    <>
        {page === "welcome" && <Welcome />}
        {page === "experience" && <Experience />}
        {page === "goal" && <Goal />}
    </>
  )
}

export default pageName