<script lang="ts">
    import type { PageData } from './$types';

    export let data;

    let depart = data.depart;
    let dest = data.dest;
    let time = data.time;
    
</script>

{ depart } { dest } { time }