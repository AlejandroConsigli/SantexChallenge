import styled from 'styled-components';

const color = {
  light: '#88A285',
  medium: '#556952',
  dark: '#2F3B2E',
};

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const Container = styled.div<{
  background: 'light' | 'medium' | 'dark';
}>`
  background: ${(props) => color[props.background]};
  padding: 20px;
`;

export const Center = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
}
`;

export const Title = styled.h1`
  color: ${color.light};
  font-size: 3em;
  margin: 0;
  padding: 20px;
`;

export const Subtitle = styled.h2`
  color: ${color.light};
  font-size: 2em;
  font-weight: 500;
  margin: 0;
  padding: 10px;
`;

export const Button = styled.button`
  background: ${color.dark};
  color: ${color.light};
  font-size: 1em;
  padding: 5px 10px;
  border: 2px solid ${color.light};
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.5s ease;
  &:hover {
    background: ${color.light};
    color: ${color.dark};
  }
`;

export const Alert = styled.h3`
  color: ${color.medium};
  font-size: 2em;
  font-weight: 500;
  margin: 0;
  padding: 10px;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-auto-rows: auto;
  grid-gap: 1rem;
  @media (max-width: 1280px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 780px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Card = styled.div`
  background: ${color.medium};
  border-radius: 10px;
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const Box = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const Text = styled.p<{ size?: string }>`
  font-size: ${(props) => props.size || '1em'};
  margin: 0;
  padding: 0;
`;

export const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
`;

export const Foot = styled.div`
  width: 100%;
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: end;
  margin-top: 10px;
`;
