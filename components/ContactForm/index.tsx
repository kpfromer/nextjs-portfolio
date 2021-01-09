// import {
//   Box,
//   Input,
//   Textarea,
//   FormControl,
//   FormLabel,
//   FormErrorMessage,
//   FormHelperText,
//   Button,
//   Stack,
//   Flex,
// } from '@chakra-ui/react';
import Icon from '@components/Icon';
import { FiMail } from 'react-icons/fi';

export interface ContactFormProps {}

const ContactForm: React.FC<ContactFormProps> = () => {
  return (
    <form className="flex space-y-6">
      {/* <FormControl id="email">
        <FormLabel>Email address</FormLabel>
        <Input type="email" />
        <FormHelperText>
          I will never share your email. It's just used for me to reply.
        </FormHelperText>
      </FormControl>

      <FormControl id="message">
        <FormLabel>Message</FormLabel>
        <Textarea />
      </FormControl> */}

      <div className="flex">
        <button className="btn-primary flex-grow md:flex-grow-0 ml-0 md:ml-auto" type="submit">
          Send <Icon as={FiMail} />
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
