import { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

export function Chatbot(){
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim() === '') return;

    setMessages([...messages, { text: newMessage, sender: 'user' }]);
    // Aquí puedes agregar la lógica para enviar el mensaje al servidor o procesarlo según tus necesidades.

    // Simulación de respuesta del chatbot
    setTimeout(() => {
      setMessages([...messages, { text: '¡Hola! Soy un chatbot.', sender: 'bot' }]);
    }, 500);
    
    setNewMessage('');
  };

  return (
    <>  
        <Header/>
        <Navbar/>
        <Container className='mt-5'>
        <Row className='d-flex justify-content-center'>
            <Col md={8}>
            <div style={{ height: '400px', overflowY: 'auto', border: '1px solid #ccc', marginBottom: '10px', padding: '1rem' }}>
                {messages.map((message, index) => (
                <div key={index} className={message.sender === 'user' ? 'text-right' : 'text-left'}>
                    <span
                    style={{
                        padding: '5px 10px',
                        borderRadius: '5px',
                        display: 'inline-block',
                        marginBottom: '1rem',
                        background: message.sender === 'user' ? 'brown' : '#eee',
                        color: message.sender === 'user' ? '#fff' : '#000',
                    }}
                    >
                    {message.text}
                    </span>
                </div>
                ))}
            </div>
            <Form>
                <Form.Group controlId="formMessage">
                    <Form.Control
                        type="text"
                        placeholder="Escribe un mensaje..."
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                    />
                </Form.Group>
                <Button className='mt-4' variant="success" onClick={handleSendMessage}>
                Enviar
                </Button>
            </Form>
            </Col>
        </Row>
        </Container>
        <Footer/>
    </>
  );
}

