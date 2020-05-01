import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import ComponentDetlis from './ComponentDetlis.js';
import ApprovalCard from './ApprovalCard.js';
import './App.css';

const App = () =>{
    return(
       <div className="ui container comments" id="txt">
           <ApprovalCard>
               <div>
                   <h3>Warning!</h3>
                   Are You Sure You Want To do  This?
               </div>
           </ApprovalCard>
        <ApprovalCard>
              <ComponentDetlis 
               author="Sam"
               time="Today at 6:00PM" 
               content="Nice blog post!"
               avatar={faker.image.avatar()}
              />
        </ApprovalCard>

        <ApprovalCard>   
              <ComponentDetlis 
              author="Sam"
              time="Today at 6:00PM" 
              content="Nice blog post!"
              avatar={faker.image.avatar()}
            />
        </ApprovalCard>

        <ApprovalCard>
             <ComponentDetlis  
             author="Aelx"
             time="Today at 4:00PM"
             content="I Love This post"
             avatar={faker.image.avatar()}
             />
        </ApprovalCard>

        <ApprovalCard>
             <ComponentDetlis 
             author="Steve" 
             time="Today at 9:00AM"
             content="Nice Subject!" 
             avatar={faker.image.avatar()}
             />
        </ApprovalCard>
        
       </div>
    );
}

ReactDOM.render(<App />, document.querySelector('#root'));