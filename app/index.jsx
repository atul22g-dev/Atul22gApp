import React, { useState, useEffect } from 'react'
import { ScrollView, Text } from 'react-native'
import NetInfo from '@react-native-community/netinfo';
import Main from '@/components/Main';
import NoInternet from '@/components/NoInternet';
export default function App() {
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    const internetInfo = NetInfo.addEventListener(state => {
      // console.log("Connection type", state.type);
      // console.log("Is connected?", state.isConnected);
      setIsConnected(state.isConnected);
    });

    // Cleanup function
    return () => {
      internetInfo();
    };
  }, []);

  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      {isConnected ?  <Main/> : <NoInternet />}
    </ScrollView>
  )
}