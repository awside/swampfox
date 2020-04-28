import React from 'react'
import styled from 'styled-components/native'
import { Bar, TopMenu } from './Title'
import { TextLineBackground } from './VerticalTitleLines'
import { TouchableWithoutFeedback } from 'react-native'
import { emitter } from './Emitter'

export function Page() {
  const NavPage = styled.SafeAreaView`
    flex: 1;
    background-color: #e0dfd7;
    align-items: center;
    justify-content: flex-start;
  `
  let handlePress = () => {
    
  }

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <NavPage>
        <TopMenu title="Students" />
        <Bar title="SWAMP FOX" />
        <TextLineBackground
          names={['EVAL 1', 'EVAL 2', 'EVAL 3', 'EVAL 4']}
          emitName="eval line length"
        />
      </NavPage>
    </TouchableWithoutFeedback>
  )
}
