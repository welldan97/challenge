import styled from 'styled-components';

// SECTION: Main

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: ${({ isShrunk = false }: { isShrunk?: boolean }) =>
    isShrunk ? '406px' : '520px'};
  border: 1px solid rgba(105, 50, 212, 0.2);
  border-radius: 8px;
  box-shadow: 0px 8px 24px rgba(32, 37, 50, 0.15);
  height: 446px;
  background: #f5f5ff;
  overflow: hidden;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  height: 72px;
  padding-top: 4px;
  padding-left: 24px;

  color: #202532;
  background-color: white;
  border-bottom: 1px solid #e0e0f4;

  font-size: 20px;
`;

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  height: 72px;
  padding-left: 24px;
  padding-right: 24px;

  ${({ isSeamless = false }: { isSeamless?: boolean }) =>
    isSeamless
      ? 'justify-content: end;'
      : `
          justify-content: space-between;
          background-color: white;
          border-top: 1px solid #e0e0f4;
        `}
`;

export const Button = styled.button`
  background: #6932d4;
  border-radius: 100px;
  color: white;
  border: none;
  height: 40px;
  width: 88px;
`;
