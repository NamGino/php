import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { MdOutlineDelete } from 'react-icons/md';
import { useState } from "react";
import axios from "axios";
const DeleteLms = ({  LmsDelete  }) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
        const Checkdelete = async (MaHS) => {
            try{
                await axios.delete(`http://localhost:80/php/hocsinh/${MaHS}/`).then(response =>{
                if (response.status === 200) {
                        handleClose();
                        window.location.reload();
                }
                });
            }catch{
                console.log("error");
        }
    }; 
    return(
        <>
            <MdOutlineDelete className='text-danger' style={{ cursor: 'pointer' }} onClick={handleShow}/>
            
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton style={{ backgroundColor: 'red' }}>
                    <Modal.Title className='text-white'>Bạn có chác chắn không !</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p className='text-muted'> Bạn có chắc muốn xóa <b className='text-danger'>{LmsDelete.ten}</b>? Điều này hoàn toàn không thế hoàn tác</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Không
                    </Button>
                    <Button variant="danger" onClick={() => Checkdelete(LmsDelete.MaHS)}>Áp dụng</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default DeleteLms