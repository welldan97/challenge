import styled from 'styled-components';

import Image from '../lib/Image';

// SECTION: Main

export const Success = styled(Image)`
  margin: 27px auto 11px;
  width: 100px;
`;

export const Wrapper = styled.div`
  padding-left: 24px;
  padding-right: 24px;
`;

export const Label = styled.div`
  font-size: 16px;
`;

export const Amount = styled.div`
  font-size: 28px;
  transform: translateY(-2px);
`;

export const Hr = styled.hr`
  border-top: 1px solid #202532;
  opacity: 1;
  margin-top: 12px;
  margin-bottom: 18px;
  width: 142px;
`;

export const Address = styled.div`
  transform: translateY(1px);
  margin-bottom: 14px;
`;

export const Form = styled.form`
  margin-top: 29px;
  margin-bottom: 7px;
`;
