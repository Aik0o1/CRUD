import React, {useState, useEffect} from "react";
import {Button, Modal, Form, Table} from "react-bootstrap"
import axios from "axios"
import "./Users.css"

import Header from "../template/Header";

export default props => {
    
    const baseUrl = "http://localhost:3003/fas"
    const [allUsers, setUsers] = useState([])
    const [fa, setFa] = useState({
        id: '',
        nome: '',
        email: ''
    })

    // funciona como o componentDidMount
    useEffect(() => buscarFas, []) // array de dependências vazio indica que o efeito só é executado uma vez, após a montagem do componente
    
    //atualiza o state de allUsers que será manipulado para gerar a tabela
    function buscarFas() {
        axios(baseUrl)
            .then(dados => setUsers(dados.data))
        setFa({id: '', nome : '', email: ''})
    }
    
    function cadastrar(novoFa) {
      //verificando se é atualização ou novo cadastro  
        if(fa.id){  
            axios['put'](`${baseUrl}/${fa.id}`, fa) 
            .then(resp => buscarFas())}
        else{
            axios['post'](baseUrl, novoFa)
            .then(resp => buscarFas())}
    } 

    function deletar(id) {
        axios['delete'](`${baseUrl}/${id}`)
            .then(resp => buscarFas())
    }

    //irá carregar os dados do usuario no modal no momento da atualização de cadastro
    function carregarDados(id) {
        axios(`${baseUrl}/${id}`)
            .then(resp => setFa(resp.data))
    }

    const getNome = e => setFa({...fa, nome: e.target.value})
    const getEmail = e => setFa({...fa, email: e.target.value}) 

    const salvarDados = (e) => { 
        e.preventDefault()
        fa.nome && fa.email ? cadastrar(fa) : window.alert('Preencha os dados!')
        
    }

    //formulario
    const [show, setShow] = useState(false)
    const handleShow = () => setShow(true)
    const handleClose = () => setShow(false)

    return <React.Fragment>
        <Header icon="users" title=" Usuários"/>
        <div className="content"> 

            <Button  variant="primary" onClick={e => {handleShow(); setFa('')}} className="novo-cadastro">
                Novo cadastro
            </Button>

            <Table striped bordered hover className="box-table" responsive size="sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Opções</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allUsers.map(usuario => 
                    <tr>
                        <td>{usuario.id}</td>
                        <td>{usuario.nome}</td>
                        <td>{usuario.email}</td>
                        <td className="table-buttons">
                            <Button variant="info" size="sm" onClick={e => {carregarDados(usuario.id); handleShow()}} >
                                Atualizar
                            </Button>
                            <Button onClick={e => deletar(usuario.id)} variant="danger" size="sm">
                                Deletar
                            </Button>
                        </td>
                    </tr>)
                    }
                </tbody>
            </Table>

            <Modal show={show} onHide={handleClose} className="modal">
                <Modal.Header closeButton>
                    <Modal.Title>Novo Cadastro</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <Form>
                        <Form.Group className="mb-3" >
                            <Form.Label>ID</Form.Label>
                            <Form.Control type="text" readOnly={true} value={fa.id}/>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Nome</Form.Label>
                            <Form.Control value={fa.nome} type="text" placeholder="Digite seu nome" onChange={e => getNome(e)}/>
                        </Form.Group>


                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control value={fa.email} type="email" placeholder="Digite seu email" onChange={e => getEmail(e)}/>
                        </Form.Group>

                        <Button variant="primary" type="submit" onClick={e => salvarDados(e)}>
                            Salvar
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>


    </React.Fragment>
}
    

       
 