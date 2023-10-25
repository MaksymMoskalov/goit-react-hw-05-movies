import styled from 'styled-components';

export const StyledContainer = styled.div`
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;

  .header {
    height: 60px;
    display: flex;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-radius: 10px;
    margin-bottom: 25px;
  }

  .header-link {
    padding: 20px;
    text-decoration: none;
    font-weight: 500;
    color: black;
    &:hover {
      color: red;
    }
    &.active {
      color: red;
    }
  }
  .movie-title {
    text-decoration: none;
    font-size: 18px;
    color: black;
    &:hover {
      color: red;
    }
  }
  .back-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    text-align: center;
    text-decoration: none;
    color: black;
    width: 100px;
    height: 40px;
    border: 1px solid black;
    border-radius: 10px;
    &:hover {
      color: red;
      border: 1px solid red;
    }
  }
  .movie-info-cover {
    display: flex;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-radius: 10px;
    margin-bottom: 25px;
  }
  .poster-image {
    margin-right: 20px;
    border-radius: 10px;
  }

  .details-link {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    text-align: center;
    text-decoration: none;
    color: black;
    width: 80px;
    height: 40px;
    border: 1px solid black;
    border-radius: 10px;

    &.active {
      color: red;
      border: 1px solid red;
    }
    &:hover {
      color: red;
      border: 1px solid red;
    }
  }

  .bold {
    font-weight: 700;
  }
`;
