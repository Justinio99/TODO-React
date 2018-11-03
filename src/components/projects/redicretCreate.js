import React from 'react';
import Link from 'react-router-dom/Link';
 const redirectCreate = () =>{
    return(
        <div>
            <p></p>
    <Link to="/create">
         <a className="btn-floating btn-large cyan pulse"><i class="material-icons">add</i></a>
    </Link>
    </div>
    );
}
export default redirectCreate;