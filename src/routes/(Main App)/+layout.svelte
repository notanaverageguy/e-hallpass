<script lang="ts">
    import Sidebar from "./Sidebar.svelte";
    import Navbar from "./Navbar.svelte";

    export let data: any;

    let studentName = (data.studentName);
    let schoolName = data.schoolName;

</script>

<title>
    securlypass
</title>

<main>
    <div class="min-w-screen max-w-screen">

            <Sidebar studentName={ studentName } schoolName={ schoolName }/>
        <div class="h-screen flex flex-col">
            <Navbar />

            <div class="h-[100%] overflow-y-hidden">
                <slot />
            </div>
        </div>
    </div>
</main>