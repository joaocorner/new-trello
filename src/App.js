import { ThemeProvider } from "styled-components";
import GlobalStyles from "./components/styles/Global";

import RoutesApp from "./routes";

const theme = {
  colors: {
    header: "#8d789e",
    body: "#4e2d69",
  },
  mobile: "768px",
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <RoutesApp />
    </ThemeProvider>
  );
}

export default App;
