import {StyleSheet, Text, View, TextInput, Button} from 'react-native';
import {useState, useEffect} from 'react';

const signUpTemplate= {
  name: {value: '',error: '' },
  email: {value: '',error: ''},
  dob: {value: '',error:''},
  country: {value: '',error: ''},
  phone: {value: '',error: ''},
};

function App() {
  const [signupForm, setsignupForm] = useState({...signUpTemplate});


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
    else if(key === 'dob'){
      if(value === ''){
        error = 'Should not be blank'
      }
      
    }
    else if(key === 'country'){
      if(value.length < 3){
        error = "Country must contain atleast 3 characters"
      } 
    }
    else if(key === 'phone'){
      if(value.length <10){
        error = "Must be atleast 10 digits"
      }
      else if(value.length > 12){
        error = "Must not be greater than 12 digits"
      }
    }
    
    return error
  };

  const handleForm = (key, value) => {
    let currentSignupForm = {...signupForm};
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
    currentSignupForm[key]['value'] = value;
    currentSignupForm[key]['error'] = handleFormError(key, value);
    setsignupForm(currentSignupForm)
  };

  useEffect(() => {
    console.log('Signup form', signupForm);
  }, [signupForm]);

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <View style={styles.nameContain}>
          
        <Text style={styles.name}>{signupForm.name.value}</Text>
        </View>
        <Text style={styles.heading}>PERSONAL INFORMATION</Text>
        <TextInput
          style={styles.input}
          placeholder="Fullname"
          value={signupForm.name.value}
          onChangeText={text => handleForm('name', text)}
        />
       {signupForm.name.error &&  <Text style={styles.error}>{signupForm.name.error}</Text>}
        <TextInput
          style={styles.input}
          placeholder="Email Address"
          onChangeText={text => handleForm('email', text)}
          value={signupForm.email.value}
          keyboardType="email-address"
        />
        {signupForm.email.error &&  <Text style={styles.error}>{signupForm.email.error}</Text>}
        <TextInput 
        style={styles.input}
        placeholder="DOB"
        value={signupForm.dob.value}
        onChangeText={text => handleForm('dob', text)}
        keyboardType="numeric"        />
        {signupForm.dob.error &&  <Text style={styles.error}>{signupForm.dob.error}</Text>}
        <TextInput
          style={styles.input}
          placeholder="Country"
          onChangeText={text => handleForm('country', text)}
          value={signupForm.country.value}
          keyboardType="default"
        />
        {signupForm.country.error &&  <Text style={styles.error}>{signupForm.country.error}</Text>}
        <TextInput
          style={styles.input}
          placeholder="Phone number *"
          onChangeText={text => handleForm('phone', text)}
          value={signupForm.phone.value}
          keyboardType="number-pad"
        />
       {signupForm.phone.error &&  <Text style={styles.error}>{signupForm.phone.error}</Text>}

        <View style={styles.btnContainer}>
          <Button  color="rgb(143,20,2)" title="Next" />
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
  nameContain:{
    backgroundColor: "white",
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginBottom: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    height: 32,
  },
  name:{
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
    color: 'red'
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    width: '85%',
    backgroundColor: 'ivory',
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
    fontSize: 14,
    color: '#333',
    fontWeight: '400',
    marginBottom: 18,
    textAlign: 'left',
  },
  input: {
    backgroundColor: "white",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
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
    width: 300,
    marginTop: 30,
    alignSelf: 'center',
  },
});

export default App;
