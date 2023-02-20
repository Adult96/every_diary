import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../element/Button';
import { addDiary, editDiary } from '../redux/module/diarySlice';
import Valid from '../utils/inputValidation';

export default function DiaryDetail() {
  const [titleAdd, setTitle] = useState('');
  const [contentAdd, setContent] = useState('');
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    state: { date, title, content },
  } = useLocation();

  useEffect(() => {
    title && setTitle(title);
    content && setContent(content);
  }, [content, title]);

  const handleAddDiary = () => {
    if (!Valid.title(titleAdd) && !Valid.title(contentAdd)) {
      return alert('제목과 내용을 모두 입력해 주세요');
    }

    addDiary({ date, title: titleAdd, content: contentAdd }, () => {
      navigate(-1);
    });
  };

  const handleEditDiary = () => {
    if (!Valid.title(titleAdd) && !Valid.title(contentAdd)) {
      return alert('제목과 내용을 모두 입력해 주세요');
    }

    editDiary({ id, title: titleAdd, content: contentAdd }, () => {
      navigate(-1);
    });
  };

  const handleBackDiary = () => {
    navigate(-1);
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
          <>
            <Button width='5rem' height='3rem' click={handleAddDiary}>
              추가
            </Button>
            <Button width='5rem' height='3rem' click={handleBackDiary}>
              나가기
            </Button>
          </>
        ) : (
          <>
            <Button width='5rem' height='3rem' click={handleEditDiary}>
              수정
            </Button>
            <Button width='5rem' height='3rem' click={handleBackDiary}>
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
  /* transition: all 300ms ease-in-out; */
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
  border: 1px solid ${props => props.theme.bg};
  outline: none;
  background-color: ${props => props.theme.bgInputColor};
  font-size: 2rem;
  margin-bottom: 0.5rem;
`;

const Textarea = styled.textarea`
  width: 100%;
  height: 100%;
  border: 1px solid ${props => props.theme.bg};
  outline: none;
  background-color: ${props => props.theme.bgInputColor};
  font-size: 1.5rem;
  resize: none;
`;

const BtnBox = styled.div`
  display: flex;
  justify-content: end;
  gap: 0.5rem;
`;
