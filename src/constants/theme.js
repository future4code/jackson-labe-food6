import { createMuiTheme } from '@material-ui/core/styles'
import {  ContainerBackgroundColor, PrimaryColor, SecondaryColor} from './colors'

const theme = createMuiTheme({
    palette: {
      primary: {
        main: SecondaryColor,
        contrastText: 'black'
      },
      secondary: {
        main: PrimaryColor,
        contrastText: 'black'
      },
      text: {
        primary: ContainerBackgroundColor,
       
      }
    }
  })
  
  export default theme
  