import "./App.css";
import { ModeToggle } from "./components/mode-toggle";
import { ThemeProvider } from "./components/theme-provider";
import { Card } from "./components/ui/card";

function App() {
  return (
    <>
      <Card className='h-auto w-auto flex rounded-none font-sans border-none'>
        <ThemeProvider>
          <ModeToggle />
        </ThemeProvider>
      </Card>
    </>
  );
}

export default App;
