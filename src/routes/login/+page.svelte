<script lang="ts">
    import GG4LImg from "$lib/Company Logos/GG4L.png";
    import ClassLinkImg from "$lib/Company Logos/ClassLink.png";
    import CleverImg from "$lib/Company Logos/Clever.png";
</script>

<div class="flex items-center h-screen w-screen">
    <div class="px-[12px] w-[100%]">
        <div class="mx-[-12px] row justify-center">
            <div class="px-[12px] col-xl-6 col-lg-6 col-md-12">
                <div class="bg-white rounded drop-shadow-lg">
                    <div class="p-4">
                        <div class="p-[16px]">

                            <!-- Actual form stuff-->
                            <form method="POST" action="?/login">
                                <div class="flex justify-center mb-4">
                                    <img width=128 src="https://pass.securly.com/img/securlypass-color-logo.6cf73374.png" alt="securlypass-logo">
                                </div>

                                <p class="text-muted my-4" style="color:rgba(44, 56, 74, 0.682);"> If your school uses a third party service for authentication (such as Google, Clever, Microsoft, ClassLink, or GG4L) please log in by choosing the appropriate button below. </p>
                            
                                <!-- Outside auth buttons here-->
                                <div class="">
                                    <div class="col-md-16 text-center mb-3 px-0 px-md-2">
                                        <div class="flex justify-center">
                                            <!-- Google -->
                                            <div class="ext-login-container g-signin2">
                                                <div class="m-[5px] rounded-full bg-[#E1E1E1]">
                                                    <img class="p-[10px]" width=42 src="https://cdn-icons-png.flaticon.com/512/281/281764.png" alt="Google">

                                                </div>
                                                <p class="mb-[16px] text-[12px]">Google</p>
                                            </div>
                                            <!-- Clever -->
                                            <div class="ext-login-container">
                                                <div class="m-[5px] rounded-full bg-[#E1E1E1]">
                                                    <img class="p-[10px]" width=42 src={CleverImg} alt="Google">

                                                </div>
                                                <p class="mb-[16px] text-[12px]">Clever</p>
                                            </div>
                                            <!-- Microsoft -->
                                            <div class="ext-login-container">
                                                <div class="m-[5px] rounded-full bg-[#E1E1E1]">
                                                    <img class="p-[10px]" width=42 src="https://cdn-icons-png.flaticon.com/512/732/732070.png" alt="Google">
                                                </div>
                                                <p class="mb-[16px] text-[12px]">Microsoft</p>
                                            </div>
                                            <!-- ClassLink -->
                                            <div class="ext-login-container">
                                                <div class="m-[5px] rounded-full bg-[#E1E1E1]">
                                                    <img class="p-[10px]" width=42 src={ClassLinkImg} alt="Google">

                                                </div>
                                                <p class="mb-[16px] text-[12px]">ClassLink</p>
                                            </div>
                                            <!-- GG4L -->
                                            <div class="ext-login-container">
                                                <div class="m-[5px] rounded-full bg-[#E1E1E1]">
                                                    <img class="p-[10px]" width=42 src={GG4LImg} alt="Google">

                                                </div>
                                                <p class="mb-[16px] text-[12px]">GG4L</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!--Form Data-->
                                <div class="flex">
                                    <span class="border-y border-l flex items-center py-[11.2px] px-[16px] border-black">
                                        <svg width=16 height=16 xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 512 512" role="img">undefined<path fill="var(--ci-primary-color, currentColor)" d="M411.6,343.656l-72.823-47.334,27.455-50.334A80.23,80.23,0,0,0,376,207.681V128a112,112,0,0,0-224,0v79.681a80.236,80.236,0,0,0,9.768,38.308l27.455,50.333L116.4,343.656A79.725,79.725,0,0,0,80,410.732V496H448V410.732A79.727,79.727,0,0,0,411.6,343.656ZM416,464H112V410.732a47.836,47.836,0,0,1,21.841-40.246l97.66-63.479-41.64-76.341A48.146,48.146,0,0,1,184,207.681V128a80,80,0,0,1,160,0v79.681a48.146,48.146,0,0,1-5.861,22.985L296.5,307.007l97.662,63.479h0A47.836,47.836,0,0,1,416,410.732Z" class="ci-primary"></path></svg>
                                    </span>
                                    <input class="form-control mb-0 w-[100%] border-y border-r outline-0 border-black focus:border-[#005dba] py-[11.2px] px-[16px]" placeholder="Email" autocomplete="email" type="email" name="email">                                </div>
                                <div class="flex mt-[16px]">
                                    <span class="border-y border-l flex items-center py-[11.2px] px-[16px] border-black">
                                        <svg width=16 height=16 xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 512 512" role="img">undefined<path fill="var(--ci-primary-color, currentColor)" d="M384,200V144a128,128,0,0,0-256,0v56H88V328c0,92.635,75.364,168,168,168s168-75.365,168-168V200ZM160,144a96,96,0,0,1,192,0v56H160ZM392,328c0,74.99-61.01,136-136,136s-136-61.01-136-136V232H392Z" class="ci-primary"></path></svg>
                                    </span>
                                    <input class="form-control mb-0 w-[100%] border-y border-r outline-0 border-black focus:border-[#005dba] py-[11.2px] px-[16px]" placeholder="Name" autocomplete="name" type="text" name="name" >
                                </div>

                                <!-- Forgor Button-->
                                <div class="flex justify-end h-[46px]" style="-webkit-tap-highlight-color: transparent;">
                                    <button class="px-[32px] py-[16px]" type="button">
                                        <a href="/forgotten-password" class="underline decoration-[#321fdb] text-[#321fdb] text-[14px] relative top-[-8px]"> Forgot password? </a>
                                    </button>
                                </div>
                                <!-- Submit Btton-->
                                <div class="row mt-[16px] mx-[-12px]">
                                    <div class="col-md-12 text-center">
                                        <button class="select-none me-2 text-white px-[32px] py-[16px] h-[46px] rounded-xl bg-gradient-to-r from-[#003975] to-[#005dba]" type="submit">
                                            <p class="relative top-[-5px]">Login</p>
                                        </button>
                                    </div>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>