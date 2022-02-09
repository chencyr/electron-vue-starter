<template>
  <div class="container w-fit mx-auto">
    <div class="md:flex pt-10 py-5 ">
      <img alt="Vue logo" class=" p-2 w-48 h-48 mx-auto" src="./assets/logo.png">
      <div class="px-10 py-5">
        <div class="text-5xl font-thin text-center md:text-left ">
          The Progressive
          <br>
          JavaScript Framework
        </div>

        <div class="flex pt-5 justify-center md:justify-start">
          <router-link to="/page1">
            <btn>Go Page1</btn>
          </router-link>
          <div class="p-3"></div>
          <router-link to="/page2">
            <btn>Go Page2</btn>
          </router-link>
          <div class="p-3"></div>
          <router-link to="/page3">
            <btn>Go Page3</btn>
          </router-link>
        </div>

      </div>

    </div>
  </div>
  <router-view></router-view>
</template>

<script>
import Btn from './renderers/components/utilities/btn/primary'

export default {
  name: 'App',
  provide: {
    $tester: window.tester,
    $portManager: window.portManager,
  },
  components: {
    Btn
  }
}
</script>