import styled from 'styled-components';
import { anim } from './app-style';

export const Form = styled.form`
display: flex;
flex-wrap: wrap;
flex-direction: row;
justify-content: space-between;
align-items: center;
animation: ${anim} 0.7s linear; 

  div.last {
    padding-bottom: 5vh;
    margin-bottom: 0;
    border-bottom: 0.3rem #eee dotted;
  }

  div.ol,
  div.last {
    flex-basis: 100%;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 1rem;
    margin: 1rem auto;

    .list {
      padding-top: 5vh;
      margin-top: 0;
    }

    label,
    h1 {
      font-size: 2rem;
      margin: 1rem 0;
      text-transform: uppercase;
    }

    h1 {
      margin: 4rem 0 1rem;
      font-weight: normal;
    }
    
    input,
    textarea,
    select {
      padding: 0.7rem;
      border: 0.1rem solid #eee;
      box-shadow: 0.2rem 0.2rem 0.1rem #ccc;
      width: 25rem; 
      color: #fff;
      background-color: rgba(100,100,100,0.5);
      font-family: 'Roboto Condensed', sans-serif;
      font-size: 2rem;
      text-align: left;
      outline: none;
    }
    
    li {
      padding: 0.2rem;
      margin: 1rem 0;
      font-size: 2rem;
    }
  }  
`;