import FunctionContextComponent from "@/components/functionContext";
import ThemeProvider from "@/components/themeProvider";


export default function Page() {

    return (
        <ThemeProvider>
            <FunctionContextComponent />
        </ThemeProvider>
    );
}