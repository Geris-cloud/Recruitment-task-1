import styled from 'styled-components';
import { anim } from './app-style';

export const Table = styled.div`
  overflow: auto;
  animation: ${anim} 0.7s linear; 

  table {
  width: 100%;
  margin: 1rem auto;
  font-size: 2rem;
  }

  tr.head {
    background-color: rgba(20, 20, 20, 0.5);
  }

  tbody.body {
    background-color: rgba(80,80,80,0.5);
  }

  th.width {
    min-width: 12rem;
  }

  th,
  td {
    padding: 1rem;
    border: 0.1rem solid #eee;
    text-align: center;

    input,
    select {
      padding: 0.7rem;
      border: 0.1rem solid #eee;
      box-shadow: 0.2rem 0.2rem 0.1rem #ccc;
      width:12rem; 
      color: #fff;
      background-color: rgba(100,100,100,0.5);
      font-family: 'Roboto Condensed', sans-serif;
      font-size: 2rem;
      outline: none;
    }
  }
  
  td.symbol {
    cursor: pointer;
    transition: .2s linear;

    i.symbol {
      color: #ddd;
      font-size: 1.5rem;
      transform: translateY(-0.18rem);
      box-shadow: none;
    }

    &:hover {
      background-color: rgba(230,230,230,0.5);
      
      i.symbol {
        color: #111;
      }
    }
  }

  .load {
    padding: 10vh;
    font-size: 4rem;
  }

  @media (max-width: 830px) {
    overflow: ${props => props.active ? 'hidden' : 'auto'};
    margin-top: 5vh;
  }
`;

export const Color = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 5vh;
font-size: 2rem;
animation: ${anim} 0.7s linear; 

  label {
    text-transform: uppercase;
  }
  
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    
    input {
      margin-top: 2vh;
      border: 0.1rem solid #eee;
      box-shadow: 0.2rem 0.2rem 0.1rem #ccc;
      width: 10%;
      height: 5vh;
      cursor: pointer;
    }
  }

@media (max-width: 830px) {
  div input {
    width: 20%;
  }
}
`;

export const Button = styled.div`
display: flex;
justify-content: center;
margin: 5vh auto 0;
animation: ${anim} 0.7s linear; 

  button {
    padding: 1rem;
    border: 0.1rem solid #eee;
    border-radius: 15%;
    box-shadow: 0.2rem 0.2rem 0.1rem #ccc;
    font-size: 2rem;
    cursor: pointer;
    color: #ddd;
    background-color: rgba(20, 20, 20, 0.5);
    transition: .2s linear;

    &:hover {
      color: #111;
      background-color: rgba(230,230,230,0.5);
    }
  }
`;

export const NavPanel = styled(Button)`
  display: ${prop => prop.active ? 'block' : 'none'};
  z-index: 999;
  margin: 0;
  animation: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  
  div.wrap {
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
    height: 80%;
    border:0.1rem solid #eee;
    box-shadow: 0.3rem 0.3rem 0.2rem #ccc;
    padding: 3rem;
    background-image: linear-gradient(148deg, rgba(0, 0, 0, 1) 0%, rgba(50, 50, 50, 1) 50%, rgba(0, 0, 0, 1) 100%);

    form {
      overflow: auto;
      min-height: 60%;
    }

    form,
    div.send {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      align-items: center;
    
      div {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 1rem 0;

        label {
          font-size: 2rem;
          margin: 1rem 0;
          text-transform: uppercase;
        }
    
        input {
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
      }
    
      button {
        border-radius: 0;
        margin-top: 3rem;
        min-width: 50%;
      }  
    }
    span {
    position: fixed;
    top: 2%;
    right: 2%;
    width: 7rem;
    height: 7rem;
    font-family: arial;
    font-size: 6rem;
    text-align: center;
    cursor: pointer; 
    }
  }

@media (max-width: 830px) {
  div.wrap {
    height: 90%;

    span {
      top: 1%;
      right: 1%;
      width: 4rem;
      height: 4rem;
      font-size: 3rem;
    }
  }
}
`;