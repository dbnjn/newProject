import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTrashAlt, faEdit} from '@fortawesome/free-solid-svg-icons';


const userTable =()=>{



return(
   
    <div className='container-fluid'>
        <h1 className='h3 mb-3'>User data</h1>
        <div className='row'>
            <div className='col-12 col-xl-6'>
                <div className='card'>
                    <div className='card-header'>
                          <h5 className='card-title'>basic</h5>
                          <table class="table table-striped">
  <thead>
    <tr>
      <th style={{width: '40%'}}>Name</th>
      <th style={{width:'25%'}}>Mobile number</th>
      <th className='d-none d-md-table-cell' style={{width:'25%'}} >Date of Birth</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th >Deb</th>
      <td> 65363637554</td>
      <td className='d-none d-md-table-cell'>Otto@</td>
      <td className='table-action'>
        
         <FontAwesomeIcon icon={faEdit}/>
         <FontAwesomeIcon icon={faTrashAlt}/>
      </td>
    </tr>
    <tr>
      <th >Debghg</th>
      <td> 65363637554</td>
      <td className='d-none d-md-table-cell'>Otto@</td>
      <td className='table-action'>
      <FontAwesomeIcon icon={faEdit}/>
         <FontAwesomeIcon icon={faTrashAlt}/>
      </td>
    </tr>
    <tr>
      <th >Debdsaa</th>
      <td> 65363637554</td>
      <td className='d-none d-md-table-cell'>Otto@</td>
      <td className='table-action'>
      <FontAwesomeIcon icon={faEdit}/>
         <FontAwesomeIcon icon={faTrashAlt}/>
      </td>
    </tr>
   
  </tbody>
</table>
                    </div>
                </div>
            </div>
        </div>
    </div> 
    
)



}
export default userTable;
