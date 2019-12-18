<template>
  <v-app>
   <div>

        <v-toolbar>
 
     <v-toolbar-title>My Suplementation</v-toolbar-title>
     
      <v-spacer></v-spacer>

      <v-toolbar-items>
        <v-btn text >Inicio</v-btn>
        <v-btn text>Blog</v-btn>
         <v-btn text>Iniciar sesion</v-btn>
      </v-toolbar-items>

    </v-toolbar>
  </div>

<br> <br>
  <v-parallax
    dark
    src="https://akrocard.com/pt/wp-content/uploads/2015/05/fondo-degradado-azul.jpg"
    style="height: 90px;"
  >
    <v-row
      align="center"
      justify="center"
    >
      <v-col class="text-center" cols="12">
        <h1 class="display-1 font-weight-thin mb-4">PRODUCTOS PROSCIENCE</h1>
        
      </v-col>
    </v-row>
  </v-parallax>


  <div style="
  width: 280px;
  position: relative;
  left:20px;
  top:25px;"
  > 

<v-card
    class="mx-auto"
    max-width="344"
  >
    <v-img
      src="https://www.miproteina.com.co/media/catalog/product/cache/1/image/600x600/9df78eab33525d08d6e5fb8d27136e95/b/e/best_protein.png"
      height="300px"
      width="300px"
    ></v-img>

    <v-card-title>
      BEST PROTEIN 
    </v-card-title>

    <v-card-subtitle>
    ¿La mejor del mercado?
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
        color="blue"
        text
        @click="show = !show"
      >
        Ver más
      </v-btn>

      <v-spacer></v-spacer>
      
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text style="text-align: justify">
          Esta proteína es la mejor mezcla anabolica del mercado, 3 productos en uno solo, Proteína aislada de suero de altísima calidad, Caseina miscelar para una absorción prolongada y leucina para incrementar la síntesis proteica. Best Protein la mejor mezcla para mantener a raya tus porcentajes de grasa, ya que no contiene azucar, lactosa carbohidratos ni grasa.
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>


  </div>

    <div style=" position: absolute;width: 280x;height: 300x;left:325px;top:228px">

<v-card
    class="mx-auto"
    max-width="300"
  >
    <v-img
      src="https://i2.wp.com/jhnutricion.com/wp-content/uploads/2019/03/Intenze.png?fit=2160%2C2160&ssl=1"
      height="280px"
      width="280"
    ></v-img>

    <v-card-title>
      INTENZE  PRE-WORKOUT
    </v-card-title>

    <v-card-subtitle>
      ¿Realmente lleva tus entrenos a otro nivel? 
    </v-card-subtitle>
 
    <v-card-actions>
   
      <v-btn
        color="blue"
        text
        @click="mostrar= !mostrar"
      >
        Ver más
      </v-btn>

      <v-spacer></v-spacer>

      
    </v-card-actions>

    <v-expand-transition>
      <div v-show ="mostrar">
        <v-divider></v-divider>

        <v-card-text style="text-align: justify">
         Hemos realizado una combinacion que te brindara vasodilatacion, mayor transporte de nutrientes y energia. en proscience combinamos citrulina arginina raiz de remolacha (rica en nitratos) creatina hcl bcaas betaina cafeina en dosis ergogenicas adecuadas. tus entrenamientos jamas seran los mismos con INTENZE.
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>

  </div>


  <br> <br>

<div style=" position: absolute;width: 280x;height: 300x;left:640px;top:228px">

<v-card
    class="mx-auto"
    max-width="300"
  >
    <v-img
      src="https://fitmafia.co/wp-content/uploads/2019/05/smart-power_5cca2c9357446.jpeg"
      height="280px"
      width="280"
    ></v-img>

    <v-card-title>
      SMART POWER
    </v-card-title>

    <v-card-subtitle>
      El suplemento con mayor evidencia cientifica 
    </v-card-subtitle>
 
    <v-card-actions>
   
      <v-btn
        color="blue"
        text
        @click="muestra= !muestra"
      >
        Ver más
      </v-btn>

      <v-spacer></v-spacer>

      
    </v-card-actions>

    <v-expand-transition>
      <div v-show ="muestra">
        <v-divider></v-divider>

        <v-card-text style="text-align: justify">
         SMART POWER te ofrece la sinergia de Creatina HCL y HMB, para que logres mejorar tus niveles de energía a nivel muscular, así como tu fuerza, potencia, capacidad de recuperación y con una buena ingesta proteica potenciar la síntesis proteica y así mejorar tu masa muscular.
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>

  </div>

  <br> <br>

 <div style="height: 200px; position: absolute; width: 300px;  left:980px; top:228px">

<v-card
    class="mx-auto"
    max-width="344"
  >
    <v-img
      src="https://www.miproteina.com.co/media/catalog/product/cache/1/image/600x600/9df78eab33525d08d6e5fb8d27136e95/s/m/smart_gainer.png"
      height="300px"
      width="300"
      sizes=""
    ></v-img>

    <v-card-title>
      SMART GAINER
    </v-card-title>

    <v-card-subtitle>
      Un ganador de peso inteligente
    </v-card-subtitle>
 
    <v-card-actions>
   
      <v-btn
        color="blue"
        text
        @click="mostra= !mostra"
      >
        Ver más
      </v-btn>

      <v-spacer></v-spacer>

      
    </v-card-actions>

    <v-expand-transition>
      <div v-show ="mostra">
        <v-divider></v-divider>

        <v-card-text style="text-align: justify">
         Smart Gainer Proscience aporta 44gr de proteina, 168gr de carbohidratos, 3gr de creatina HCL,6 gr de bcaas, 1 gr de HMB, 920KCAL de las cuales ninguna proviene de azucar, exactamente! nuestro GAINER NO TIENE AZUCAR. asi tienes mas chance de aumentar de tamaño tus músculos sin aumentar dramáticamente tus porcentajes de grasa.
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
  </div>
 <br>




  </v-app>
</template>

<style scoped>
#card {
  border-top:25px;
}
</style>

<script>

export default {
  name: 'App',

  data: () => ({
  
      show: false,
      mostrar: false, 
      muestra: false, 
      mostra: false,
      mostr: false,   

  }),
};
</script>
