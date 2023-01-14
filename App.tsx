import {StyleSheet, Text, View, TextInput, Button} from 'react-native';
import {useState, useEffect} from 'react';

const signUpTemplate = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const signUpTemplateError = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
};

function App() {
  const [signupForm, setsignupForm] = useState({...signUpTemplate});
  const [signupFormError, setsignupFormError] = useState({
    ...signUpTemplateError,
  });

  const handleFormError = (key, value) => {
    let error = ''
    if(key === 'name'){
      if(value.length < 3){
        error = "Name must be atleast 3 characters long"
      }
      else if(value.length > 35){
        error = 'Name must not exceed maximum of 35 characters '
      }
    }
    else if(key === 'email'){
      if(value.length === 0){
        error = "Email Address must not be blank"
      }
      else if(!/^([\w-\.])+@([\w-])+\.([\w-]{2,4})$/g.test(value)){
        error = "Invalid email"
      }
    }
    else if(key === 'password'){
      if(value.length < 6){
        error = "Password must contain atleast 6 characters"
      }
      else   if(value.length>6 && value.match(/[a-z]/) && value.match(/[A-Z]/) && value.match(/\d+/) && value.match(/.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/)){
             error = ""
      }
      else {
        error = "Invalid password"
      }
    }
    
    return error
  };

  const handleForm = (key, value) => {
    let currentSignupForm = {...signupForm};
    let currentSignupFormError = {...signupFormError};
    // if(key === 'name'){
    //   currentSignupForm.name = value
    // }
    // else if(key === 'email'){
    //   currentSignupForm.email = value
    // }
    // else if(key === 'password'){
    //   currentSignupForm.password = value
    // }
    // else if(key === 'confirmPassword'){
    //   currentSignupForm.confirmPassword = value
    // }
    currentSignupForm[key] = value;
    currentSignupFormError[key] = handleFormError(key, value);
    setsignupForm(currentSignupForm)
    setsignupFormError(currentSignupFormError)
  };

  useEffect(() => {
    console.log('Signup form', signupForm, signupFormError);
  }, [signupForm,signupFormError]);

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.heading}>Sign Up</Text>
        <TextInput
          style={styles.input}
          placeholder="Fullname"
          value={signupForm.name}
          onChangeText={text => handleForm('name', text)}
        />
        <Text style={styles.error}>{signupFormError.name}</Text>
        <TextInput
          style={styles.input}
          placeholder="Email Address"
          value={signupForm.email}
          onChangeText={text => handleForm('email', text)}
        />
        <Text style={styles.error}>{signupFormError.email}</Text>
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={signupForm.password}
          onChangeText={text => handleForm('password', text)}
        />
        <Text style={styles.error}>{signupFormError.password}</Text>
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          value={signupForm.confirmPassword}
          onChangeText={text => handleForm('confirmPassword', text)}
        />
        <Text style={styles.error}>{signupFormError.confirmPassword}</Text>

        <View style={styles.btnContainer}>
          <Button title="Next" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  error:{
    color: 'red',
    marginHorizontal: 5,
    marginVertical: 5,
  },
  container: {
    flex: 1,
    backgroundColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    width: '85%',
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 4,
  },
  heading: {
    fontSize: 22,
    color: '#333',
    fontWeight: '600',
    marginBottom: 30,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    borderColor: '#aaa',
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 1,
  },
  btnContainer: {
    width: 150,
    marginTop: 30,
    alignSelf: 'center',
  },
});

export default App;
