import styled from 'styled-components';


export const FooterBase = styled.footer`
  background: var(--primary);
  border-top: 2px solid var(--primary);
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 10px;
  padding-bottom: 15px;
  color: var(black);
  text-align: center;      
  @media (max-width: 800px) {
    margin-bottom: 20px;
    
  }
  .logoFooter {
    max-width: 100px;  
  }   
  .Icone {
    max-width: 20px;        
    margin: 20px;
    margin-bottom: 0px; 
  }
  .copy {
    font-size: 10px;
  }   
`;