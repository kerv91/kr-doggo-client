import React, {useState, useEffect} from 'react';
import {Table, Button} from 'reactstrap';
import APIURL from '../../../helpers/environment';


const BRTable = (props) => {
    const [br, setBr] = useState([]);
    
    const fetchBR = () => {
        fetch(`${APIURL}/bars/getBR`, {
        method: 'GET',
        headers: new Headers ({
            'Content-Type': 'application/json',
        })
    }).then( (res) => res.json())
    .then((brData) => {
        setBr(brData)
        console.log(brData)
    })
}

useEffect(() =>{
    fetchBR();
}, [])

const BRMapper = () => {
    return br.map((br, index) => (
        <tr key={index}>
            <th scope="row">{br.bar}</th>
            <td>{br.address}</td>
            <td>{br.phone}</td>
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
            {BRMapper()}
        </tbody>
    </Table>
    </>
)
}

export default BRTable;