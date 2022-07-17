<script>
    export let initialCount;
    export let maxCounter = 9;
    let counter = initialCount;

    function handleClick() {
        counter++;
    }

    /* Le decimos a svelte con $: que la declaracion siguiente va a ser una
    declaracion reactiva, asi pued cada que cambien los elementos que la componen
    en este caso counter, esta tambien cambiara */
    $: isEvenOrOdd = counter % 2 === 0 ? 'Is Even' : 'Is Odd';

    // Esto es un bloque de sentencias reactivas
    /* $: {
        if (counter > 9) {
            counter = 1;
        }
    } */

    // Cuando es una sola expresion tambien lo podemos hacer de esta manera
    $: if (counter > maxCounter) {
        counter = 1;
    }
</script>

<style>
    div {
        margin: 1rem 0;
    }

    .number {
        color: #f10;
    }

    .message {
        color: #09f;
    }
</style>

<div>
    <button on:click={handleClick}>Incrementar</button>
    <span class="number">{counter}</span>
    <span class="message">{isEvenOrOdd}</span>
</div>