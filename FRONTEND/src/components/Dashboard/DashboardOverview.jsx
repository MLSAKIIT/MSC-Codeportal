import React from "react";
import styled from "styled-components";
import CardBackgroundImage from "../About/Images/Learn.svg";

const DashboardOverview = ({ d }) => {
  return (
    <OverviewContainer key={d.id}>
        <ContentContainer>
          <Content>{d.content}</Content>
        </ContentContainer>
        <TitleContainer>
          <Title>
            <i style={{textAlign: 'center'}}>{d.title}</i>
          </Title>
        </TitleContainer>
    </OverviewContainer>
  );
};

export default DashboardOverview;

const OverviewContainer = styled.div`
  min-width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  background: url(${CardBackgroundImage}) center top;
  background-size: auto;
  background-repeat: no-repeat;
  border-radius: 28px;
  padding-bottom: 7rem;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.2;
  margin-bottom: 1.8rem;
`;

const Title = styled.div`
  display: flex;
  color: #000;
  font-size: 38px;
  font-weight: 700;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.2;
  margin-bottom: 1.8rem;
  margin: 20px;
`;

const Content = styled.div`
  margin: 0 10px;
  color: #1a1a1a;
  font-size: 18px;
  font-weight: 300;
`;
