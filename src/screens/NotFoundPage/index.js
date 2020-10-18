import React from "react";
import NotFound from "../../assets/img/sadFood.png"
import { NotFoundContainer, NotFoundMessage, NotFoundImage } from "./styled";

const NotFoundPage = () => {
  return (
    <>
        <NotFoundContainer>
            <NotFoundMessage>404</NotFoundMessage>
            <NotFoundImage src={NotFound} />
        </NotFoundContainer>
    </>
  );
};

export default NotFoundPage;
