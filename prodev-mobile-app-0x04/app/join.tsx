import { View, Text, StyleSheet, Pressable, TextInput, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { styles as joinStyles } from '../styles/_joinstyle';
import { GOOGLELOGO, FACEBOOKLOGO } from '../constants/index';

export default function JoinScreen() {
  const router = useRouter();
  return (
    <View style={joinStyles.container}>
      <View style={joinStyles.iconsection}>
        <Pressable onPress={() => router.back()}>
          <Text>{"<"}</Text>
        </Pressable>
        <Image source={FACEBOOKLOGO} style={{ opacity: 0 }} />
      </View>
      <View style={joinStyles.titleTextGroup}>
        <Text style={joinStyles.titleText}>Create a new</Text>
        <Text style={joinStyles.titleText}>account</Text>
      </View>
      <View style={joinStyles.formGroup}>
        <Text style={joinStyles.formLabel}>Full Name</Text>
        <TextInput style={joinStyles.formControl} placeholder='Full Name' />
        <Text style={joinStyles.formLabel}>Email Address</Text>
        <TextInput style={joinStyles.formControl} placeholder='Email' />
        <Text style={joinStyles.formLabel}>Password</Text>
        <View style={joinStyles.formPasswordControl}>
          <TextInput style={joinStyles.passwordControl} placeholder='Password' secureTextEntry />
          <Pressable><Text style={{ color: '#C2C2C2' }}>Show</Text></Pressable>
        </View>
      </View>
      <Pressable style={joinStyles.primaryButton}>
        <Text style={joinStyles.buttonText}>Sign up</Text>
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
        <Text style={joinStyles.signupTitleText}>Already have an account? </Text>
        <Pressable onPress={() => router.push('/signin')}>
          <Text style={joinStyles.signupSubTitleText}>Sign in</Text>
        </Pressable>
      </View>
    </View>
  );
}
