<template>
    <div class="container w-fit mx-auto">
        <h3 class="text-xl font-extralight">Installed CLI Plugins</h3>
        <ul class="flex gap-4 text-green-600 font-thin">
            <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank"
                   rel="noopener">babel</a></li>
            <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank"
                   rel="noopener">eslint</a></li>
        </ul>
        <div class="pt-10"></div>
        <h3 class="text-xl font-extralight">Test IPC call</h3>
        <ul class="flex gap-4 text-green-600 font-thin">
            <li><a rel="noopener" v-on:click="fn1()">call $tester.fn1</a></li>
            <li><a rel="noopener" v-on:click="fn2()">call $tester.fn2</a></li>
        </ul>
        <div class="pt-10"></div>
        <ul class="flex gap-4 text-green-600 font-thin">
            <li>{{ testValue }}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'Page3',
        inject: ['$tester'],
        props: {
            msg: String,
        },
        data: () => { return { testValue: "" } },
        methods: {
            fn1() {
                this.$tester.fn1({test: 'args1'}).then(this.updateValue);
            },
            fn2() {
                this.$tester.fn2({test: 'args2'}).then(this.updateValue);
            },
            updateValue(value) {
                console.log('fn return:', value);
                this.testValue = value;
            }
        }
    }
</script>
