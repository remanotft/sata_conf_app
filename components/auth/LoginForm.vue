<template>
	<div class="card flex flex-col items-center border-2 shadow-lg">
		<div class="bg-[#000] h-28 w-full pt-6">
			<NuxtLink to="/" class="main-logo flex justify-center shrink-0 items-center">
				<img class="ml-[5px] w-48 h-16 flex items-center"
					src="https://tft-dna-brand-architects-cc.s3.af-south-1.amazonaws.com/dna-brand-architects-cc-logos/SATA+Conference+Logo+-+2.png"
					alt="SATA 45 Logo" />
				<!-- <span class="align-middle text-2xl font-semibold ltr:ml-1.5 rtl:mr-1.5 text-white-light lg:inline">45th SATA</span> -->
			</NuxtLink>
		</div>
		<h2 class="mt-8 text-center text-3xl font-montserrat font-bold leading-9 tracking-tight text-gray-900 lg:pb-4">
			Login</h2>
		<form class="card h-96"
			@submit.prevent="$event => signIn('credentials', { email, password, callbackUrl: '/admin' })">
			<div class="pt-6">
				<label for="email" class="block text-sm font-montserrat font-medium leading-6 text-gray-900">Email
					address</label>
				<div>
					<input id="email" name="email" type="email" autocomplete="email" placeholder="name@company.com"
						required v-model="email"
						class="block w-96 rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
				</div>
			</div>
			<div class="pt-6">
				<div class="flex items-center justify-between">
					<label for="password"
						class="block text-sm font-montserrat font-medium leading-6 text-gray-900">Password</label>
					<div class="text-sm">
						<a class="cursor-pointer font-montserrat font-semibold text-green-700 hover:text-green-500">Forgot
							password?</a>
					</div>
				</div>
				<div class="mt-2 ">
					<input id="password" name="password" type="password" autocomplete="current-password" required
						v-model="password"
						class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
				</div>
			</div>
			<div class="px-8 pt-10">
				<button type="submit"
					class="flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm font-montserrat font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign
					in</button>
			</div>
			<p class="mt-10 text-center text-base font-montserrat text-gray-500">
				Not a member?
				{{ ' ' }}
				<NuxtLink to="/auth/register"
					class="font-semibold font-montserrat leading-6 text-green-700 hover:text-green-500">Sign
					up</NuxtLink>
			</p>
		</form>
	</div>
</template>

<script lang="ts" setup>
const { signIn } = useAuth();
const { data } = await useFetch('/api/userSession');

const email = ref('');
const password = ref('');

</script>

<style></style>