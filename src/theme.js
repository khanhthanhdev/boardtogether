import { createTheme } from "@mui/material";
import { Experimental_CssVarsProvider as CssVarsProvider } from "@mui/material/styles";
const theme = extendTheme({
    colorSchemes: {
        light: {
            palette: {
               primary:{
                main: '#ff5252'
               } 
            }
        },
        dark : {
            palette: {
                primary:{
                    main: '#000'
                }
            }
        }
    }
})

export default theme;