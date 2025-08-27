import { StyleSheet, Text, View } from 'react-native';

/**
 * This is the main entry screen for the application.
 * It displays a title and three text components with different styles.
 */
export default function App() {
  return (
    // The root View component with the container style.
    // We've added flex: 1 to ensure it takes up the full screen,
    // and justifyContent/alignItems to center the content.
    <View style={styles.container}>
      {/* The main title text component. */}
      <Text>Entry Screen - Awesome</Text>
      
      {/* A container View for the three additional text components. */}
      <View>
        <Text style={styles.largeText}>Typescript is great if you practice more</Text>
        <Text style={styles.mediumText}>React Native provides you a single codebase for cross platforms</Text>
        <Text style={styles.smallText}>ALX is awesome</Text>
      </View>
    </View>
  );
}

/**
 * Defines the StyleSheet for the components.
 */
const styles = StyleSheet.create({
  container: {
    // Fills the entire screen.
    flex: 1,
    // Sets the background color as specified.
    backgroundColor: '#90caf9',
    // Centers content vertically.
    justifyContent: 'center',
    // Centers content horizontally.
    alignItems: 'center',
    // Adds padding around the content.
    padding: 20,
  },
  largeText: {
    fontSize: 30,
    color: '#f44336',
    marginBottom: 5,
    fontWeight: '700',
    // Note: The fontVariant property might not work exactly as intended on all platforms.
    fontVariant: ['small-caps'],
  },
  mediumText: {
    fontSize: 20,
    color: '#9c27b0',
    marginBottom: 10,
    fontWeight: '500',
    textAlign: 'right',
  },
  smallText: {
    fontSize: 15,
    color: '#2196f3',
    fontWeight: '400',
    textAlign: 'center',
  },
});