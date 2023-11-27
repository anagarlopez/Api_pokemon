<script setup>

</script>

<template> 

<body>    

  <!-- <div id="app" class="container mt-5">
  <h2>Formulario de Contacto</h2>
  <form>
    <div class="form-group">
      <label for="nombre">Nombre:</label>
      <input v-model="nombre" type="text" class="form-control" id="nombre" placeholder="Ingrese su nombre">
    </div>
    <div class="form-group">
      <label for="email">Correo electrónico:</label>
      <input v-model="email" type="email" class="form-control" id="email" placeholder="Ingrese su correo electrónico">
    </div>
    <div class="form-group">
      <label for="mensaje">Mensaje:</label>
      <textarea v-model="mensaje" class="form-control" id="mensaje" rows="4" placeholder="Ingrese su mensaje"></textarea>
    </div>
    <button type="submit" class="btn btn-primary" @click.prevent="enviarFormulario">Enviar</button>
  </form>
</div>
 

<form> -->

    <h1>Bienvenido</h1>
  <div class="form-group">
  
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email">

  </div>
  <div class="form-group">
    
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">

  </div>
    <div class="p-3 mb-2 bg-danger text-white">
      <button type="submit" class="btn btn-primary">Log in</button>
    </div>
  </form>
</body>
</template>

<style lang="scss" scoped>
</style>