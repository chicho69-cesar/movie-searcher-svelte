<script>
    import Movie from './Movie.svelte';

    export let movies = [];
</script>

<style>
    .error {
        color: #f10;
    }

    section {
        width: 90%;
        margin: 2rem auto;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 1rem;
        justify-content: center;
        align-items: flex-start;
    }
</style>

<section>
    <!-- Renderizamos una lista de elementos -->
    {#each movies as { Title, Year, Type, Poster }, index} <!-- Usamos la 
    desestructuracion de cada movie -->
        <Movie 
            title = {Title}
            year = {Year}
            type = {Type}
            index = {++index}
            poster = {Poster}
        />
    {:else} <!-- Esto se renderiza si la lista esta vacia -->
        <p class="error">No hay peliculas 😥</p>
    {/each}
</section>