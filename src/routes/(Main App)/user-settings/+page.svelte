<script lang="ts">
    import type { PageData } from './$types';
    
    export let data: PageData;
    
    let name: string | undefined = data.name;
    let email: string | undefined = data.email;
</script>

<div class="text-center pt-[32px] pb-[80px]">
    <h2 class="text-[18px] font-medium mt-[16px] mb-[8px]"> {name?.toLocaleUpperCase()} </h2>
    <p class="text-[15px] font-normal mb-[16px] text-[#6a707e]"> { email }</p>
</div>