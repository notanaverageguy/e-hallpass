<script lang="ts">
	import './style.css';
	import plugImg from '$lib/Create Pass/Plus.png';

	import { onMount } from 'svelte';
	import { db } from '$lib/pocketbase';

	let locations: any[] = [];

	type input = {
		currentValue: string,
		input: string,
		dest: destination,
		favorites: any[]
	}

	type destination = {
		name: string|null,
		email: string|null
	}

	let departing: input = {
		currentValue: '',
		input: '',
		dest: {
			name: '', 
			email: ''
		},
		favorites: [
			1,2,3,4,5
		],
	}

	let dest: input = {
		currentValue: '',
		input: '',
		dest: {
			name: '', 
			email: ''
		},
		favorites: [
			1,2,3,4,5
		],
	}

	onMount(async () => {
		const resultList = await db.collection('locations').getList(1, 450, {
			sort: 'name'
		});
		locations = resultList.items;
	});

	function validateDestination(name: string): destination {
		for (const location of locations) {
			if (location.name == name) return {
				name: location.name,
				email: location.email
			};
		}
		return {name: null, email: null};
	}

	function departingFocus(): void {
		if (departing.currentValue) {
			(<HTMLInputElement>document.getElementsByName('departInput')[0]).placeholder = departing.currentValue;
			departing.currentValue = '';
		}
		document.getElementById('departingDropDown')?.classList.toggle('hidden');
	}
	function departingUnfocus(): void {
		setTimeout(() => {
			document.getElementById('departingDropDown')?.classList.toggle('hidden');

			const destination = validateDestination(departing.currentValue)
			if (destination.name != null) {
				departing.input = departing.currentValue;
				departing.dest.name = destination.name;
				departing.dest.email = destination.email;
			} else {
				departing.currentValue = departing.input;
			}
		}, 1);
	}

	function destFocus(): void {
		if (dest.currentValue) {
			(<HTMLInputElement>document.getElementsByName('destInput')[0]).placeholder = dest.currentValue;
			dest.currentValue = '';
		}
		document.getElementById('destDropDown')?.classList.toggle('hidden');
	}
	function destUnfocus(): void {
		setTimeout(() => {
			document.getElementById('destDropDown')?.classList.toggle('hidden');

			const destination = validateDestination(dest.currentValue)
			if (destination.name != null) {
				dest.input = dest.currentValue;
				dest.dest.name = destination.name;
				dest.dest.email = destination.email;
			} else {
				dest.currentValue = dest.input;
			}
		}, 1);
	}
</script>

