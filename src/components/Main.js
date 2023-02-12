

export default function Main(props){
    
    return(
        <main>
            <form >
            <section>
                <h2>Personal Information</h2>
                <input 
                type="text" 
                placeholder="Full name" 
                name="fullName"
                onChange={props.handlePersonalChange}/>
                <input 
                type="text" 
                placeholder="Phone Number"  
                name="phoneNumber"
                onChange={props.handlePersonalChange}/>
                <input Work
                type="text" 
                name="email" 
                placeholder="E-mail"
                onChange={props.handlePersonalChange}/>
                <input 
                type="text" 
                name="address" 
                placeholder="Address"
                onChange={props.handlePersonalChange}/>
                <textarea 
                value={props.personalData.personalComments}
                placeholder="Comments"
                onChange={props.handlePersonalChange}
                name="personalComments"
            />
            </section>
            <section>
                <h2>Work Experience</h2>
                <input 
                type="text" 
                placeholder="Company" 
                name="company" 
                onChange={props.handleWorkChange}/>
                <input 
                type="text" 
                placeholder="Position(s) Held"  
                name="position"
                onChange={props.handleWorkChange}/>
                <input 
                type="text" 
                name="fromDateWork" 
                placeholder="Start Date"
                onChange={props.handleWorkChange}/>
                <input 
                type="text" 
                name="toDateWork" 
                placeholder="End Date"
                onChange={props.handleWorkChange}/>
                <textarea 
                value={props.workData.workComments}
                placeholder="Comments"
                onChange={props.handleWorkChange}
                name="workComments"
            />
            </section>
            <section>
                <h2>Education</h2>
                <input 
                type="text" 
                placeholder="Course/Program" 
                name="courseProgram" 
                onChange={props.handleEduChange}/>
                <input 
                type="text" 
                placeholder="University"  
                name="university"
                onChange={props.handleEduChange}/>
                <input 
                type="text" 
                name="fromDateEdu" 
                placeholder="Start Date"
                onChange={props.handleEduChange}/>
                <input 
                type="text" 
                name="toDateEdu" 
                placeholder="End Date"
                onChange={props.handleEduChange}/>
                <textarea 
                value={props.eduData.eduComments}
                placeholder="Comments"
                onChange={props.handleEduChange}
                name="eduComments"/>
                
            </section>
            
            
            </form>
            
        </main>
    )
}