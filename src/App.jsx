import { useState } from 'react';
import { Alert, Col, Container, Form, OverlayTrigger, Row, Tooltip } from 'react-bootstrap';
import './App.css';

function App() {
  const [topLeft, setTopLeft] = useState('0');
  const [topRight, setTopRight] = useState('0');
  const [bottomLeft, setBottomLeft] = useState('0');
  const [bottomRight, setBottomRight] = useState('0');

  const borderRadiusValue = `${topLeft}% ${topRight}% ${bottomRight}% ${bottomLeft}%`;

  return (
    <Container className="my-5">
      <h1 className="display-1 text-center my-5">Border Radius Preview</h1>
      <Row className="align-items-center">
        <Col md={6} className="d-flex justify-content-center">
          <div style={{ backgroundColor: 'cornflowerblue', width: '200px', height: '200px', borderRadius: borderRadiusValue }} aria-label='Box'></div>
        </Col>
        <Col md={6}>
          <Row className="my-3">
            <Col md={6}>
              <Form.Label>Top Left</Form.Label>
              <Form.Control type="number" aria-label='Top Left' value={topLeft} onChange={(e) => setTopLeft(e.target.value)} />
            </Col>
            <Col md={6}>
              <Form.Label>Top Right</Form.Label>
              <Form.Control type="number" aria-label='Top Right' value={topRight} onChange={(e) => setTopRight(e.target.value)} />
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Form.Label>Bottmo Left</Form.Label>
              <Form.Control type="number" aria-label='Bottom Left' value={bottomLeft} onChange={(e) => setBottomLeft(e.target.value)} />
            </Col>
            <Col md={6}>
              <Form.Label>Bottmo Right</Form.Label>
              <Form.Control type="number" aria-label='Bottom Right' value={bottomRight} onChange={(e) => setBottomRight(e.target.value)} />
            </Col>
          </Row>
          <OverlayTrigger
            placement='top'
            overlay={
              <Tooltip>
                Click to Copy
              </Tooltip>
            }
          >
            <Alert variant='info' className="mt-4 hover" onClick={() => navigator.clipboard.writeText(`border-radius: ${borderRadiusValue};`)}>
              <pre aria-label='Code'>
                {`border-radius: ${borderRadiusValue};`}
              </pre>
            </Alert>
          </OverlayTrigger>
        </Col>
      </Row>

    </Container>
  );
}

export default App;
