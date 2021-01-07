import {
  Box,
  Input,
  Textarea,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Button,
  Stack,
  Flex,
} from '@chakra-ui/react';
import { EmailIcon } from '@chakra-ui/icons';

export interface ContactFormProps {}

const ContactForm: React.FC<ContactFormProps> = () => {
  return (
    <Stack as="form" spacing="10px">
      <FormControl id="email">
        <FormLabel>Email address</FormLabel>
        <Input type="email" />
        <FormHelperText>
          I will never share your email. It's just used for me to reply.
        </FormHelperText>
      </FormControl>

      <FormControl id="message">
        <FormLabel>Message</FormLabel>
        <Textarea />
      </FormControl>

      <Flex>
        <Button
          type="submit"
          ml={[0, 0, 'auto']}
          flexGrow={[1, 1, 0]}
          rightIcon={<EmailIcon />}
          colorScheme="teal"
          variant="solid"
        >
          Send
        </Button>
      </Flex>
    </Stack>
  );
};

export default ContactForm;
