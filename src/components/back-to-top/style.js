import styled from "styled-components";

export const BackTopWrapper = styled.div`
    .back-top-button {
        opacity: 0;
        transition: opacity 0.3s ease;
    }

    .back-top-button.visible {
        opacity: 1;
    }

`