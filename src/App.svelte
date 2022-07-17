<script>
    import Counter from "./lib/Counter.svelte";
    import Input from "./lib/Input.svelte";

    const comonProps = {
        initialCount: 1
    };
</script>

<!-- <Counter { ...comonProps } maxCounter={9}/>
<Counter { ...comonProps } maxCounter={7}/>
<Counter initialCount={16} maxCounter={17}/> -->

<Input/>