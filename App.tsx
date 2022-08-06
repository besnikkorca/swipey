import Navigation from "./navigation";
import StylingProvider from "./components/StylingProvider";

export default function App() {
  return (
    <StylingProvider>
      <Navigation />
    </StylingProvider>
  );
}
