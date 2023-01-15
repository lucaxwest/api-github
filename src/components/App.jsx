import './App.css'
import { useState, useEffect } from 'react'
import { Form, InputGroup, Button, Card, Row, Col } from 'react-bootstrap'
import Api from '../services/Api'
import CardUsuario from './CardUsuario'
import CardRepo from './CardRepo'

function App() {
  const [repos, setRepos] = useState([])
  const [usuarioPesquisa, setUsuarioPesquisa] = useState('')
  const [usuario, setUsuario] = useState('')

  function pesquisar() {
    Api.get(`/users/${usuarioPesquisa}/repos`).then((response) => {
      setRepos(response.data)
    })
  }

  useEffect(() => {
    Api.get(`/users/${usuarioPesquisa}`).then((response) => {
      setUsuario(response.data)
    })
  }, [repos])

  return (
    <div className='container'>
      <h1>Explore repositórios no github</h1>
      <div className="form mb-4">

        <InputGroup>
          <Form.Control
            placeholder="Digite o nome do usuário"
            value={usuarioPesquisa}
            onChange={(e) => {
              setUsuarioPesquisa(e.target.value)
            }}
          />
        </InputGroup>

        <Button className="button" onClick={pesquisar} variant="primary">
          Pesquisar
        </Button>

      </div>

      {usuario && (
      <CardUsuario usuario={usuario} />
      )}

      <Row className="justify-content-md-center">
        {repos.map((repo) => {
          return (
            <Col md="auto">
              <CardRepo repo={repo}/>
            </Col>
          )
        })}
      </Row>
    </div>
  )
}

export default App
