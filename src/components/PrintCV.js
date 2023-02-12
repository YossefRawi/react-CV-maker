import React, {useState, useEffect, useRef} from 'react';
import { useReactToPrint } from 'react-to-print';



export default function PrintCV(props){
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: "CV",
    })

        return(
            <>
            <div ref={componentRef} className="main">
            <div className="personal-information">
                <div>
                    <h2 className="b-name fullname">{props.personalData.fullName}</h2>
                    <h5>About:<h3 className="b-name"> {props.personalData.personalComments}</h3></h5>
                    
                </div>
                <div>
                    <h5>Phone Number:<h3 className="b-name">{props.personalData.phoneNumber}</h3></h5>
                    <h5>E-mail:<h3 className="b-name">{props.personalData.email}</h3></h5>
                    <h5>Address:<h3 className="b-name">{props.personalData.address}</h3></h5>
                </div>
            </div>
            <div className="work-info">
            
                <div>
                    <h2 className="work-header">Work Experience</h2>
                    <h5>About:<h3 className="b-name"> {props.workData.workComments}</h3></h5>
                    
                </div>
                <div className="position">
                    <h5>Company:<h3 className="b-name"> {props.workData.company}</h3></h5>
                    <h5>Position:<h3 className="b-name"> {props.workData.position}</h3></h5>
                    <h5>Date:<h3 className="b-name"> {props.workData.fromDateWork} - {props.workData.toDateWork}</h3></h5>
                </div>
            </div>
            <div className="work-info">
            
                <div className="company">
                    <h2 className="work-header">Education</h2>
                    <h5>About:<h3 className="b-name"> {props.personalData.personalComments}</h3></h5>
                </div>
                <div className="position">
                    <h5>Course:<h3 className="b-name"> {props.eduData.courseProgram}</h3></h5>
                    <h5>University:<h3 className="b-name"> {props.eduData.university}</h3></h5>
                    <h5>Date:<h3 className="b-name"> 
                    {props.eduData.fromDateEdu} {props.eduData.toDateEdu}</h3></h5>
                </div>
            </div>
            
            </div>
            <button onClick={handlePrint}>Print CV!</button>
            </>
        )
}