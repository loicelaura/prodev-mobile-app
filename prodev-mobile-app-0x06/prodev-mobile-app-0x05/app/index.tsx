import { View, Text, StyleSheet, Image, Pressable, Dimensions } from 'react-native';
import { useRouter } from 'expo-router';
import { styles as mainStyles } from '../styles/_mainstyle';
import { BACKGROUNDIMAGE, HEROLOGO } from '../constants/index';

const { height } = Dimensions.get('window');

export default function WelcomeScreen() {
  const router = useRouter();

  return (
    <View style={mainStyles.container}>
      <Image
        source={BACKGROUNDIMAGE}
        style={[mainStyles.backgroundImageContainer, { height: height }]}
        resizeMode="cover"
      />
      <View style={StyleSheet.absoluteFill}>
        <View style={mainStyles.logoContainer}>
          <Image source={HEROLOGO} />
        </View>
        <View style={mainStyles.titleContainer}>
          <Text style={mainStyles.titleText}>The World's</Text>
          <Text style={mainStyles.titleText}>Largest Library</Text>
          <View style={mainStyles.titleSubTextContainer}>
            <Text style={mainStyles.titleSubText}>Find your favorite books here.</Text>
          </View>
        </View>
        <View style={{ ...mainStyles.buttonGroup, position: 'absolute', bottom: 100, left: 0, right: 0 }}>
          <Pressable style={mainStyles.buttonPrimary} onPress={() => router.push('/signin')}>
            <Text style={mainStyles.buttonPrimaryText}>Sign in</Text>
          </Pressable>
          <Pressable style={mainStyles.buttonSecondary} onPress={() => router.push('/join')}>
            <Text style={mainStyles.buttonSecondaryText}>Join now</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
