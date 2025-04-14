<template>
	<div>
		<div class="flex justify-center pt-4">
			<input class="w-1/2 p-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg" type="file"
				id="fileToUpload" @change="onFileSelected" />
			<div v-show="speakerAvatarFile" class="pl-6 flex items-center">
				<button @click="uploadSpeakerAvatar" type="button"
					class="w-48 h-10 pl- text-white font-montserrat font-semibold bg-[url('https://tft-application.s3.af-south-1.amazonaws.com/application_assets/images/bg-new.jpg')]">
					Upload Logo
				</button>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
const { uploadSpeakerAvatar } = useMySpeakersStore();
const { speakerAvatarFile } = storeToRefs(useMySpeakersStore());

const onFileSelected = (event: any) => {
	speakerAvatarFile.value = event.target.files[0];
}

</script>

<style></style>