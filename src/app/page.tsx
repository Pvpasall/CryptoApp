import Header from "./components/Header";
import Conversion from "./components/Conversion";
import { Connection } from "./components/Connection";
export default function Home() {
  return (
    <>
      <Header>
        <Connection />
      </Header>
      <Conversion />
    </>
  );
}
