import React, { useState } from 'react';
import { View, Text, TextInput,TouchableOpacity,StyleSheet,Alert
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [senhaVisivel, setSenhaVisivel] = useState(false);

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://192.168.0.100:3000/login', { email, senha });
      Alert.alert('Sucesso', response.data.message);
    } catch (error: any) {
      Alert.alert('Erro', error.response?.data?.message || 'Erro ao conectar');
    }
  };

  return (
    <View style={styles.container}>
      <Icon name="person-circle-outline" size={100} color="#000" />
      <Text style={styles.title}>Login</Text>

      <TextInput
        style={styles.input}
        placeholder="exemple@gmail.com.br"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.inputPassword}
          placeholder="********"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry={!senhaVisivel}
        />
        <TouchableOpacity onPress={() => setSenhaVisivel(!senhaVisivel)}>
          <Icon name={senhaVisivel ? 'eye' : 'eye-off'} size={24} color="#555" />
        </TouchableOpacity>
      </View>

      <View style={styles.iconRow}>
        <Icon name="mail-outline" size={24} />
        <Icon name="logo-linkedin" size={24} />
        <Icon name="logo-github" size={24} />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2fbfd',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  input: {
    backgroundColor: '#d2f6fb',
    width: '100%',
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
  },
  passwordContainer: {
    flexDirection: 'row',
    backgroundColor: '#d2f6fb',
    width: '100%',
    paddingHorizontal: 12,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  inputPassword: {
    flex: 1,
    paddingVertical: 12,
  },
  iconRow: {
    flexDirection: 'row',
    gap: 20,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#a78bfa',
    padding: 14,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
