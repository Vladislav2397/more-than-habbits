<template lang="pug">

.b-home
    .__header
        h2.__title Tasks
        button.__button(
            @click="onClick"
        ) Add
    .__container.container
        .__grid
            .__item(
                v-for="(column, index) in items"
                :key="index"
            ) {{ column }}

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Button } from '@/shared/ui/Button'

export type HomeProps = {
    //
}

@Component({
    components: {
        'button-component': Button,
    },
})
export default class Home extends Vue {
    counter = 3

    onClick() {
        this.rows.push([`${this.counter}`, `task ${this.counter}`, 'ToDo'])
        this.counter++
        console.log('button click')
    }

    get items() {
        return [...this.headers, ...this.rows.flat()]
    }

    rows = [
        ['id', 'name', 'status'],
        ['1', 'task', 'ToDo'],
        ['2', 'task 2', 'ToDo'],
    ]

    get headers() {
        return ['id', 'name', 'status']
    }
}
</script>

<style lang="scss" src="./Home.critical.scss" />
<!-- <style lang="scss" src="./Home.main.scss" /> -->
