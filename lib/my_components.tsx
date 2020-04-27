import React from "react";
import styled from "styled-components/native";
import { nanoid } from "nanoid/non-secure";
import { View, Text } from "react-native";

export function TopMenu(props: { title?: String }) {
  return <TopMenu_Title>{props.title}</TopMenu_Title>;
}

const TopMenu_Title = styled.Text`
  font-size: 50px;
  font-weight: bold;
  color: #707070;
`;

export function Bar(props: { title?: String }) {
  return (
    <Bar_Container>
      <Bar_Thickline />
      <Bar_Title>{props.title}</Bar_Title>
      <Bar_Thickline />
    </Bar_Container>
  );
}

const Bar_Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  padding: 0px 20px;
`;

const Bar_Thickline = styled.View`
  flex: 1;
  height: 10px;
  background-color: #c0bfba;
`;

const Bar_Title = styled.Text`
  font-size: 11px;
  font-weight: bold;
  color: #707070;
  padding: 0px 5px;
`;

export default class EvalBackground extends React.Component<{}> {
  state: {
    length: number;
  };
  constructor(props: {}) {
    super(props);

    this.state = {
      length: 100,
    };
  }

  butt() {
    console.log("butt!");
  }

  getTextLine(name: String) {
    return (
      <View
        key={nanoid()}
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 12,
            fontWeight: "bold",
            color: "#c0bfba",
            paddingRight: 5,
          }}
        >
          {name}
        </Text>
        <View
          style={{
            flex: 1,
            backgroundColor: "#c0bfba",
            height: 1,
          }}
        />
      </View>
    );
  }

  render() {
    let a = [];
    for (let i = 0; i < 5; i++) {
      a.push(this.getTextLine("EVAL 1"));
    }
    let offset = this.state.length / 2 - 500 / 2;
    return (
      <View
        style={{
          width: "100%",
          paddingHorizontal: 20,
          paddingTop: 10,
        }}
      >
        <View
          style={{
            flexDirection: "column-reverse",
            width: this.state.length,
            height: 500,
            transform: [
              { rotate: "90deg" },
              { translateX: offset },
              { translateY: offset },
            ],
          }}
        >
          {a}
        </View>
      </View>
    );
  }
}
