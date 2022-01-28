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
            <li><a rel="noopener" v-on:click="$ipc.renderer().send('browser')">call $ipc.send</a></li>
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
        inject: ['$ipc'],
        props: {
            msg: String,
        },
        mounted: function() {
            this.$ipc.on('main.browser.page3', this.updateValue);
        },
        data: () => { return { testValue: 0 } },
        methods: {
            send() {
                this.$ipc.send('test');
            },
            updateValue(event) {
                this.testValue += event.data.value;
            }
        }
    }
</script>
