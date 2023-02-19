import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../element/Button';
import { __addDiary, __editDiary } from '../redux/module/diarySlice';

export default function DiaryDetail() {
  const [titleAdd, setTitle] = useState('');
  const [contentAdd, setContent] = useState('');
  const { id } = useParams();
  const {
    state: { date, title, content },
  } = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    title && setTitle(title);
    content && setContent(content);
  }, []);

  const handleAddDiary = () => {
    dispatch(__addDiary({ date, title: titleAdd, content: contentAdd }));
    navigate(`/diary/${date}`);
  };

  const handleEditDiary = () => {
    dispatch(__editDiary({ id, title: titleAdd, content: contentAdd }));
    navigate(`/diary/${date}`);
  };

  return (
    <Container>
      <TextBox>
        <Input
          type='text'
          placeholder='Title'
          value={titleAdd}
          onChange={e => setTitle(e.target.value)}
        />
        <Textarea
          name=''
          id=''
          cols='30'
          placeholder='content'
          value={contentAdd}
          onChange={e => setContent(e.target.value)}
        />
      </TextBox>
      <BtnBox>
        {id === 'add' ? (
          <Button width='5rem' height='3rem' click={handleAddDiary}>
            추가
          </Button>
        ) : (
          <>
            <Button width='5rem' height='3rem' click={handleEditDiary}>
              수정
            </Button>
            <Button width='5rem' height='3rem'>
              나가기
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
