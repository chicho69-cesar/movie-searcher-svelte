<script>
    import Movies from './Movies.svelte';

    let value = '';
    let response = [];

    const handleInput = event => {
        value = event.target.value;
    }

    $: if(value.length >= 3) {
        // @ts-ignore
        response = fetch(`https://www.omdbapi.com/?s=${value}&apikey=5e384b78`)
        .then(res => res.json())
        .then(data => data.Search || [])
        .catch(error => console.log(error));
    }
</script>

<style>
    input[type="text"] {
        padding: 0.25rem 0.5rem;
        outline: none;
        border: 1px solid #a1a1a1;
        font-size: 1.25rem;
    }

    span {
        font-weight: bold;
    }

    .error {
        color: #f10;
    }
</style>

<input 
    type="text" 
    placeholder="Buscar..." 
    value={value} 
    on:input={handleInput}
/>

<!-- Realizamos un renderizado condicional con la directica if-:else-/if -->
<!-- Con await esperamos la respuesta de una promesa -->
{#await response}
    <i>Loading...</i>
{:then movies}
    <span>Tenemos {movies.length} películas</span>
    <Movies movies = {movies}/>
{:catch}
    <p class="error">❌ Ocurrio un error</p>
{/await}