<script lang="ts">
    import profileImg from '$lib/Navbar Images/Profile.png';
    import notificationImg from '$lib/Navbar Images/Notification.png';
    import helpImg from '$lib/Navbar Images/Help.png';

    let header: string;

    import { onMount } from 'svelte';
    onMount(() => {
        const url = window.location.href;
        const route = url.replace(/(?:http:\/\/(?:.)+)?(?:[0-9]\.?)+\//, "");
        switch(route) {
            case "id-card":
                header = "Digital ID";
                break;
            case "passes/activepass":
                header = "Active Pass";
                break;
            case "passes/create":
                header = "Create Pass";
                break;
            case "appointments":
                header = "Appointments";
                break;
            case "updates":
                header = "Updates";
                break;
            case "user-settings":
                header = "User Settings";
                break;
            default:
                header = route;
        }
    });

</script>

<div class="bg-white z-0">
	<div class="p-0 p-lg-3 flex-column-reverse">
        <ul class="py-2 px-2 px-lg-0 py-md-0 min-h-[63px] flex items-center border-b border-[#d8dbe0]">
            <div class="me-auto">
                <div class="ml-[24px] text-[18px]">
                    {#if header}
                        { header }
                    {/if}
                </div>
            </div>
            <!--Buttons-->
            <div class="relative right-0 flex items-center">
                <a href="/id-card">
                    <img src="{profileImg}" alt="wtv" width=22 class="mx-2">
                </a>
                <div>
                    <img src="{notificationImg}" alt="wtv" width=20 class="mx-2">
                </div>
                <button>
                    <img src="{helpImg}" alt="wtv" width=15 class="mx-2">
                </button>
            </div>
        </ul>
    </div>
</div>
