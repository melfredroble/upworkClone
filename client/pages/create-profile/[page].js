import {useRouter} from "next/router"
import React from 'react'
import Experience from "./pages/Experience"
import Goal from "./pages/Goal"
import Welcome from "./pages/Welcome"
import axios from "axios"
import WorkPreference from "./pages/Work-Preference"
import ResumeImport from "./pages/Resume-Import"
import Title from "./pages/Title"
import Employment from "./pages/Employment"
import Education from "./pages/Education"
import Languages from "./pages/Languages"
import Skills from "./pages/Skills"
import Overview from "./pages/Overview"
import Categories from "./pages/Categories"
import Rate from "./pages/Rate"
import Location from "./pages/Location"


export async function getUser() {
  const response = await axios.get('http://localhost:5000/user/');
  const userData = response.data;
  return userData;
}

export async function getCountryList() {
  const response = await axios.get('http://localhost:3000/api/getCountriesData')
  const data = response.data
  return data
}

export async function getServerSideProps() {
  const user = await getUser();
  const countries = await getCountryList();
  return {
      props: {
        user,
        countries
      },
  };
}



const pageName = ({user, countries}) => {

    const router = useRouter()
    const {query} = router
    const {page} = query

  return (
    <>
        {page === "welcome" && <Welcome user={user} />}
        {page === "experience" && <Experience />}
        {page === "goal" && <Goal />}
        {page === "work-preference" && <WorkPreference /> }
        {page === "resume-import" && <ResumeImport /> }
        {page === "title" && <Title /> }
        {page === "employment" && <Employment countriesData={countries}/> }
        {page === "education" && <Education countriesData={countries}/>}
        {page === "languages" && <Languages /> }
        {page === "skills" && <Skills /> }
        {page === "overview" && <Overview /> }
        {page === "categories" && <Categories /> }
        {page === "rate" && <Rate /> }
        {page === "location" && <Location countriesData={countries}/> }
    </>
  )
}

export default pageName