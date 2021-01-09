import Icon from '@components/Icon';
import { FiMail } from 'react-icons/fi';
import { useState } from 'react';
import classnames from 'classnames';
import { useForm } from 'react-hook-form';

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

      <div className="flex flex-col space-y-3">
        <label htmlFor="email" className="font-bold">
          Email address*
        </label>
        <input
          id="email"
          type="email"
          name="email"
          className="p-2 border border-gray-500 border-opacity-20 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent shadow"
          disabled={status === 'good'}
          required
          ref={register}
        />
        <span className="block text-gray-600">
          I will never share your email. It's just used for me to reply.
        </span>
      </div>

      <div className="flex flex-col space-y-3">
        <label htmlFor="message" className="font-bold">
          Message*
        </label>
        <textarea
          id="message"
          name="message"
          className="p-2 border border-gray-500 border-opacity-20 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent shadow"
          disabled={status === 'good'}
          required
          ref={register}
        />
      </div>

      <input type="text" name="_gotcha" style={{ display: 'none' }} />

      <button
        className={classnames(
          status === 'pending' || status === 'error'
            ? 'btn-primary'
            : 'btn-disabled cursor-default',
          'transition-colors flex-grow md:flex-grow-0 ml-0 md:ml-auto',
        )}
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
      </button>
    </form>
  );
};

export default ContactForm;
