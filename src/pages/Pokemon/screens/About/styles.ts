import styled from 'styled-components';
import media from 'styled-media-query';

export const SectionAbout = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  flex: 1;
  width: 100%;

  h3,
  p {
    font-size: 28px;
    line-height: 31px;
  }

  ${media.lessThan('huge')`
    h3,
    p {
      font-size: 20px;
      line-height: 23px;
    }
  `};

  p {
    color: ${({ theme }) => theme.colors.text.gray};
  }

  h3 {
    color: ${({ theme }) => theme.colors.text.gray};
    
  }
`;

export const SectionAboutContent = styled.div`
  flex: 1;
  display: flex;
  width: 100%;
 
  justify-content: space-evenly;
  margin-top: 30px;
 

  div {
    display: flex; 
    flex-direction: column;
    align-items: stretch;
    

    ul {
      display: flex;
      flex-direction: column;
      align-items: stretch;
      list-style: none;

      li {       
        align-items: center;
        justify-content: flex-start;
        margin-top: 15px;
      

        strong {
          font-weight: 500;
          font-size: 22px;
          line-height: 24px;
          margin-right: 15px;
          color: ${({ theme }) => theme.colors.text.black};

          width: 180px;
        }

        span {
          font-size: 24px;
          line-height: 21px;
          color: ${({ theme }) => theme.colors.text.gray};
        }
      }
    }
  }

  ${media.lessThan('huge')`
    div ul li {
      margin-top: 8px;
      strong {
        font-size: 18px;
        line-height: 20px;
      }

      span {
        font-size: 20px;
      }
    }
  `};
`;
