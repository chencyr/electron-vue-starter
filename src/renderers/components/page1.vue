<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <p>
            For a guide and recipes on how to configure / customize this project,<br>
            check out the
            <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
        </p>
        <h3>Installed CLI Plugins</h3>
        <ul>
            <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank"
                   rel="noopener">babel</a></li>
            <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank"
                   rel="noopener">eslint</a></li>
        </ul>
        <h3>Test IPC call</h3>
        <ul>
            <li><a rel="noopener" v-on:click="fn1()">call $tester.fn1</a></li>
            <li><a rel="noopener" v-on:click="fn2()">call $tester.fn2</a></li>
        </ul>
        <ul>
            <li>{{ testValue }}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'Page1',
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h3 {
        margin: 40px 0 0;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
