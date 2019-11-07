import React from 'react';
import {Table, Button} from 'reactstrap';
import APIURL from '../../../helpers/environment';

const BarTable = (props) => {

    const deleteBar = (bar) => {
        fetch(`${APIURL}/dog/${bar.id}`, {
        method: 'DELETE',
        headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization': props.token
        })
    })
    .then(() => props.fetchBars())
    }

    const barMapper = () => {
        return props.bars.map((bar, index) => {
            return(
                <tr key={index}>
                    <th scope="row"></th>
                    <td>{bar.name}</td>
                    <td>{bar.rating}</td>
                    {/* <td>{workout.definition}</td> */}
                    <td>
                        <Button outline color="success" onClick={() => {props.editUpdateBar(bar); props.updateOn()}}>Update</Button>
                        <Button outline color="danger" onClick={() => {deleteBar(bar)}}>Delete</Button>
                    </td>
                </tr>
            )
        })
    }
    return(
        <>
        <h3>Bar's Reviewed</h3>
        <hr/>
        <Table style={{
            color: 'white',
            margin:'40px'
        }} dark>
            <thead>
                <tr>
                    <th></th>
                    <th>Bar</th>
                    <th>Rating</th>
                </tr>
            </thead>
            <tbody>
                {barMapper()}
            </tbody>
        </Table>
        </>
    )
}

export default BarTable;