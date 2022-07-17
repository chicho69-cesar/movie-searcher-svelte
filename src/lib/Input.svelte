<script>
    import Movies from './Movies.svelte';
    import { getMovies } from './../services/api/get-movies';

    let value = '';
    let response = getMovies(value);

    const handleInput = event => {
        value = event.target.value;
    }

    $: if(value.length >= 3) {
        response = getMovies(value);
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