import styled, { keyframes } from 'styled-components'

const gr = '#ccc'
const wh = '#fff'
const sm = '2rem'
const med = '3rem'
const transf = '0.5s linear'
const transf2 = '.2s linear'

export const anim = keyframes`
  from { opacity: 0};
  to { opacity: 1};
`;

export const Wrap = styled.div`
  max-width: 1920px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
`;

export const LeftDiv = styled.div`
width: 25%;
height: 100vh;
border-right: 0.3rem solid #333;
z-index: 1;
background-image: linear-gradient(148deg, rgba(0, 0, 0, 1) 0%, rgba(50, 50, 50, 1) 50%, rgba(0, 0, 0, 1) 100%);
  
  ul {
    display: flex;
    flex-direction: column;
    padding-top: 15vh;
    list-style: none;
    
    li {
      align-self: center;
      padding: 5vh 0;
      
      a {
        position: relative;
        text-align: center;
        text-decoration: none;
        padding: 1rem;
        color: ${gr};
        font-size: 2.4rem;
        
        &::after {
          content: "";
          position: absolute;
          bottom: -0.5rem;
          height: 0.3rem;
          left:50%;
          width: 0;
          background-color: ${wh};
        }
        
        &:hover {
          color: ${wh};
          transition: ${transf2};
          &::after {
            left: 0;
            width: 100%;
            transition: ${transf2};
          }
        } 
      }
    }
  }
  
  @media (max-width: 830px) {
    position: fixed;
    top: 0;
    left: ${props => props.active ? '0' : '-100%'};
    width: 100%;
    height: 100vh;
    border-right: none;
    overflow: hidden;
    transition: ${transf};  
    
    ul li a {
      color: ${wh};
    }
  }
`;

export const RightDiv = styled.div`
  position: relative;
  width: 75%;
  height: 100vh;
  padding: 10vh 10% 5vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-blend-mode: darken;
  background-color: #444;
  color: #ddd;
  overflow: auto;
  background-image: url('/bgc.jpg');

  .hamb {
    display:none;
  }
  
  @media (max-width: 830px) {
    overflow: ${props => props.active ? 'hidden' : 'auto'};
    padding: 10vh 10% 5vh;
    width: 100%;

    .hamb {
      position: absolute;
      top: ${sm};
      left: ${sm};
      display: block;
      padding: 1rem;
      border: 0.2rem solid #ccc;
      border-radius: 50%;
      font-size: ${med};
      color: ${gr};
      transition: ${transf};
      z-index: 2;
    }

    .hamb.pull {
      transform: translate(10%, 8vh) scale(1.2);
      color: #fff;
      }
    }
  }
`;