import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Link from 'next/link'
import { BiTimeFive } from "react-icons/bi";
import { Button, Card, Col, Row } from 'react-bootstrap';
import styles from "../../../styles/ResumeImport.module.css";
import CreateProfileNav from '@/components/CreateProfileNav';
import Select from 'react-select'
import { FaPlus, FaTrashAlt } from 'react-icons/fa';

const Languages = () => {

  const [proficiency, setProficiency] = useState('')
  const [languages, setLanguages] = useState('')
  
  const [tableData, setTableData] = useState([]);


  const languagesData = [
    {
        name: 'Tagalog',
        value: 'tagalog'
    },
    {
        name: 'English',
        value: 'english'
    },
    {
      name: 'Mandarin',
      value: 'mandarin'
    },
    {
      name: 'Arabic',
      value: 'arabic'
    },
];

const languagesOption = languagesData.map(language => ({
  value: language.name,
  label: language.name
}));



// Proficiency
  const proficiencyData = [
      {
          name: 'Basic',
          value: 'basic'
      },
      {
          name: 'Conversational',
          value: 'conversational'
      },
      {
        name: 'Fluent',
        value: 'fluent'
      },
      {
        name: 'Native or bilingual',
        value: 'native or bilingual'
      },
  ];

  const proficiencyOption = proficiencyData.map(proficiency => ({
        value: proficiency.name,
        label: proficiency.name
    }));


  const handleProficiency = (newValue, id) => {
    setTableData((prevData) =>
      prevData.map((data) =>
        data.id === id ? { ...data, category: newValue } : data
      )
    )
  }

  const handleLanguages = (newValue, id) => {
    setTableData((prevData) =>
      prevData.map((data) =>
        data.id === id ? { ...data, name: newValue } : data
      )
    )
  }

  function addData() {
    if(tableData.length < 5){
      const newData = {
        id: tableData.length + 1,
        name: "",
        category: ""
      };

      setTableData(prevData => [...prevData, newData]);
    } else {
      return null
    }

  }

  function deleteRow(id) {
    setTableData(prevData => prevData.filter(data => data.id !== id));
  }

  const handleProficiencyDefault = (selected) => {
    setProficiency(selected)
  }

  return (
        <>
            <CreateProfileNav />

            <Container className='mt-5 pt-5 pb-3 h-100 ' fluid>
              <Row  className='mt-5  justify-content-center px-4'>
                <Col xl={11}>
                  <p className='fs-14 text-gray'>9/14</p>
                  <h1 className='title'>Looking good. Next, tell us which languages you speak.</h1>
                  <p className='fw-semibold'>Upwork is global, so clients are often interested to know what languages you speak. English is a must, but do you speak any other languages?</p>
                </Col>
              </Row>
              <Row className='justify-content-start px-4 mx-5 mb5 pb-5'>
                  <Col className='mt-4 mb5 pb-5' xl={10}>
                      <table className='w-100 mb5 pb-5' style={{tableLayout: 'fixed'}}>
                        <thead>
                          <tr className='border-bottom'>
                            <th className='p-3 fw-semibold'>Language</th>
                            <th className='py-3 fw-semibold'>Proficiency</th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody >

                          <tr className='border-bottom '>
                            <td className='text-muted p-3'>English (all profiles include this)</td>
                            <td className='py-3'>
                              {/* <select className='w-50 form-control'>
                                <option>Basic</option>
                                <option>Conversational</option>
                                <option>Fluent</option>
                                <option>Native or Bilingual</option>
                              </select> */}
                              <Select className='w-50' value={proficiency} onChange={handleProficiencyDefault}  placeholder='My level is' options={proficiencyOption} />
                            </td>
                            <td></td>
                          </tr>

                          {tableData.map((data)=>(
                            <tr key={data.id} className='border-bottom '>
                              <td className='text-muted px-3 py-2'>
                                <Select className='w-50' value={data.name} onChange={(e) => handleLanguages(e, data.id)}  placeholder='I know' options={languagesOption} />
                              </td>
                              <td className='py-2'>
                                <Select className='w-50' value={data.category} onChange={(newValue) => handleProficiency(newValue, data.id)}  placeholder='My level is' options={proficiencyOption} />
                                
                              </td>
                              <td>
                                <button className='border border-2 rounded-circle px-2 py-1' onClick={() => deleteRow(data.id)}>
                                  <FaTrashAlt color='green'/>
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                        <tfoot >
                        </tfoot>
                      </table>
                      {tableData.length < 5 ? (<button className='btn btn-outline-success rounded-pill mt-3' onClick={() => addData()}>
                        <FaPlus />
                        &nbsp; Add a language
                      </button>) : null }
                  </Col>
              </Row>
            </Container> 
            
            <Navbar bg="white" expand="lg" fixed='bottom' className='mb-3'>
                <Container fluid className='d-flex flex-column p-0 m-0'>
                    <div className="d-flex w-100">
                        <div className={styles.pageRange + ' w-170 rounded-pill'}></div>
                        <div className={styles.pageRangeGray + ' w-100'}></div>
                    </div>
                    <div className='mt-4 px-5 d-flex justify-content-between w-100'>
                        <Link className='text-decoration-none px-4 py-2 fw-semibold bg-gray text-dark fs-17 rounded-pill' href="/create-profile/education">
                        Back 
                        </Link>
                        <div className='d-flex justify-content-between'>
                            <Link className='text-decoration-none px-4 py-2 fw-semibold bg-green text-white fs-17 rounded-pill' href="/create-profile/skills">
                                Next, add your skills
                            </Link>
                        </div>
                    </div>
                </Container>
            </Navbar>
        </>
    )
}

export default Languages