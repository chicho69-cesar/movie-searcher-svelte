<script>
    export let title, year, type, index, poster;
</script>

<style>
    article {
        width: 20%;
        background-color: #fff;
        border-radius: 0.5rem;
        box-shadow: 0 0 15px -2.5px rgba(0 0 0 / 50%);
    }

    h3, h5, p { margin: 5px; padding: 0;}

    img {
        width: 100%;
        height: 350px;
        object-fit: cover;
        object-position: center;
    }
</style>

<article>
    <h3>{title}</h3>
    <h5>{year}</h5>
    <p>{type}</p> <span># {index}</span>
    <img src="{poster}" alt="{title}" loading="lazy" decoding="async"/>
</article>