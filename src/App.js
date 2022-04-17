import { Stack, Text } from "@chakra-ui/react";
import { Route, Routes} from "react-router-dom";
import Layout from "./layout";
import Feed from "./pages/Feed";
import Messages from "./pages/Messages";

function App() {
  return (
  <Layout>
      <Routes>
          <Route path='/' element={<Feed/>} />
          <Route path='/messages' element={<Messages/>} />
      </Routes>
  </Layout>
  );
}

export default App;
