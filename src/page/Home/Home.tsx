import React from 'react';
import { JumboContent } from "../../elements/JumboContent/JumboContent";
import Wrapper from '../../elements/Wrapper/Wrapper';

class HomePage extends React.Component {
  public render() {
    return (
      <Wrapper>
        <JumboContent
          title="Hi there!"
        >
          I am so pleased to see you here.
        </JumboContent>
        <p>My name is <b>Jewel Michael</b>, a UI/UX Designer by profession since 2016. Feel free to roam around and get to know about my bio, works and other details.</p>
      </Wrapper>
    );
  }
}

export default HomePage;