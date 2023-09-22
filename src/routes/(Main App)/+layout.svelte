<script lang="ts">
    import Sidebar from "./Sidebar.svelte";
    import Navbar from "./Navbar.svelte";

    export let data: any;

    let name = (data.name);

</script>

<title>
    securlypass
</title>

<main>
    <div class="min-w-screen max-w-screen">

            <Sidebar studentName={ name } />
        <div class="h-screen flex flex-col">
            <Navbar />

            <div class="h-[100%]">
                <slot />
            </div>
        </div>
    </div>
</main>