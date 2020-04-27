import React from "react";
import styled from "styled-components/native";
import EvalBackground, { Bar, TopMenu } from "./my_components";


export default class Page extends React.Component {
  constructor(props: {}) {
    super(props);

    this.state = {};
  }

  public render() {
    return (
      <NavPage>
        <TopMenu title="Students" />
        <Bar title="SWAMP FOX" />
        <EvalBackground />
      </NavPage>
    );
  }
}

const NavPage = styled.SafeAreaView`
  flex: 1;
  background-color: #E0DFD7;
  align-items: center;
  justify-content: flex-start;
`;

