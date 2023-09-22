<script lang="ts">
    import profileImg from '$lib/Sidebar Images/Profile.png';
    import createImg from '$lib/Sidebar Images/Create Pass.png';
    import activeImg from '$lib/Sidebar Images/Active Pass.png';
    import appointmentImg from '$lib/Sidebar Images/Appointments.png';
    import updatesImg from '$lib/Sidebar Images/Updates.png';
    import trainingImg from '$lib/Sidebar Images/Training.png';

    let toggled: boolean = false;    
    export let studentName: string;
    
</script>

<div class="bg-white w-[255px] min-w-[255px] min-h-screen absolute {toggled ? "translate-x-0" : "translate-x-[-240px]"} transition duration-100 ease-in-out z-10">
    <div class=" {toggled ? "border-r border-[#92a7ba]" : "border-r-2 border-[#0073e6]"} h-screen ">
        <!--Logo-->
        <div class="py-[16px] flex items-center justify-center">
            <img class="max-h-[28px] min-h-[28px]" id="logo-ehp" src="https://pass.securly.com/img/pass-color-logo.3cbe25b6.png" alt="pass-logo">
            <button id="sidebarToggler" class="absolute right-[-8px] bg-white rounded-full h-12 flex items-center border border-[#92a7ba] px-[2px]" on:click={ () => {toggled = !toggled}}>
                {#if toggled}  
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24"><path fill="currentColor" d="m10.828 12l4.95 4.95l-1.414 1.415L8 12l6.364-6.364l1.414 1.414l-4.95 4.95Z"/></svg>
                {:else}
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24"><path fill="currentColor" d="m13.171 12l-4.95-4.95l1.415-1.413L16 12l-6.364 6.364l-1.414-1.415l4.95-4.95Z"/></svg>
                {/if}
            </button>
        </div>

        <!--Information-->
        <div class="px-[16px]">
            <div class="rounded-lg bg-[#E2EFFC]">
                <!--Student Information-->
                <div class="px-[16px] py-[8px] border-b border-white">
                    <div class="flex items-center justify-center">
                        <div class="bg-white rounded-lg p-[3px]">
                            <img class="rounded-lg" width=39 src="https://pass.securly.com/img/avatars/user-avatar.jpeg" alt="user-avatar">
                        </div>
                        <div class="flex-1 ps-2 leading-[12px]">
                            <b class="text-[14px] text-wrap">{ studentName.toLocaleUpperCase() }</b>
                            <p class="m-0 text-[13px] ">student</p>
                        </div>
                    </div>
                </div>
                <!--School Information-->
                <div class="px-[16px] py-[8px] border-b border-white">
                    <div class="flex items-center justify-center">
                        <div class="bg-white rounded-lg p-[3px]">
                            <img class="rounded-lg" width=39 src="https://pass.securly.com/img/avatars/user-avatar.jpeg" alt="user-avatar">
                        </div>
                        <div class="flex-1 ps-2 leading-[12px]">
                            <p class="m-0 text-[13px] ">School</p>
                            <b class="text-[14px] text-wrap">SCHOOL NAME</b>
                        </div>
                    </div>
                </div>
                <!--Misc Buttons-->
                <div class="flex items-center justify-center p-0">
                    <!--Settings Button-->
                    <div class="flex-1 text-center py-2">
                        <a href="/user-settings" class="block ml-7">
                            <svg width=17 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#0073e6">
                            <g>
                                <path fill="none" d="M0 0h24v24H0z"></path>
                                <path d="M3.34 17a10.018 10.018 0 0 1-.978-2.326 3 3 0 0 0 .002-5.347A9.99 9.99 0 0 1 4.865 4.99a3 3 0 0 0 4.631-2.674 9.99 9.99 0 0 1 5.007.002 3 3 0 0 0 4.632 2.672c.579.59 1.093 1.261 1.525 2.01.433.749.757 1.53.978 2.326a3 3 0 0 0-.002 5.347 9.99 9.99 0 0 1-2.501 4.337 3 3 0 0 0-4.631 2.674 9.99 9.99 0 0 1-5.007-.002 3 3 0 0 0-4.632-2.672A10.018 10.018 0 0 1 3.34 17zm5.66.196a4.993 4.993 0 0 1 2.25 2.77c.499.047 1 .048 1.499.001A4.993 4.993 0 0 1 15 17.197a4.993 4.993 0 0 1 3.525-.565c.29-.408.54-.843.748-1.298A4.993 4.993 0 0 1 18 12c0-1.26.47-2.437 1.273-3.334a8.126 8.126 0 0 0-.75-1.298A4.993 4.993 0 0 1 15 6.804a4.993 4.993 0 0 1-2.25-2.77c-.499-.047-1-.048-1.499-.001A4.993 4.993 0 0 1 9 6.803a4.993 4.993 0 0 1-3.525.565 7.99 7.99 0 0 0-.748 1.298A4.993 4.993 0 0 1 6 12c0 1.26-.47 2.437-1.273 3.334a8.126 8.126 0 0 0 .75 1.298A4.993 4.993 0 0 1 9 17.196zM12 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"></path>
                            </g>
                            </svg>
                        </a>
                    </div>
                    <!--Volume Button-->
                    <div class="flex-1 text-center py-2 border-x border-white">
                        <a href="/user-settings" class="block ml-7">
                            <svg xmlns="http://www.w3.org/2000/svg" width=17 viewBox="0 0 24 24"><path fill="#afbecc" d="M5.889 16H2a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h3.889l5.294-4.332a.5.5 0 0 1 .817.387v15.89a.5.5 0 0 1-.817.387L5.89 16Zm14.525-4l3.536 3.536l-1.415 1.414L19 13.414l-3.536 3.536l-1.414-1.414L17.586 12L14.05 8.465l1.414-1.415L19 10.586l3.535-3.536l1.415 1.415L20.414 12Z"/></svg>

                        </a>
                    </div>
                    <!--Log out Button-->
                    <div class="flex-1 text-center py-2">
                        <a href="/login" class="block ml-7">
                            <svg width=17 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                <g>
                                    <path fill="none" d="M0 0h24v24H0z"></path>
                                    <path fill="#0073e6" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2a9.985 9.985 0 0 1 8 4h-2.71a8 8 0 1 0 .001 12h2.71A9.985 9.985 0 0 1 12 22zm7-6v-3h-8v-2h8V8l5 4-5 4z"></path>
                                </g>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <!-- Navigator list-->
        <div class="px-[12px] py-[16px]">
            <div class="ps relative">
                <div class="pb-6 mb-6">
                    <ul class="flex flex-col grow shrink leading-[20px]">
                        <li class="py-[2px] flex items-center select-none">
                            <a href="/" class="py-[10px] px-[16px] text-[15px] font-normal flex hover:bg-gray-200 w-[100%] min-h-[37.5px] max-h-[37.5px] rounded-lg transition duration-300 ease-in">
                                <img src="{profileImg}" alt="wtv" width=17 class="mr-[12px]">
                                <p class="relative top-[-3px]">Digital ID</p>
                            </a>
                        </li>
                        <li class="py-[2px] flex items-center select-none">
                            <a href="/passes/create" class="py-[10px] px-[16px] text-[15px] font-normal flex hover:bg-gray-200 w-[100%] min-h-[37.5px] max-h-[37.5px] rounded-lg transition duration-300 ease-in">
                                <img src="{createImg}" alt="wtv" width=17 class="mr-[12px]">
                                <p class="relative top-[-3px]">Create Pass</p>
                            </a>
                        </li>
                        <li class="py-[2px] flex items-center select-none">
                            <a href="/passes/activepass" class="py-[10px] px-[16px] text-[15px] font-normal flex hover:bg-gray-200 w-[100%] min-h-[37.5px] max-h-[37.5px] rounded-lg transition duration-300 ease-in">
                                <img src="{activeImg}" alt="wtv" width=20 class="mr-[10px]">
                                <p class="relative top-[-3px]">Active Pass</p>
                            </a>
                        </li>
                        <li class="py-[2px] flex items-center select-none">
                            <a href="/" class="py-[10px] px-[16px] text-[15px] font-normal flex hover:bg-gray-200 w-[100%] min-h-[37.5px] max-h-[37.5px] rounded-lg transition duration-300 ease-in">
                                <img src="{appointmentImg}" alt="wtv" width=17 class="mr-[12px]">
                                <p class="relative top-[-3px]">Appointments</p>
                            </a>
                        </li>
                        <li class="py-[2px] flex items-center select-none">
                            <a href="/" class="py-[10px] px-[16px] text-[15px] font-normal flex hover:bg-gray-200 w-[100%] min-h-[37.5px] max-h-[37.5px] rounded-lg transition duration-300 ease-in">
                                <img src="{updatesImg}" alt="wtv" width=17 class="mr-[12px]">
                                <p class="relative top-[-3px]">Updates</p>
                            </a>
                        </li>
                        <li class="py-[2px] flex items-center select-none">
                            <a href="/" class="py-[10px] px-[16px] text-[15px] font-normal flex hover:bg-gray-200 w-[100%] min-h-[37.5px] max-h-[37.5px] rounded-lg transition duration-300 ease-in">
                                <img src="{trainingImg}" alt="wtv" width=17 class="mr-[12px]">
                                <p class="relative top-[-3px]">Training</p>
                            </a>
                        </li>
                    </ul>
                    <div class="flex items-center">
                        <span class="mx-auto mt-3 mb-6 bg-[#a1a1a1] px-[6.750px] py-[1px] rounded-full text-white text-[11.25px] font-normal">production - 2.3.29</span>
                    </div>
                </div>
            </div>
        </div>
        <!---->
    </div>
</div>