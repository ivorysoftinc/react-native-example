import * as React from 'react';
import {
  Alert,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
} from 'react-native';
import { Button } from '../../components';
import { colors, sizes } from '../../utils/appearance';
import { useForm } from '../../utils/hooks';
import { PersonalInformationSchema } from './validation';

type ProfileFormField = keyof typeof PersonalInformationSchema.fields;

type ProfileInputProps = {
  field: ProfileFormField;
  keyboardType?: TextInputProps['keyboardType'];
  textContentType?: TextInputProps['textContentType'];
};

interface ProfileScreenProps {}

const ProfileScreen: React.FC<ProfileScreenProps> = () => {
  const [profileFormState, setProfileFormState] = useForm(PersonalInformationSchema);

  const renderTextInput = (params: ProfileInputProps) => {
    const { field } = params;
    const label = PersonalInformationSchema.fields[field].spec.label;

    return (
      <View key={field} style={styles.field}>
        <TextInput
          placeholder={label}
          style={styles.textInput}
          value={profileFormState[field]}
          onChangeText={(value) => setProfileFormState({ [field]: value })}
          keyboardType={params.keyboardType}
          textContentType={params.textContentType}
        />
      </View>
    );
  };

  const onValidateButtonPress = async () => {
    try {
      await PersonalInformationSchema.validate(profileFormState);
      Alert.alert('Success', 'Entered data is valid');
    } catch (e: any) {
      Alert.alert('Error', e.message);
    }
  };

  return (
    <SafeAreaView style={styles.root}>
      <ScrollView contentContainerStyle={styles.content}>
        {renderTextInput({ field: 'firstName', textContentType: 'givenName' })}
        {renderTextInput({ field: 'lastName', textContentType: 'familyName' })}
        {renderTextInput({
          field: 'email',
          textContentType: 'emailAddress',
          keyboardType: 'email-address',
        })}
        {renderTextInput({
          field: 'phoneNumber',
          textContentType: 'telephoneNumber',
          keyboardType: 'number-pad',
        })}
        {renderTextInput({ field: 'city' })}
        {renderTextInput({ field: 'state' })}
        {renderTextInput({ field: 'zipCode', keyboardType: 'phone-pad' })}
      </ScrollView>
      <Button text="Validate" style={styles.button} onPress={onValidateButtonPress} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'white',
  },
  body: {
    flex: 1,
  },
  content: {
    paddingVertical: sizes.indent.xl,
    paddingHorizontal: sizes.indent.xxl,
  },
  field: {
    flexDirection: 'row',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: colors.border,
    marginVertical: sizes.indent.m,
  },
  textInput: {
    fontSize: sizes.font.l,
    lineHeight: 28,
  },
  button: {
    marginHorizontal: sizes.indent.xxl,
  },
});

export default ProfileScreen;
