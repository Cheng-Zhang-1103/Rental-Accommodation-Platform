import styled from "styled-components";


export const FooterWrapper = styled.div`
  display: flex;
  margin-top: 10px;

  .info {
        display: flex;
        align-items: center;
        cursor: pointer;

        font-size: 17px;
        font-weight: 700;
        border-radius: 10px;
        color: ${props => props.color};
        transition-duration: 250ms;
    
    &:hover {
        border-radius: 10px;
        color: #fff;
        ${props => props.theme.mixin.boxShadow};
        background-color: ${props => props.theme.color.secondaryColor};
    }

    .text {
        margin-right: 6px;
    }
  }
`