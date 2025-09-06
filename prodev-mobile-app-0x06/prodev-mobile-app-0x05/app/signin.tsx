import { View, Text, StyleSheet, Pressable, TextInput, Image } from 'react-native';
import { useNavigation } from 'expo-router';
import { styles as joinStyles } from '../styles/_joinstyle';
import { GOOGLELOGO, FACEBOOKLOGO } from '../constants/index';

export default function SignInScreen() {
  const navigation = useNavigation();
  return (
    <View style={joinStyles.container}>
      <View style={joinStyles.iconsection}>
        <Pressable onPress={() => navigation.goBack()}>
          <Text>{"<"}</Text>
        </Pressable>
        <Image source={FACEBOOKLOGO} style={{ opacity: 0 }} />
      </View>
      <View style={joinStyles.titleTextGroup}>
        <Text style={joinStyles.titleText}>Sign in to</Text>
        <Text style={joinStyles.titleText}>Your account</Text>
      </View>
      <View style={joinStyles.formGroup}>
        <Text style={joinStyles.formLabel}>Email Address</Text>
        <TextInput style={joinStyles.formControl} placeholder='Email' />
        <Text style={joinStyles.formLabel}>Password</Text>
        <View style={joinStyles.formPasswordControl}>
          <TextInput style={joinStyles.passwordControl} placeholder='Password' secureTextEntry />
          <Pressable><Text style={{ color: '#C2C2C2' }}>Show</Text></Pressable>
        </View>
        <Pressable>
          <Text style={joinStyles.forgotPasswordText}>Forgot Password?</Text>
        </Pressable>
      </View>
      <Pressable style={joinStyles.primaryButton}>
        <Text style={joinStyles.buttonText}>Sign in</Text>
      </Pressable>
      <View style={joinStyles.dividerGroup}>
        <View style={joinStyles.divider} />
        <Text style={joinStyles.dividerText}>or continue with</Text>
        <View style={joinStyles.divider} />
      </View>
      <View style={joinStyles.secondaryButtonGroup}>
        <Pressable style={joinStyles.secondaryButton}>
          <Image source={GOOGLELOGO} />
          <Text style={joinStyles.secondaryButtonText}>Google</Text>
        </Pressable>
        <Pressable style={joinStyles.secondaryButton}>
          <Image source={FACEBOOKLOGO} />
          <Text style={joinStyles.secondaryButtonText}>Facebook</Text>
        </Pressable>
      </View>
      <View style={joinStyles.signupgroup}>
        <Text style={joinStyles.signupTitleText}>Don't have an account? </Text>
        <Pressable onPress={() => navigation.navigate('join')}>
          <Text style={joinStyles.signupSubTitleText}>Sign up</Text>
        </Pressable>
      </View>
    </View>
  );
}