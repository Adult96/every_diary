import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../element/Button';

export default function DiaryDetail() {
  const { id } = useParams();

  return (
    <Container>
      <TextBox>
        <Input type='text' placeholder='Title' />
        <Textarea name='' id='' cols='30' placeholder='comment' />
      </TextBox>
      <BtnBox>
        {id === 'add' ? (
          <Button width='5rem' height='3rem'>
            추가
          </Button>
        ) : (
          <>
            <Button width='5rem' height='3rem'>
              수정
            </Button>
            <Button width='5rem' height='3rem'>
              삭제
            </Button>
          </>
        )}
      </BtnBox>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 65vh;
  padding: 1rem;
  border: 1px solid ${props => props.theme.borderColor};
  border-radius: 0 0 1rem 1rem;
  transition: all 300ms ease-in-out;
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const Input = styled.input`
  width: 100%;
  height: 3rem;
  font-size: 2rem;
  margin-bottom: 0.5rem;
`;

const Textarea = styled.textarea`
  width: 100%;
  height: 100%;
  font-size: 1.5rem;
  resize: none;
`;

const BtnBox = styled.div`
  display: flex;
  justify-content: end;
  gap: 0.5rem;
`;
