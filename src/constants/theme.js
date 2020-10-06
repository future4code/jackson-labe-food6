import { createMuiTheme } from '@material-ui/core/styles'
import {  primaryColor, neutralColor,secondaryColor} from './colors'

const theme = createMuiTheme({
    palette: {
      primary: {
        main: primaryColor,
        contrastText: 'black'
      },
      secondary: {
        main: secondaryColor,
        contrastText: 'black'
      },
      text: {
        primary: neutralColor
       
      }
    }
  })
  
  export default theme
  