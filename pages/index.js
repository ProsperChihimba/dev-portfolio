import { Container } from '@chakra-ui/react';
import { About } from '../src/components/about';
export default function Home() {
  return (
    <Container maxW='container.lg' pt='16'>
      <About />
    </Container>
  );
}
