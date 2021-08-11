import React from 'react'
import { Button, StyleSheet, Text, View } from "react-native"

export interface Props {
    title: string
  }
  
  interface State {
  }

  export class Header extends React.Component<Props, State> {
    constructor(props: Props) {
      super(props)
    }
  
    render() {
      return (
        <View style={styles.header}>
            <Text style={styles.headerTitle}>{this.props.title}</Text>
        </View>
      )
    }
  }
  
  // styles
  
  const styles = StyleSheet.create({
    header: {
        backgroundColor: 'black',
        paddingTop: 18,
        height: 55,
        width: '100%',
        textAlign: 'center'
    },
    headerTitle: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    }
  })