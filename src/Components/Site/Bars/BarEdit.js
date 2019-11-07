import React, {useState} from 'react';
import {Button,Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody} from 'reactstrap';
import APIURL from '../../../helpers/environment';

const BarEdit = (props) => {
    const [editName, setEditName] = useState(props.barToUpdate.name);
    const [editRating, setEditRating] = useState(props.barToUpdate.rating);

    const barUpdate = (event, bar) => {
        event.preventDefault();
        fetch(`${APIURL}/dog/${props.barToUpdate.id}`,{
            method: 'PUT',
            body: JSON.stringify({rating: editRating}),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
            }) .then((res) => {
            props.fetchBars();
            props.updateOff();
        })
    }

    return(
        <Modal isOpen={true}>
            <ModalHeader>Update Rating</ModalHeader>
            <ModalBody>
                <Form onSubmit={barUpdate}>
                    <Label htmlFor="rating">Edit Rating</Label>
                    <Input type="select" name="rating" required value={editRating} onChange={(e) => setEditRating(e.target.value)}>
                    <option></option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>  
                    </Input>
                    <Button type="submit">Update</Button>                  
                </Form>
            </ModalBody>
        </Modal>
    )
}

export default BarEdit;
