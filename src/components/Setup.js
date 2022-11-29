 
 import React from 'react';
 import classNames from 'classnames';
 import { useState } from 'react';
 
 import {Dropdown, Label} from 'semantic-ui-react';
 const options1= [
   { key: 'Insert', text: 'Insert', value: 'Insert' },
   { key: 'Update', text: 'Update', value: 'Update' },
   { key: 'Delete', text: 'Delete', value: 'Delete' },
 ]
 const options2=[
    { key: 'Requirement Type', text: 'Requirement Type',value: '1' },
    { key: ' Country', text: ' Country', value: '2' },
    { key: 'skillset', text: 'skillset', value: '3' },
    { key: 'currency', text: 'currency', value: ' 4' },
    { key: ' serverity', text: ' serverity', value: ' 5' },
    { key: ' Status ', text: ' Status',value: '6' }
 ]
 const Setup = () =>{ 
   return (
     <div>
     <form className={classNames("ui", "form", "raised segment")}>
 
       <div className="ui teal message">
         <h3> Admin Set Up</h3>
       </div>
       <div className="ui mini fields">
                         <div className="ui two wide field">
                             <label>Action</label>
                         </div>
                         <div className={classNames("ui five wide field")}>
                         <Dropdown placeholder='Type' selection options={options1} />
                         </div>
                         <div className="ui one wide field" />
 
 <div className="ui two wide field">
     <label>Select</label>
 </div>
 <div className={classNames("ui five wide field")}>
  
 <Dropdown placeholder='select' selection options={options2}/>
 </div>
 </div>
 

              <div className= "ui mini fields"> 
               <div className="ui five wide field">
                  <label>Enter the value</label>
                  <input type="text" name="value"
                   placeholder='Enter value'/>
                  
         </div>
         </div>
         <div className="ui basic segment center aligned">
                        <button className="ui primary button">Submit</button>
                    </div>
                
                         
                         
       </form>      
 
  </div>
 
   )
 
             
              
 
      
 
      
 
   
 
 
 }
 
 export default Setup;

  


 