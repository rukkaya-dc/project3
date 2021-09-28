import  React,{useState} from 'react';
import { Button, View,Text,TextInput,Image,StyleSheet,TouchableOpacity } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { Linking } from 'react-native';
import SweetAlert from 'react-native-sweet-alert';


function Login({ navigation }) {
  const emailId = 'rukkaya@gmail.com'
  const Pwd = 'qwerty'
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [formError, setFormError] = useState({})
  const errors = {}

  const validation = ()=>{
    if(email.trim().length === 0){
        errors.email = 'email can not be blank';
    } else if(email.trim() != emailId){
        errors.email = 'enter valid email Id';
    }

    if(password.trim().length === 0){
        errors.password = 'password can not be blank';
    } else if(password.trim() != Pwd){
        errors.password = 'enter valid password';
    }
}

  const handleLogin = () => {
    validation()

    if(Object.keys(errors).length === 0){
        setFormError({})
        navigation.navigate('Home')
        setEmail('')
        setPassword('')
    } else{
        setFormError(errors)
    }

  }
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:"#f5deb3" }}>
        <Text style={{color:"black", fontSize:25}}>Email</Text>
        <TextInput 
        placeholder= "xyz@gmail.com"
        style={styles.input}
        onChangeText={email => setEmail(email)}
        defaultValue={email}
         />
        <Text style={{color:'black', fontSize:20}}>{formError.email}</Text>
        <Text style={{color:"black", fontSize:25}}>Password</Text>
        <TextInput 
        style={styles.input}
        secureTextEntry={true}
        onChangeText={password => setPassword(password)}
        defaultValue={password}
        />
        <Text style={{color:'black', fontSize:20}}>{formError.password}</Text>

      <Button
        onPress={handleLogin}
        title="Login"
      />
    </View>
  );
}


function HomeScreen({ navigation }) {

const handleUser1 = () => {
  SweetAlert.showAlertWithOptions({
    title: 'Task1',
    subTitle: 'login page',
  })
}

const handleUser2 = () => {
  SweetAlert.showAlertWithOptions({
    title: 'Task2',
    subTitle: 'Navigation',
  })
}

const handleUser3 = () => {
  SweetAlert.showAlertWithOptions({
    title: 'Task3',
    subTitle: 'Drawer',
  })
}

const handleUser4 = () => {
  SweetAlert.showAlertWithOptions({
    title: 'Task4',
    subTitle: 'Combined all of them',
  })
}
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <TouchableOpacity style={styles.button} onPress={handleUser1} >
          <Text style={{color:'Red', fontSize:25}}>login page</Text>
        </TouchableOpacity>
        <Text></Text>

        <TouchableOpacity style={styles.button} onPress={handleUser2} >
          <Text style={{color:'Red', fontSize:25}}>Navigation</Text>
        </TouchableOpacity>
        <Text></Text>

        <TouchableOpacity style={styles.button} onPress={handleUser3}>
          <Text style={{color:'Red', fontSize:25}}>Drawer</Text>
        </TouchableOpacity>
        <Text></Text>

        <TouchableOpacity style={styles.button} onPress={handleUser4}>
          <Text style={{color:'Red', fontSize:25}}>Combined all of them</Text>
        </TouchableOpacity>
        <Text></Text>
        <Button
          onPress={() => navigation.navigate('Notifications')}
          title="More Details"
        />
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{color:'black', fontSize:25}}>Click the below Link</Text>
        <Text style={{color: 'Red', fontSize:35}}
          onPress={() => Linking.openURL('https://reactnavigation.org/')}>
          ReactNavigationDetails 
        </Text>
        <Text></Text>
        <Button onPress={() => navigation.navigate('Go')} title="Go to Next Slide" />
        <Text></Text>
    </View>
  );
}
function GoScreen({ navigation}) {

    return(
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Image   style={{ width: 400, height: 400 }}  source={require('./r.png')} />
          <Text   style={{ fontSize:30 }} >I LOVE REACT</Text>
      </View>
    )
  }
function LogOut({navigation}){
  return(
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button onPress={() => navigation.navigate('Login')} title="Logout" />
      </View>
    );
  }

const Drawer = createDrawerNavigator();

export default function App() {
  
  return (
    <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name="Login" component={Login} />
          <Drawer.Screen name="Home" component={HomeScreen} />
          <Drawer.Screen name="Notifications" component={NotificationsScreen} />
          <Drawer.Screen name="Go" component={GoScreen} />
          <Drawer.Screen name="logout" component={LogOut} />
        </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  button: {
      alignItems: "center",
      backgroundColor: "#fa8072",
      padding: 2,
      width : '50%'
  },
  input: {
      height: 50,
      borderWidth: 3,
      padding: 10,
      borderColor:'red',
      fontSize:20,
      color:'black',
      alignContent:'center',
      width:'75%'
  }
});
