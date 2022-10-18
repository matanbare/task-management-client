import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function DetailsDialog(props) {
    const [show, setShow] = useState(false);
    const [task, setTask] = useState(props.task)
    const [title, setTitle] = useState(props.title)
    const [notesCounter, setNotesCounter] = useState(0);
    let counterNotes = 1;

    const handleClose = () => {
        counterNotes = 1;
        setShow(false);
    };
    const handleShow = () => setShow(true);

    const getCounter = () => {
        setNotesCounter(notesCounter + 1)
        return notesCounter;
    }

    return (
        <>
            <Button variant="primary btn-sm" onClick={handleShow}>
                {title}
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{"Task #" + task.taskId + " - " + task.taskName}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h6>Description:</h6>
                    {task.description}
                    <hr/>
                    <h6>Notes:</h6>
                    {

                        task.notes.map(note => {
                        return <div>{counterNotes++ + ". " + note.description}</div>
                    })}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
