import { Box, Center, Container, Link, Stack, Text } from '@chakra-ui/react';
import { CustomButton } from './custom-button';
import { footerData } from './footer-links-data';

export function Footer() {
  return (
    <Box as='footer' py="8">
      <Container maxW='container.lg'>
        <Stack
          direction={{ base: 'column', lg: 'row' }}
          alignItems='center'
          justify='space-between'
          flex='1'
          spacing={{ base: '6', md: '12' }}
        >
          <Text>
            Made with ❤️ by{' '}
            <Link href='https://twitter.com/_estheragbaje' isExternal>
              Esther Agbaje
            </Link>{' '}
            © 2022
          </Text>

          <Center>
            {footerData.map((item, index) => {
              return (
                <CustomButton
                  fontWeight='normal'
                  key={index}
                  href={item.href}
                  variant='ghost'
                  icon={item.icon}
                  borderRadius='lg'
                  _hover={{ textDecoration: 'underline' }}
                >
                  {item.name}
                </CustomButton>
              );
            })}
          </Center>
        </Stack>
      </Container>
    </Box>
  );
}
