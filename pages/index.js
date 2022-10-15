import { Container } from '@chakra-ui/react';
import { About } from '../src/components/about';
import { Footer } from '../src/components/footer';
import { Projects } from '../src/components/projects';
import { Tooling } from '../src/components/tooling';
export default function Home() {
  return (
    <Container maxW='container.lg' pt='16'>
      <About />
      <Projects />
      <Tooling />
      <Footer />
    </Container>
  );
}
