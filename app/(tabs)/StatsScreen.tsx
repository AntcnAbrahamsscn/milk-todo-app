import useStore from '@/store/store'
import { StyleSheet, Text, View } from 'react-native'


export default function StatsScreen() {
  const { count } = useStore();

  return (
    <View style={styles.container}>
      
      <Text style={styles.text}>Stats Screen</Text>
      <Text >{count}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#324047'
    },
    text: {
      color: '#fff',
    },
  
  });