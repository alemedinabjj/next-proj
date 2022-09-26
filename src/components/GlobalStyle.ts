import { createGlobalStyle } from 'styled-components'

interface IGlobalStyleProps {
  theme: {
    colors: {
      primary: string
      secondary: string
      tertiary: string
      quaternary: string
      quinary: string
      senary: string
      septenary: string
      octonary: string
      nonary: string
      denary: string
      undenary: string
      duodenary: string
      treddenary: string
      quattuordenary: string
      quindenary: string
    }
  }
}

const GlobalStyle = createGlobalStyle<IGlobalStyleProps>`
  html,
  body {
    color: ${({ theme }) => theme.colors.primary};
    padding: 0;
    margin: 0;
    font-family: "Poppins", sans-serif;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  * {
    box-sizing: border-box;
  }
`

export default GlobalStyle