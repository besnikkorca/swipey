import Navigation from "./navigation";
import StylingProvider from "./components/StylingProvider";
import UserProvider from "./components/contexts/UserContext/UserProvider";

export default function App() {
  return (
    <UserProvider>
      <StylingProvider>
        <Navigation />
      </StylingProvider>
    </UserProvider>
  );
}
