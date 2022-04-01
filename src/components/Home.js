import React from 'react';
import styled from 'styled-components';
import Section from './Section';
function Home() {
    return (
        <Container>
      <Section title="Model S" 
      img="model-s.jpg" 
      alt="Image of a Tesla Model S"
      description="Order Online For Touchless Delivery"
      leftbtntext="Custom Order"
      rightbtntext="Existing Inventory"
      />
    
    <Section title="Model Y" 
      img="model-y.jt pg" 
      alt="Image of a Tesla Model Y"
      description="Order Online For Touchless Delivery"
      leftbtntext="Custom Order"
      rightbtntext="Existing Inventory"
      />
      <Section title="Model X" 
      img="model-x.jpg" 
      alt="Image of a Tesla Model X"
      description="Order Online For Touchless Delivery"
      leftbtntext="Custom Order"
      rightbtntext="Existing Inventory"
      />
       <Section title="Model 3" 
      img="model-3.jpg" 
      alt="Image of a Tesla Model S"
      description="Order Online For Touchless Delivery"
      leftbtntext="Custom Order"
      rightbtntext="Existing Inventory"
      />
       <Section title="Lowest Cost Solar Panels" 
      img="solar-panel.jpg" 
      alt="Image of a Solar Panel"
      description="Money-back guarantee"
      leftbtntext="Order Now"
      rightbtntext="Learn More"
      />
       <Section title="Solar For New Roofs" 
      img="solar-roof.jpg" 
      alt="Image of a Solar Panel"
      description="Money-back guarantee"
      leftbtntext="Order Now"
      rightbtntext="Learn More"
      />

<Section title="Accessories" 
      img="accessories.jpg" 
      alt="Image of an Accessory"
      description=""
      leftbtntext="Shop Now"

      />
        </Container>

        
    )
};
export default Home;

const Container = styled.div`
    height: 100vh;

    `