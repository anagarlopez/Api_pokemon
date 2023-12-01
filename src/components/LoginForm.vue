<script setup>
    import { ref } from 'vue';

    const username = ref('');
    const password = ref('');
    const error = ref('');

    const login = async () => {
        try {
            const response = await fakelogin(username.value, password.value);
        
            // Verificamos la respuesta de la API
        if (response.success) {
          // Autenticación exitosa, puedes redirigir al usuario a otra página
          console.log('Usuario autenticado:', username.value);
        } else {
          // Autenticación fallida, mostramos un mensaje de error
          error.value = 'Credenciales incorrectas. Por favor, inténtalo de nuevo.';
        }
      } catch (err) {
        console.error('Error en la autenticación:', err);
        error.value = 'Hubo un error en la autenticación. Por favor, inténtalo de nuevo.';
      }
    };

    // Función para simular la llamada a la API de autenticación
    const fakeLogin = (username, password) => {
      return new Promise((resolve) => {
        // Simulamos una demora de 1 segundo para la llamada a la API
        setTimeout(() => {
          // Simulamos que la autenticación es exitosa si el nombre de usuario es "user" y la contraseña es "password"
          const success = username === 'user' && password === 'password';

          resolve({ success });
        }, 1000);
      });
    };

    return {
      username,
      password,
      error,
      login
    };

</script>


<template>
    <form @submit.prevent="login">
      <label for="username">Usuario:</label>
      <input v-model="username" type="text" id="username" required>
      
      <label for="password">Contraseña:</label>
      <input v-model="password" type="password" id="password" required>
      
      <button type="submit">Iniciar sesión</button>
      <p v-if="error" class="error">{{ error }}</p>
    </form>
  </template>
  
  