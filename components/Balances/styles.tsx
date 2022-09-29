import styled from "styled-components";

// SECTION: Main

export const Table = styled.table`
  margin-left: 24px;
  margin-right: 24px;
`;

export const Row = styled.tr`
  height: 75px;
  & + & {
    border-top: 1px solid #e0e0f4;
  }
`;

export const Address = styled.span`
  display: block;
  font-size: 13px;
  letter-spacing: 0.05em;
  transform: translateY(3px);
`;

export const ValueCell = styled.td`
  text-align: right;
  transform: translateY(1px);
`;

export const Value = styled.span`
  font-size: 16px;
  letter-spacing: 0.05em;
  text-align: right;
  font-weight: bold;
`;

export const Symbol = styled.span`
  font-size: 12px;
  letter-spacing: 0.05em;
  text-align: right;
`;
