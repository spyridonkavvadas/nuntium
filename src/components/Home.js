import React from 'react'
import { Container} from 'react-bootstrap';

function Home() {

  return (
    <Container>
      <h3>Welcome to the Minimal News App</h3>
      <div>This is a minimalistic newsreader app in plain text. No images, no ads. </div>
    
      <h3>How to use</h3>
      <div>Go to Select page and select news provider, country, language, and category. 
        
        Then press the "GET THE NEWS" button and enjoy the news.</div>

    </Container>
    
  )
}

export default Home