import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import logo from './logo.svg';

function ContentPanel(){
    return(
      <Card border="primary" style={{ width: '18rem' }}>
        <Card.Img src={logo}/>
          <Card.Body>
            <h1>Hello la team</h1>
          </Card.Body>
      </Card>
    )
  }

export default ContentPanel;
