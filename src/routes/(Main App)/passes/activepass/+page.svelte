<script lang="ts">
    import type { PageData } from './$types';

    export let data;

    let depart = data.depart;
    let dest = data.dest;

    let timems: string = data.time ? data.time : "0";
    let time: Date = new Date(Date(timems));
    
</script>

<div class="pt-[32px] pb-[15px] h-[100%]">
    <div class="px-[12px] bg-[#707070] rounded-2xl">
        <div class="mx-[-12px]">
            <div class=" pt-[8px]">
                <div class="m-[16px]">
                    <div class="px-[30px] py-[40px] bg-white rounded-2xl flex align-center justify-center w-[100%] shadow-lg text-red-500 text-[50px] font-bold" style="font-family: Metropolis">
                        00:03:17 
                    </div>
                </div>
    
                <hr class="my-[16px] border-t bg-white h-[2px] text-white font-bold">
    
                <div class="px-[24px] flex flex-row">
                    <div class="w-max flex-1" style="font-family: Metropolis">
                        <div class="flex flex-col">
                            <span class="text-white pb-2 px-[10px] font-bold"> From:</span>
                            <div class="text-white border-[2px] mx-[5px] px-[10px] pt-[5px] pb-[3px] rounded-full font-bold border-white text-[15px] text-center leading-4">{ depart }</div>
                            <div class="text-white p-2 text-center font-medium">
                                {(time.getHours() % 12).toString().padStart(2, '0')}:{(time.getMinutes() % 60).toString().padStart(2, '0')} {time.getHours() % 12 < 12 ? "AM" : "PM"}
                            </div> 
                        </div>
                    </div>
        
                    <div class="w-max flex-1" style="font-family: Metropolis">
                        <div class="flex flex-col">
                            <span class="text-white pb-2 px-[10px] font-bold"> From:</span>
                            <div class="text-white border-[2px] mx-[5px] px-[10px] pt-[5px] pb-[3px] rounded-full font-bold border-white text-[15px] text-center leading-4">{ dest }</div>
                            <div class="text-white p-2 text-center font-medium">01:47 PM</div>
                        </div>
                    </div>
                </div>
                
                <div class="p-[48px] flex items-center text-white" style="font-family: Metropolis">
                    <div class="pr-[16px] font-bold"> Status: </div>
                    
                    <div class="border-[2px] px-[10px] py-[5px] rounded-lg bg-white text-red-500 font-bold h-min">
                        ENDED
                    </div>
    
                    <div class="mx-[48px] font-medium">
                        09-27-2023 1:50 PM
                    </div>
                </div>
    
            </div>
        </div>
    </div>
</div>