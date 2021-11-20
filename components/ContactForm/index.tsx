import Button from '@components/Button';
import { FiMail } from 'react-icons/fi';
import Icon from '@components/Icon';
import tw from 'tailwind-styled-components';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

const Input = tw.input`
  p-2
  border
  dark:bg-gray-800
  border-gray-500
  border-opacity-20
  rounded-md
  focus:outline-none
  focus:ring-2
  focus:ring-primary-500
  focus:border-transparent
  shadow
`;

const TextArea = tw.textarea`
  p-2
  border
  dark:bg-gray-800
  border-gray-500
  border-opacity-20
  rounded-md
  focus:outline-none
  focus:ring-2
  focus:ring-primary-500
  focus:border-transparent
  shadow
`;

const InputContainer = tw.div`
  flex
  flex-col
  space-y-3
`;

type FormData = {
  email: string;
  message: string;
};

export interface ContactFormProps {}

const ContactForm: React.FC<ContactFormProps> = () => {
  const [status, setStatus] = useState<'pending' | 'good' | 'error'>('pending');

  const { register, handleSubmit } = useForm<FormData>();
  const onSubmit = handleSubmit(({ email, message }) => {
    fetch('https://formspree.io/mdokobow', {
      method: 'post',
      body: JSON.stringify({ email, message }),
      headers: { Accept: 'application/json' },
    })
      .then((res) => {
        setStatus(res.ok ? 'good' : 'error');
      })
      .catch(() => {
        setStatus('error');
      });
  });

  return (
    <form className="w-full flex flex-col space-y-2" onSubmit={onSubmit}>
      {status === 'error' && (
        <div className="bg-red-500 rounded border border-red-700 shadow p-2 text-white">
          Something went wrong!
        </div>
      )}

      <InputContainer>
        <label htmlFor="email" className="font-bold">
          Email address*
        </label>
        <Input
          id="email"
          type="email"
          name="email"
          disabled={status === 'good'}
          required
          ref={register}
        />
        <span className="block text-gray-600 dark:text-gray-200">
          I will never share your email. It's just used for me to reply.
        </span>
      </InputContainer>

      <InputContainer>
        <label htmlFor="message" className="font-bold">
          Message*
        </label>
        <TextArea
          id="message"
          name="message"
          disabled={status === 'good'}
          required
          ref={register}
        />
      </InputContainer>

      <input type="text" name="_gotcha" style={{ display: 'none' }} />

      <Button
        $disabled={!(status === 'pending' || status === 'error')}
        disabled={status === 'good'}
        type="submit"
      >
        {status !== 'good' ? (
          <>
            Send <Icon as={FiMail} />
          </>
        ) : (
          'Sent!'
        )}
      </Button>
    </form>
  );
};

export default ContactForm;
