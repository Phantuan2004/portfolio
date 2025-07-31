import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const GridBg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.1;
  background-image: 
    linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
  background-size: 50px 50px;
  pointer-events: none;
`;

const Container = styled.div`
  max-width: 600px;
  padding: 3rem 2rem;
  background: rgba(44, 62, 80, 0.9);
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
  animation: fadeIn 0.8s ease-out;

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
  }

  @media (max-width: 768px) {
    margin: 1rem;
    padding: 2rem 1.5rem;
  }
`;

const ErrorCode = styled.div`
  font-size: 6rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #e74c3c;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    font-size: 4rem;
  }
`;

const ErrorIcon = styled.div`
  width: 120px;
  height: 120px;
  margin: 2rem auto;
  opacity: 0.8;
  svg { width: 100%; height: 100%; }
`;

const Title = styled.h1`
  font-size: 2.2rem;
  margin-bottom: 1rem;
  font-weight: 600;
  color: #ecf0f1;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const Description = styled.p`
  font-size: 1.1rem;
  margin-bottom: 2.5rem;
  opacity: 0.8;
  line-height: 1.6;
  color: #bdc3c7;
`;

const BtnContainer = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Button = styled(({ ...props }) => (props.to ? <Link {...props} /> : <a {...props} />))`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 12px 24px;
  text-decoration: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(52, 152, 219, 0.3);

  ${({ type }) =>
    type === 'home'
      ? `
        background: linear-gradient(45deg, #3498db, #2980b9);
        color: white;

        &:hover {
          background: linear-gradient(45deg, #2980b9, #3498db);
          box-shadow: 0 6px 20px rgba(52, 152, 219, 0.4);
          transform: translateY(-2px);
        }
      `
      : `
        background: transparent;
        color: #bdc3c7;
        border: 2px solid #bdc3c7;

        &:hover {
          background: #bdc3c7;
          color: #2c3e50;
          transform: translateY(-2px);
        }
      `}

  @media (max-width: 768px) {
    width: 200px;
    justify-content: center;
  }
`;

function NotFound() {
  return (
    <div style={{ 
      position: 'relative', 
      minHeight: '100vh', 
      background: 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)', 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'center', 
      alignItems: 'center', 
      color: '#ecf0f1', 
      textAlign: 'center', 
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif'" 
    }}>
      <GridBg />
      <Container>
        <ErrorCode>404</ErrorCode>
        <ErrorIcon>
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="none" stroke="#e74c3c" strokeWidth="1.5"/>
            <circle cx="12" cy="12" r="10" fill="none" stroke="#e74c3c" strokeWidth="1.5"/>
            <path d="M8 8l8 8M16 8l-8 8" stroke="#e74c3c" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </ErrorIcon>
        <Title>Trang không tìm thấy</Title>
        <Description>Xin lỗi, trang bạn đang tìm kiếm không tồn tại hoặc đã được di chuyển.<br />Vui lòng kiểm tra lại URL hoặc quay về trang chủ.</Description>
        <BtnContainer>
          <Button to="/#about" type="home">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
            </svg>
            Trang chủ
          </Button>
        </BtnContainer>
      </Container>
    </div>
  );
}

export default NotFound;