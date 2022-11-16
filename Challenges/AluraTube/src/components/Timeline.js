import styled from "styled-components";

export const StyledTimeline = styled.div`
  flex: 1;
  width: 100%;
  padding: 16px;
  //overflow: hidden;
  h2 {
    font-size: 16px;
    margin-bottom: 16px;
    text-transform: capitalize;
  }
  h4{
    text-align: center;
    font-size: 1rem;
    font-weight: 400;
  }
  h4 span{
    color: red;
    font-weight: 600;
  }
  img {
    aspect-ratio: 16/9;
    font-weight: 500;
    object-fit: cover;
    width: 100%;
    max-width: 210px;
    height: auto;
  }
  section {
    width: 100%;
    margin: 2rem;
    margin-bottom: 0;
    overflow: hidden;

    h2{
      font-size: 2rem;
    }

    div {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      
      width: calc(100vw - 16px * 4);
      a {
        width: 15rem;
        img{
          object-fit: cover;
        }

        span {
          padding-top: 8px;
          display: block;
          padding-right: 24px;
          color: ${({ theme }) => theme.textColorBase || "#222222"};
        }
      }
    }
  }
`;

export const StyledCanais = styled.div`
  flex: 1;
  padding: 1rem;
  width: 100%;

  h2{
    text-transform: capitalize;
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }

  section{
    margin: 2rem;
    div{
      display: flex;
      flex-wrap: wrap;
      gap:1.5rem;
    a{
      display: flex;
      flex-direction: column;
      img{
        width: 6.25rem;
        margin-bottom: .5rem;
        border-radius: 50%;
      }
      span{
        width: 6.25rem;
        text-align: center;
        font-size: 1rem;
        font-weight: 400;
        color: #000;
      }
    }
  }
}
`;