<template>
  <div class="container w-fit mx-auto">
    <div class="md:flex pt-10 py-5 ">
      <img alt="Vue logo" class=" p-2 w-48 h-48 mx-auto" src="./assets/logo.png">
      <div class="px-10 py-5">
        <div class="text-5xl font-thin text-center md:text-left">
          The Progressive
          <br>
          JavaScript Framework
        </div>

        <div class="flex pt-5 justify-center md:justify-start">
          <button class="bg-transparent hover:bg-green-700 text-green-900 font-semibold hover:text-white py-2 px-4 border border-green-700 hover:border-transparent rounded-lg">
            <router-link to="/page1">Go Page1</router-link>
          </button>

          <button class="ml-5 bg-transparent hover:bg-green-800 text-green-900 font-semibold hover:text-white py-2 px-4 border border-green-800 hover:border-transparent rounded-lg">
            <router-link to="/page2">Go Page2</router-link>
          </button>
        </div>

      </div>

    </div>
  </div>
  <router-view></router-view>
</template>

<script>

export default {
  name: 'App',
  provide: {
    $tester: window.tester
  },
}
</script>