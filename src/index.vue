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
          <router-link to="/page1">
            <button class="bg-transparent hover:bg-green-700 text-green-900 font-semibold hover:text-white py-2 px-4 border border-green-700 hover:border-transparent rounded-lg">
              Go Page1
            </button>
          </router-link>
          <div class="p-3"></div>
          <router-link to="/page2">
            <button class="bg-transparent hover:bg-green-700 text-green-900 font-semibold hover:text-white py-2 px-4 border border-green-700 hover:border-transparent rounded-lg">
              Go Page2
            </button>
          </router-link>
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