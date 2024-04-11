import { ThemeProvider as NextThemesProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"
const GlobalThemeProvider = ({children,...props}:ThemeProviderProps) => {
    return(
        <NextThemesProvider {...props}>            
                {children}
        </NextThemesProvider>
    )
}
export default GlobalThemeProvider