import React, {useState, useEffect} from 'react';
import {Container, Row, Col} from 'reactstrap';
import BarCreate from './BarCreate';
import BarTable from './BarTable';
import BarEdit from './BarEdit';
import APIURL from '../../../helpers/environment';

const BarIndex = (props) => {
    console.log(props)

    const [bars, setBars] = useState([]); 
    const [updateActive, setUpdateActive] = useState(false);
    const [barToUpdate, setBarToUpdate] = useState({});

    const fetchBars = () => {
        fetch(`${APIURL}/dog/userbars`, {
            method: 'GET',
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }).then( (res) => res.json())
        .then((barData) => {
            setBars(barData)
        })
    }
    
    useEffect(() => {
        fetchBars();
    }, [])

    const editUpdateBar = (bar) => {
        setBarToUpdate(bar);
        console.log(bar);
    }

    const updateOn = () => {
        setUpdateActive(true);
    }

    const updateOff = () => {
        setUpdateActive(false);
    }



    return(
        <Container>
            <Row>
                <Col md="1" />
                <Col md="10">
                    <BarTable bars={bars} editUpdateBar={editUpdateBar} updateOn={updateOn} fetchBars={fetchBars} token={props.token}/>
                </Col>
                    {updateActive ? <BarEdit barToUpdate={barToUpdate} updateOff={updateOff} token={props.token} fetchBars={fetchBars}/> : <></>}
                <Col md="1" />
            </Row>
        </Container>
    )
}

//IDEALLY FETCH BAR UDPATE AGAIN? ANYTHING ADDED AS 1 CRASHES

export default BarIndex;