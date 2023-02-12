import Main from './components/Main';
import PrintCV from './components/PrintCV';
import './App.css';
import React, {useState, useEffect, useRef} from 'react';

function App() {

  const [personalData, setPersonalData] = useState(
    {
        fullName: "Youssef Mamdouh Ahmed Rawi", 
        phoneNumber:"01028757981", 
        email: "yossefrwy@gmail.com",
        address:"131 Al-Fardous City, 6th October, Cairo",
        personalComments:"Cupidatat sunt anim incididunt nisi labore sunt nulla Lorem elit irure. Aliquip quis excepteur et nostrud enim irure nostrud officia. Et deserunt et aliquip voluptate elit cupidatat. Adipisicing enim minim do anim eiusmod est. Irure laboris anim voluptate proident. Cillum reprehenderit est magna minim. Nostrud ex aute laborum ea irure amet ea ipsum ut non minim anim nisi."
    }
)
const [workData, setWorkData] = useState({
        company:"Helwan University",
        position:"Developer",
        fromDateWork:"123 octover",
        toDateWork:"123 november",
        workComments:"Cupidatat sunt anim incididunt nisi labore sunt nulla Lorem elit irure. Aliquip quis excepteur et nostrud enim irure nostrud officia. Et deserunt et aliquip voluptate elit cupidatat. Adipisicing enim minim do anim eiusmod est. Irure laboris anim voluptate proident. Cillum reprehenderit est magna minim. Nostrud ex aute laborum ea irure amet ea ipsum ut non minim anim nisi."

})
  const [eduData, setEduData] = useState({
    courseProgram:"The Odin Project",
    university:"Helwan",
    fromDateEdu:"123 october",
    toDateEdu:"123 november",
    eduComments:"Cupidatat sunt anim incididunt nisi labore sunt nulla Lorem elit irure. Aliquip quis excepteur et nostrud enim irure nostrud officia. Et deserunt et aliquip voluptate elit cupidatat. Adipisicing enim minim do anim eiusmod est. Irure laboris anim voluptate proident. Cillum reprehenderit est magna minim. Nostrud ex aute laborum ea irure amet ea ipsum ut non minim anim nisi."
  })


function handlePersonalChange(event) {
    const {name, value, type, checked} = event.target
    setPersonalData(prevFormData => {
        return {
            ...prevFormData,
            [name]: type === "checkbox" ? checked : value
        }
    })
    console.log(personalData)
}
function handleWorkChange(event) {
  const {name, value, type, checked} = event.target
  setWorkData(prevFormData => {
      return {
          ...prevFormData,
          [name]: type === "checkbox" ? checked : value
      }
  })
  console.log(personalData)
}
function handleEduChange(event) {
  const {name, value, type, checked} = event.target
  setEduData(prevFormData => {
      return {
          ...prevFormData,
          [name]: type === "checkbox" ? checked : value
      }
  })
  console.log(personalData)
}



const addNewEducationField = () => {
  setEduData(prevData => prevData.concat([
    {
      title: '', 
      institution: '', 
      educationDate: ['', ''],
      ongoing: false
    }
  ]));

  console.log(eduData)
}




  return (
    <>
    <Main  
    personalData={personalData}
    workData={workData}
    eduData={eduData} 
    handlePersonalChange={handlePersonalChange}
    handleWorkChange={handleWorkChange} 
    handleEduChange={handleEduChange}/> 
    <PrintCV  
    personalData={personalData}
    workData={workData}
    eduData={eduData}
    handlePersonalChange={handlePersonalChange}
    handleWorkChange={handleWorkChange} 
    handleEduChange={handleEduChange}/>
    
    </>
  );
}

export default App;
