import React, {useState, useEffect} from 'react';
import {Table, Button} from 'reactstrap';
import APIURL from '../../../helpers/environment';


const FSTable = (props) => {
    const [fs, setFs] = useState([]);
    
    const fetchFS = () => {
        fetch(`${APIURL}/bars/getFS`, {
        method: 'GET',
        headers: new Headers ({
            'Content-Type': 'application/json',
        })
    }).then( (res) => res.json())
    .then((fsData) => {
        setFs(fsData)
        console.log(fsData)
    })
}

useEffect(() =>{
    fetchFS();
}, [])

const FSMapper = () => {
    return fs.map((fs, index) => (
        <tr key={index}>
            <th scope="row">{fs.bar}</th>
            <td>{fs.address}</td>
            <td>{fs.phone}</td>
        </tr>
    ))
}


return(
    <>
    <Table dark>
        <thead>
            <tr>
                <th>Bar Name</th>
                <th>Address</th>
                <th>Phone Number</th>
            </tr>
        </thead>
        <tbody>
            {FSMapper()}
        </tbody>
    </Table>
    </>
)
}

export default FSTable;