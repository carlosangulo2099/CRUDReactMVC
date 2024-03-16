import { useEffect } from 'react';
import { useState } from 'react';
import { Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, ModalFooter, Button } from 'reactstrap'

const modeloContacto = {
    idContacto: 0,
    nombre: '',
    correo: '',
    telefono: ''
}

function ModalContacto({ mostrarModal, setMostrarModal, guardarContacto, editar, setEditar, editarContacto }) {

    const [contacto, setContacto] = useState(modeloContacto)

    function enviarDatos() {
        if (contacto.idContacto === 0) {
            guardarContacto(contacto);
        }
        else {
            editarContacto(contacto)
        }
        setContacto(modeloContacto)
    }

    function actualizaDatos(e) {
        setContacto({
            ...contacto,
            [e.target.name]: e.target.value
        });
    }

    useEffect(() => {
        if (editar != null) {
            setContacto(editar)
        }
        else {
            setContacto(modeloContacto)
        }
    }, [editar])

    function cerrarModal() {
        setMostrarModal(!mostrarModal)
        setEditar(null) 
    }

    return (
        <Modal isOpen={mostrarModal}>
            <ModalHeader>
                {contacto.idContacto == 0 ? "Nuevo Contacto" : "Editar Contacto"}
            </ModalHeader>
            <ModalBody>
                <Form>
                    <FormGroup>
                        <Label>Nombre</Label>
                        <Input name="nombre" onChange={(e) => actualizaDatos(e)} value={contacto.nombre} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Correo</Label>
                        <Input name="correo" onChange={(e) => actualizaDatos(e)} value={contacto.correo} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Telefono</Label>
                        <Input name="telefono" onChange={(e) => actualizaDatos(e)} value={contacto.telefono} />
                    </FormGroup>
                </Form>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" size="sm" onClick={() => enviarDatos()}>Guardar</Button>
                <Button color="danger" size="sm" onClick={cerrarModal}>Cerrar</Button>
            </ModalFooter>
        </Modal>
    );
}

export default ModalContacto