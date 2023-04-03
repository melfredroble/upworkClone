import { useState, useRef } from 'react';
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Link from 'next/link'
import { BiTimeFive } from "react-icons/bi";
import { Button, Card, Col, Row } from 'react-bootstrap';
import styles from "../../../styles/ResumeImport.module.css";
import CreateProfileNav from '@/components/CreateProfileNav';
import Select from 'react-select'
import { FaPlus, FaRegTimesCircle } from 'react-icons/fa';

const Categories = () => {

  const initialOptions  = [
    { value: "Data Entry & Transcription Services", label: "Data Entry & Transcription Services" },
    { value: "Information Security & Compliance", label: "Information Security & Compliance" },
    { value: "ERP/CRM Software", label: "ERP/CRM Software" },
    { value: "DevOps & Solution Architecture", label: "DevOps & Solution Architecture" },
    { value: "Project Management", label: "Project Management" },
  ];

  const [options, setOptions] = useState(initialOptions);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [suggestionClicked, setSuggestionClicked] = useState(false)
  const [newOptionValue, setNewOptionValue] = useState("");

  function handleSelectChange(selected) {
    setSelectedOptions(selected);
    setSuggestionClicked(true)
  }

  // function handleRemoveClick(optionToRemove) {
  //   const updatedOptions = selectedOptions.filter(
  //     (option) => option.value !== optionToRemove.value
  //   );
  //   setSelectedOptions(updatedOptions);
  // }

  function handleAddOptionClick() {
    const newOption = {
      value: 'Database management and Administration',
      label: 'Database management and Administration'
    };
    const updatedOptions = [...options, newOption];
    setOptions(updatedOptions);
    setSelectedOptions([...selectedOptions, newOption])
    setSuggestionClicked(true)
  }

  function getOptionLabel(option) {
    const isOptionSelected = selectedOptions.some(
      (selectedOption) => selectedOption.value === option.value
    );
    if (isOptionSelected) {
      return (
        <span>
          <span style={{ textDecoration: "line-through" }}>{option.label}</span>
        </span>
      );
    }
    return option.label;
  }

  function getOptionValue(option) {
    return option.value;
  }

  function handleKeyDown(event) {
    if (event.key === "Backspace" && !event.target.value) {
      const updatedSelectedOptions = selectedOptions.slice(0, -1);
      setSelectedOptions(updatedSelectedOptions)
    }
  }

  function handleRemoveOption(valueToRemove) {
    const updatedSelectedOptions = selectedOptions.filter(
      (option) => option.value !== valueToRemove
    );
    setSelectedOptions(updatedSelectedOptions);
    setSuggestionClicked(false);
  }

    return (
        <>
            <CreateProfileNav />

            <Container className='mt-5 pt-5 pb-3 h-100 ' fluid>
              <Row  className='mt-5  justify-content-center px-4'>
                <Col xl={11}>
                  <p className='fs-14 text-gray'>12/14</p>
                  <h1 className='title'>What are the main services you offer?</h1>
                  <p className='fw-semibold'>Choose at least one service that best describes the type of work you do. This helps us match <br /> you with clients who need your unique expertise.
</p>
                </Col>
              </Row>
              <Row className='justify-content-start px-4'>
                  <Col className='mt-4 ' xl={12}>
                      <div className=' ms-5 ps-3'>
                        <Select className='w-50 fs-14' isMulti  placeholder='Search for a service' options={options}
                          value={selectedOptions}
                          onChange={setSelectedOptions}
                          onKeyDown={handleKeyDown}
                          onCreateOption={(inputValue) => {
                            const newOption = { value: inputValue, label: inputValue };
                            const updatedOptions = [...options, newOption];
                            setOptions(updatedOptions);
                            setSelectedOptions([...selectedOptions, newOption]);
                          }}
                          />
                      </div>
                      <div className='ms-5 ps-3 mt-4'>
                        <h6>Suggested services</h6>
                        {!suggestionClicked ? (
                          <button className='btn btn-outline-success fs-14 d-flex align-items-center' onClick={handleAddOptionClick}>
                          <FaPlus />&nbsp;
                          Database management and Administration
                        </button>
                        ) : (
                          <button className='btn bg-gray  fs-14 d-flex align-items-center'>
                          Database management and Administration
                        </button>
                        )}

                        {
                          selectedOptions.length > 0 ? (<div>
                          <h6 className='mt-3'>Selected services</h6>

                          <div className="d-flex">
                            {selectedOptions.map((option) => (
                              <button className='btn btn-outline-success me-2 shadow-none fs-14 d-flex align-items-center'>
                                <span key={option.value} className='me-2'>{option.label}</span>
                                <FaRegTimesCircle onClick={() => handleRemoveOption(option.value)} />
                              </button>
                            ))}
                          </div>
                          
                        </div>) : null
                        }

                      </div>
                  </Col>
              </Row>
            </Container> 
            
            <Navbar bg="white" expand="lg" fixed='bottom' className='mb-3'>
                <Container fluid className='d-flex flex-column p-0 m-0'>
                    <div className="d-flex w-100">
                        <div className={styles.pageRange + ' w-600 rounded-pill'}></div>
                        <div className={styles.pageRangeGray + ' w-100'}></div>
                    </div>
                    <div className='mt-4 px-5 d-flex justify-content-between w-100'>
                        <Link className='text-decoration-none px-4 py-2 fw-semibold bg-gray text-dark fs-17 rounded-pill' href="/create-profile/overview">
                        Back 
                        </Link>
                        <div className='d-flex justify-content-between'>
                            <Link className='text-decoration-none px-4 py-2 fw-semibold bg-green text-white fs-17 rounded-pill' href="/create-profile/rate">
                                Next, set your rate
                            </Link>
                        </div>
                    </div>
                </Container>
            </Navbar>
        </>
    )
}

export default Categories