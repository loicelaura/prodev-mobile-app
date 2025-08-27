import { StyleSheet, Text, View } from 'react-native';

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.largeText}>
        Typescript is great if you practice more
      </Text>
      <Text style={styles.mediumText}>
        React Native provides you a single codebase for cross platforms
      </Text>
      <Text style={styles.smallText}>ALX is awesome</Text>
      <Text>Entry Screen - Awesome</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  largeText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  mediumText: {
    fontSize: 18,
  },
  smallText: {
    fontSize: 14,
    fontStyle: 'italic',
  },
});