<main class="pt-[32px] pb-[15px] h-[100%]">
	<div class="px-[12px]">
		<div class="mx-[-12px]">
			<div class="col-xl-6 col-lg-8 bg-white text-center pt-4 pb-2 relative" />
			<!--Help Button-->
		</div>

		<div class="mx-[-12px]">
			<div class="bg-white text-left py-[24px] px-[12px] mb-[48px]">
				<div class="border rounded-2xl bg-gradient-to-r from-[#003b75] to-[#005dba]">
					<!--NOW PASS thign-->
					<button class="w-[100%] rounded-lg py-[8px] px-[24px] font-bold text-white">
						<p class="text-[15px]">NOW PASS</p>
						<p class="text-xs uppercase">Pass Limit: 4/4</p>
						<p class="text-xs uppercase">09/24/2023 - 09/24/2023</p>
					</button>
				</div>

				<div class="my-2">
					<form method="POST" action="?/submit">
						<span class="big-text">Departing From:</span>

						<div class="p-[11.2px] border border-[#003b75]">
							<div class="px-[2px] flex h-[24px]">
								<input
									name="departInput"
									class="w-[100%] outline-0"
									placeholder="Teacher/location"
									autocomplete="off"
									bind:value={departing.currentValue}
									on:focus={departingFocus}
									on:focusout={departingUnfocus}
								/>
							</div>
							<div
								id="departingDropDown"
								class="hidden absolute mt-3 right-0 left-0 mx-[15px] bg-white max-h-[148px] bg-white z-10 overflow-y-auto border-b border-r border-black"
							>
								{#each locations as location}
									{#if location.name.toLowerCase().includes(departing.currentValue.toLowerCase())}
										<div
											class="truncate py-2 px-4 text-sm {location.name == departing.dest.name
												? 'bg-gradient-to-r from-[#298FCE] to-[#304BAF] text-white'
												: ''}"
										>
											<button
												class="w-[100%] text-left"
												on:click|preventDefault={() => {
													departing.currentValue = location.name;
												}}
											>
												<p>{location.name} {location.email}</p>
											</button>
										</div>
									{/if}
								{/each}
							</div>
						</div>

						<div class="text-blue-700">
							<!--EDIT BUTTON-->
							<span class="edit-button-inner">
								<svg
									class="mr-[8px]"
									width="20"
									fill="#1d4ed8"
									viewBox="0 0 1024 1024"
									version="1.1"
									xmlns="http://www.w3.org/2000/svg"
									xmlns:xlink="http://www.w3.org/1999/xlink"
									><g id="SVGRepo_bgCarrier" stroke-width="0" /><g
										id="SVGRepo_tracerCarrier"
										stroke-linecap="round"
										stroke-linejoin="round"
									/><g id="SVGRepo_iconCarrier"
										><path
											d="M199.04 672.64l193.984 112 224-387.968-193.92-112-224 388.032z m-23.872 60.16l32.896 148.288 144.896-45.696-177.792-102.592zM455.04 229.248l193.92 112 56.704-98.112-193.984-112-56.64 98.112zM104.32 708.8l384-665.024 304.768 175.936-383.936 665.088h0.064l-248.448 78.336-56.448-254.336z m384 254.272v-64h448v64h-448z"
										/></g
									></svg
								>
								Edit
							</span>
						</div>

						<div class="favorite-teacher-container">
							<!--Favorite teacher/room thing-->
							{#each departing.favorites as location}
								<div class="h-[100px] snap-center">
									<div class="flex pl-[5px]">
										<div class="px-[5px] w-1/3">
											<div class="favorite-teacher-wrapper">
												<div class="favorite-teacher-image-wrapper">
													<img src={plugImg} alt="" width="30" />
												</div>
												<span class="favorite-teacher-text"> Add favorite Teacher/Room </span>
											</div>
										</div>
									</div>
								</div>
							{/each}
						</div>

						<hr class="my-[16px] border-t border-gray-300" />

						<span class="big-text">Destination:</span>

						<div class="p-[11.2px] border border-[#003b75]">
							<div class="px-[2px] flex h-[24px]">
								<input
									name="destInput"
									class="w-[100%] outline-0"
									placeholder="Teacher/location"
									autocomplete="off"
									bind:value={dest.currentValue}
									on:focus={destFocus}
									on:focusout={destUnfocus}
								/>
							</div>
							<div
								id="destDropDown"
								class="hidden absolute mt-3 right-0 left-0 mx-[15px] bg-white max-h-[148px] bg-white z-10 overflow-y-auto border-b border-r border-black"
							>
								{#each locations as location}
									{#if location.name.toLowerCase().includes(dest.currentValue.toLowerCase())}
										<div
											class="truncate py-2 px-4 text-sm {location.name == dest.dest.name
												? 'bg-gradient-to-r from-[#298FCE] to-[#304BAF] text-white'
												: ''}"
										>
											<button
												class="w-[100%] text-left"
												on:click|preventDefault={() => {
													dest.currentValue = location.name;
												}}
											>
												<p>{location.name} {location.email}</p>
											</button>
										</div>
									{/if}
								{/each}
							</div>
						</div>

						<div class="text-blue-700">
							<!--EDIT BUTTON-->
							<span class="edit-button-inner">
								<svg
									class="mr-[8px]"
									width="20"
									fill="#1d4ed8"
									viewBox="0 0 1024 1024"
									version="1.1"
									xmlns="http://www.w3.org/2000/svg"
									xmlns:xlink="http://www.w3.org/1999/xlink"
									><g id="SVGRepo_bgCarrier" stroke-width="0" /><g
										id="SVGRepo_tracerCarrier"
										stroke-linecap="round"
										stroke-linejoin="round"
									/><g id="SVGRepo_iconCarrier"
										><path
											d="M199.04 672.64l193.984 112 224-387.968-193.92-112-224 388.032z m-23.872 60.16l32.896 148.288 144.896-45.696-177.792-102.592zM455.04 229.248l193.92 112 56.704-98.112-193.984-112-56.64 98.112zM104.32 708.8l384-665.024 304.768 175.936-383.936 665.088h0.064l-248.448 78.336-56.448-254.336z m384 254.272v-64h448v64h-448z"
										/></g
									></svg
								>
								Edit
							</span>
						</div>

						<div class="favorite-teacher-container">
							<!--Favorite teacher/room thing-->
							{#each dest.favorites as location}
								<div class="h-[100px] snap-center">
									<div class="flex pl-[5px]">
										<div class="px-[5px] w-1/3">
											<div class="favorite-teacher-wrapper">
												<div class="favorite-teacher-image-wrapper">
													<img src={plugImg} alt="" width="30" />
												</div>
												<span class="favorite-teacher-text"> Add favorite Teacher/Room </span>
											</div>
										</div>
									</div>
								</div>
							{/each}
						</div>

						<div class="flex justify-center">
							<div class="mt-[8px] mb-[16px]">
								<button
									class="mt-[8px] py-[16px] px-[32px] text-white font-bold rounded-xl bg-gradient-to-r from-[#003975] to-[#005dba]"
								>
									<p class="text-[14px]">Submit</p>
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
</main>
