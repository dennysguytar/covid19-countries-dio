import { createGlobalStyle } from 'styled-components'
import CovidImg from '../../assets/images/covid.jpg'

const globalStyle = createGlobalStyle`
  * {
    outline: none;
    box-sizing: border-box;
  }

  body {
    line-height: normal;
  }

  html, body {
    width: 100%;
    min-height: 100%;
    display: flex;
    padding: 0;
    margin: 0;
  }

  #root {
    background: url(${CovidImg});
    height: 100%;
    width: 100%;
    background-size: cover;
    background-position: center center;
  }

  .mb-2 {
    margin-bottom: 16px;
  }

  .pt-2 {
    padding-top: 16px;
  }
  
  .cursor {
    cursor: pointer;
  }

  #painel
  {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  #titulo1 span
  {
    font-size: 2.125rem;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-weight: 700;
    line-height: 1.235;
    letter-spacing: 0.00735em;
  }

  #titulo2
  {
    margin-top: 8px;
  }

  #titulo3
  {
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-top: 20px;
  }

  .MuiGrid-grid-md-3 
  {
    min-width: 33% !important;
    
  }

  .MuiGrid-container
  {
    justify-content: center;
  }

`

export default globalStyle