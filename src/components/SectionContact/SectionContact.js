import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { InView } from 'react-intersection-observer';
import { FiSend } from 'react-icons/fi';
import { Container, FormSection, Input, InputGroup, InputLabel, Textarea } from '../common';
import {
  MessageSubmitConfirmation,
  SectionTitleContact,
  SendButton,
  StyledFiCheckCircle,
  StyledFiLoader,
} from './subcomponents';
import { GlobalContext } from '../../pages/index';
import theme from '../../config/theme';


const StyledWrapper = styled.section`
  position: relative;
  min-height: 100vh;
  padding: ${theme.rhythm(4)} 0;
  overflow: hidden;
  background: #eef0f0;
  background: linear-gradient(135deg, #fff 0%, #f5f5f5 20%, #eef0f0);
  z-index: 0;
  opacity: 1;
  transition: 0.5s;
  @media(max-width: ${theme.breakpoints.s}){
    padding: ${theme.rhythm(3)} 0;
  }
`;

const SectionContact = ({ id }) => {

  const { setCurrentSection } = useContext(GlobalContext);
  const handleIntersection = inView => inView && setCurrentSection('contact');

  const [nameInputValue, setNameInputValue] = useState('');
  const [emailInputValue, setEmailInputValue] = useState('');
  const [messageInputValue, setMessageInputValue] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [hasSuccess, setHasSuccess] = useState(false);
  const [hasError, setHasError] = useState(false);

  const resetForm = e => {
    e.preventDefault();
    setHasSuccess(false);
    setHasError(false);
  };

  const sendContactMessage = e => {
    e.preventDefault();
    setIsSending(true);
    fetch('https://api.slowikjakub.eu/sendContactMessage', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: nameInputValue,
        email: emailInputValue,
        message: messageInputValue,
      }),
    }).then(res => {
      res.status === 200 && setHasSuccess(true);
    }).catch(err => {
      setHasError(true);
      console.log(err);
    }).finally(() => {
      setIsSending(false);
      if (hasSuccess) {
        setNameInputValue('');
        setEmailInputValue('');
        setMessageInputValue('');
      }
    });
  };

  return (
    <InView onChange={handleIntersection} threshold={0.6}>
      <StyledWrapper id={id}>
        <Container>
          <SectionTitleContact>Contact</SectionTitleContact>
          <h3>Let's talk about your project.</h3>
          <p style={{ maxWidth: '65ch', marginBottom: `${theme.rhythm(3)}` }}>
            I can design and implement a fast and aesthetic website for you or your business.<br/>
            If you need some design help, branding, logo or any other graphics related thing, also feel free to get in
            touch.
          </p>
          <form name="contact" onSubmit={e => sendContactMessage(e)}>
            <FormSection>
              <InputGroup>
                <InputLabel htmlFor="nameInput">Name</InputLabel>
                <Input
                  type="text"
                  autoComplete="new-password"
                  id="nameInput"
                  value={nameInputValue}
                  onChange={e => setNameInputValue(e.target.value)}
                  required={true}
                />
              </InputGroup>
              <InputGroup>
                <InputLabel htmlFor="emailInput">E-mail</InputLabel>
                <Input
                  type="email"
                  autoComplete="new-password"
                  id="emailInput"
                  value={emailInputValue}
                  onChange={e => setEmailInputValue(e.target.value)}
                  required={true}
                />
              </InputGroup>
            </FormSection>
            <FormSection>
              <InputGroup>
                <InputLabel htmlFor="messageInput">Message</InputLabel>
                <Textarea
                  rows={10}
                  autoComplete="new-password"
                  id="messageInput"
                  value={messageInputValue}
                  onChange={e => setMessageInputValue(e.target.value)}
                  required={true}
                />
              </InputGroup>
              <SendButton
                onClick={e => (hasSuccess || hasError) && resetForm(e)}
                type="submit">
                {hasSuccess ? 'Sent ' : (isSending ? 'Sending ' : 'Send ')}
                {hasSuccess ? <StyledFiCheckCircle/> : (isSending ? <StyledFiLoader/> : <FiSend/>)}
              </SendButton>
            </FormSection>
            {hasSuccess &&
            <MessageSubmitConfirmation>
              Your message has been sent. I will respond as soon as I can.
            </MessageSubmitConfirmation>}
            {hasError &&
            <MessageSubmitConfirmation>
              Some problem occurred while sending the message. <br/>Please try again or contact me via
              e-mail: <strong>contact@slowikjakub.eu</strong>.
            </MessageSubmitConfirmation>}
          </form>
        </Container>
      </StyledWrapper>
    </InView>
  );
};

export default SectionContact;