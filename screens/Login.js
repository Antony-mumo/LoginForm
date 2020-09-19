import React, { Fragment } from 'react';
import { StyleSheet, View, Text, SafeAreaView } from 'react-native';
import { Button } from 'react-native-elements'
import { Formik } from 'formik';
import * as yup from 'yup';

import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import ErrorMessage from '../components/ErrorMessage';

const validationSchema = yup.object().shape({
  email: yup.string()
    .label('Email')
    .email('Enter a valid email')
    .required('Please enter a registered email'),
  password: yup.string()
    .label('Password')
    .required()
    .min(4, 'Password must have at least 4 characters ')
});

export default class Login extends React.Component {

  goToSignup = () => this.props.navigation.navigate('Signup')

  handleSubmit = values => {
    if (values.email.length > 0 && values.password.length > 0) {
      setTimeout(() => {
        this.props.navigation.navigate('App')
      }, 3000)
    }
  }

  render() {
    
    return (
      <SafeAreaView style={styles.container}>
        <Formik
          initialValues={{ email: '', password: '' }}
          onSubmit={values => { this.handleSubmit(values) }}
          
          validationSchema={validationSchema}>

          {({ handleChange, values, handleSubmit, errors, isValid, isSubmitting, touched, handleBlur }) => (
            <Fragment>
              <FormInput
                name='email'
                value={values.email}
                placeholder='Enter email'
                autoCapitalize='none'
                onChangeText={handleChange('email')}
                iconName='ios-mail'
                iconColor='#2C384A'
                onBlur={handleBlur('email')}
              />
              <ErrorMessage errorValue ={touched.email && errors.email}/>
              <FormInput
                name='password'
                value={values.password}
                placeholder='Enter password'
                secureTextEntry
                onChangeText={handleChange('password')}
                iconName='ios-lock'
                iconColor='#2C384A'
                onBlur={handleBlur('password')}
              />
              <ErrorMessage errorValue ={touched.password && errors.password}/>
              <View style={styles.buttonContainer}>
                <FormButton
                  buttonType='outline'
                  onPress={handleSubmit}
                  title='LOGIN'
                  buttonColor='#039BE5'
                  disabled={!isValid || isSubmitting}
                  loading = { isSubmitting }
                />
              </View>
            </Fragment>
          )}
        </Formik>
        <Button
          title="Don't have an account? Sign Up"
          onPress={this.goToSignup}
          titleStyle={{
            color: '#F57C00'
          }}
          type='clear'
        />
      </SafeAreaView>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',   
    paddingTop: 50
  },
  buttonContainer: {
    margin: 25
  }
});
