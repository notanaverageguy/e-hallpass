<script lang="ts">
    import type { PageData } from './$types';
    
    import { browser } from '$app/environment';

    let departingFrom = "Teacher/Location";
    let departingInput = "";
    let departingState = "idle";

    function departingFocus() {
        departingState = "focus";
    }

    function departingKeyPress() {
        departingState = "invisible";
    }

    function departingLeave() {
        departingState = "idle";
        departingFrom = validateDestination(departingInput) ? departingInput : departingFrom;
        departingInput = "";
    }

    function validateDestination(dest:string):boolean {
        const destinations:string[] = [
            "test1"
        ];
        if(destinations.includes(dest)) return true;
        return false;
    }

</script>

<main class="pt-[32px] pb-[15px] h-[100%]">
    <div class="px-[12px]">
        <div class="mx-[-12px]">
            <div class="col-xl-6 col-lg-8 bg-white text-center pt-4 pb-2 relative"></div> <!-- Help Button-->
        </div>

        <div class="mx-[-12px]">
            <div class="bg-white text-left py-[24px] px-[12px] mb-[48px]">


                <div class="border rounded-2xl bg-gradient-to-r from-[#003b75] to-[#005dba]"> <!-- NOW PASS thign-->
                    <button class="w-[100%] rounded-lg py-[8px] px-[24px] font-bold text-white">
                        <p class="text-[15px]">NOW PASS</p>
                        <p class="text-xs uppercase">Pass Limit: 4/4</p>
                        <p class="text-xs uppercase">09/24/2023 - 09/24/2023</p>
                    </button>
                </div>


                <div class="my-2">
                    <span class="opacity-50 text-[21px] mb-2 inline-block font-normal">Departing From:</span>

                    <div class="p-[11.2px] border border-[#003b75]">
                        <div class="px-[2px] flex h-[24px]">
                            {#if departingState != "invisible"}
                                <p class="flex h-[24px] truncate {departingState == "focus" ? "absolute translate-y-[-5px] opacity-75" : ""}" id="departingFromP">
                                    { departingFrom }
                                </p>
                            {/if}
                            <input class="w-[339px] outline-0 absolute {departingState == "invisible" ? "" : "opacity-0"}"
                                on:focusin={ departingFocus } on:focusout={ departingLeave } on:keydown={ departingKeyPress }
                                bind:value={ departingInput }
                            >
                        </div>
                    </div>


                    <div class=""><!-- EDIT BUTTON-->
                        <span class="text-50 flex justify-content-center align-items-center float-right">
                            <svg class="mr-[8px]" width=20 fill="#000000" viewBox="0 0 1024 1024" t="1639990532110" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="12171" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M199.04 672.64l193.984 112 224-387.968-193.92-112-224 388.032z m-23.872 60.16l32.896 148.288 144.896-45.696-177.792-102.592zM455.04 229.248l193.92 112 56.704-98.112-193.984-112-56.64 98.112zM104.32 708.8l384-665.024 304.768 175.936-383.936 665.088h0.064l-248.448 78.336-56.448-254.336z m384 254.272v-64h448v64h-448z" p-id="12172"></path></g></svg>
                            Edit
                        </span>
                    </div>
                </div>


            </div>
        </div>
    </div>
</main>