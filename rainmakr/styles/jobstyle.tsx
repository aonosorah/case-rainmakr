import styled from 'styled-components';
interface style {
  currentPage?: boolean;
}

export const JobsBox = styled.div`
  gap: 8px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
export const Box = styled.div`
  height: 48px;
  background: #273539;
  display: flex;
  gap: 24px;
  align-items: center;
  padding-left: 16px;
  gap: 8px;
`;
export const Input = styled.input`
  margin-top: 16px;
  background: #273539;
  padding-left: 32px;
  border: 2px solid #42585f;
  border-radius: 4px;
  width: 358px;
  height: 44px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.5px;
  color: #cccccc;
`;
export const Text = styled.p<style>`
  font-family: 'Bebas Neue';
  border-bottom: 3px solid
    ${({ currentPage }) => (currentPage ? '#ffffff' : 'transparent')};
  border-top: 3px solid transparent;
  height: 100%;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  display: flex;
  align-items: center;
  color: ${({ currentPage }) => (currentPage ? '#ffffff' : '#999999')};
`;
export const FilterBox = styled.div`
  margin: 0 16px;
  position: relative;
  .glass {
    position: absolute;
    left: 8px;
    bottom: 14px;
  }
  .filter {
    position: absolute;
    right: 8px;
    bottom: 13px;
  }
`;
export const Fit = styled.p`
  font-style: normal;
  font-weight: 800;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;
  margin-bottom: 11px;
`;
export const DivFit = styled.div`
  border-bottom: 2px solid #182123;
  margin-left: 16px;
  margin-top: 16px;
  margin-bottom: 11px;
  width: 358px;
`;
