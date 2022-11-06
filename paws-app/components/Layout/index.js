import Navbar from "./components/Navbar";
import { Container } from "@mantine/core";
export default function Layout ({children}) {
  return (
    <>
      <Navbar />
      <main>
        <Container my={20}>
          {children}
        </Container>
      </main>
    </>
  )
}